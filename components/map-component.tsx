"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Location {
  id: number;
  name: string;
  type: "restaurant" | "place";
  category: string;
  coords: { lat: number; lng: number };
}

interface MapComponentProps {
  locations: Location[];
  focusedLocation?: Location;
  language: string;
}

export default function MapComponent({ locations, focusedLocation, language }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(focusedLocation ?? null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Punta Arenas
    const map = L.map(mapRef.current).setView([-53.1638, -70.9069], 13);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Create custom icons
    const createIcon = (type: "restaurant" | "place", isSelected: boolean) => {
      const color = type === "restaurant" ? "#D4A574" : "#1a1a1a";
      const size = isSelected ? 40 : 30;
      
      return L.divIcon({
        className: "custom-marker",
        html: `
          <div style="
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border: 3px solid ${isSelected ? "#fff" : color};
            border-radius: 50%;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
          ">
            <span style="color: white; font-size: ${isSelected ? 18 : 14}px;">
              ${type === "restaurant" ? "🍽" : "🏔"}
            </span>
          </div>
        `,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2]
      });
    };

    // Add markers for all locations
    locations.forEach(location => {
      if (!location?.coords) return;
      
      const isSelected = selectedLocation?.id === location.id && selectedLocation?.type === location.type;
      const icon = createIcon(location.type, isSelected);
      
      const marker = L.marker([location.coords.lat, location.coords.lng], { icon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; padding: 5px;">
            <strong style="font-size: 14px;">${location?.name ?? ""}</strong>
            <br/>
            <span style="color: #666; font-size: 12px;">${location?.category ?? ""}</span>
          </div>
        `);

      marker.on("click", () => {
        setSelectedLocation(location);
      });

      markersRef.current.push(marker);
    });
  }, [locations, selectedLocation]);

  // Handle focused location
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !focusedLocation?.coords) return;

    setSelectedLocation(focusedLocation);
    map.setView([focusedLocation.coords.lat, focusedLocation.coords.lng], 16, {
      animate: true,
      duration: 1
    });

    // Open popup for focused marker
    setTimeout(() => {
      const focusedMarker = markersRef.current.find((_, index) => {
        const loc = locations[index];
        return loc?.id === focusedLocation.id && loc?.type === focusedLocation.type;
      });
      focusedMarker?.openPopup();
    }, 500);
  }, [focusedLocation, locations]);

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="h-[calc(100vh-200px)] min-h-[400px] rounded-xl shadow-lg"
      />
      
      {/* Selected Location Info */}
      {selectedLocation && (
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 z-[1000]">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${
                  selectedLocation.type === "restaurant" ? "bg-[#D4A574]" : "bg-[#1a1a1a]"
                }`} />
                <h3 className="font-semibold text-[#1a1a1a]">{selectedLocation?.name ?? ""}</h3>
              </div>
              <p className="text-sm text-gray-600">{selectedLocation?.category ?? ""}</p>
            </div>
            <button
              onClick={() => setSelectedLocation(null)}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}