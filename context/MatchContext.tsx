'use client';

import { createContext, ReactNode, useState } from "react";

// Define the match type to match the actual API response structure
export interface MatchedPet {
  id?: number;
  organization_id?: string;
  url?: string;
  type?: string;
  species?: string;
  name?: string;
  description?: string;
  photos?: Array<{
    small?: string;
    medium?: string;
    large?: string;
    full?: string;
  }>;
  primary_photo_cropped?: {
    small?: string;
    medium?: string;
    large?: string;
    full?: string;
  };
  // Add other properties as needed
}

interface MatchContextType {
  matches: MatchedPet[] | undefined;
  setMatches: React.Dispatch<React.SetStateAction<MatchedPet[] | undefined>>;
  currentMatchIndex: number;
  setCurrentMatchIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const MatchContext = createContext<MatchContextType>({
  matches: undefined, 
  setMatches: () => {},
  currentMatchIndex: 0,
  setCurrentMatchIndex: () => {}
});

export const MatchProvider = ({ children } : {children: ReactNode}) => {
    const [matches, setMatches] = useState<MatchedPet[] | undefined>(undefined);
    const [currentMatchIndex, setCurrentMatchIndex] = useState<number>(0);
    
    return (
        <MatchContext.Provider value={{ 
          matches, 
          setMatches,
          currentMatchIndex,
          setCurrentMatchIndex
        }}>
            {children}
        </MatchContext.Provider>
    )
}