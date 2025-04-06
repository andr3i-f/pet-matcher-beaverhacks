'use client';

import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface LocationType {
  latitude: number;
  longitude: number;
}

interface LocationContextType {
  location: LocationType | undefined;
  setLocation: (location: LocationType) => void;
}

export const LocationContext = createContext(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<LocationType | undefined>();
  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            setLocation({latitude: latitude, longitude: longitude})
          },
          (error) => {
            console.log("Error getting location", error);
            setLocation({latitude: 44.57591814893625, longitude: -123.30137824215815})
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
        setLocation({latitude: 44.57591814893625, longitude: -123.30137824215815})
      }
    };
    fetchLocation();
  }, []); 
  return (
    // @ts-ignore - Ignoring type error for LocationContext.Provider value
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};