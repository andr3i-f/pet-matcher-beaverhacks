import { createContext, ReactNode, useState } from "react";

interface LocationProviderProps {
    children: ReactNode;
  }

export const LocationProviderContext = createContext<any>(null);

export const LocationProvider = ({ children }: LocationProviderProps) => {
    const [location, setLocation] = useState(undefined)

    return (
        <LocationProvider value={location}>
            {children}
        </LocationProvider>
    )
}