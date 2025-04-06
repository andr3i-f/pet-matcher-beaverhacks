'use client';

import { createContext, ReactNode, useEffect, useState } from "react";

export const MatchContext = createContext(undefined)

export const MatchProvider = ({ children } : {children: ReactNode}) => {
    const [matches, setMatches] = useState(undefined);
    console.log(matches)
    return (
        <MatchContext.Provider value={{ matches, setMatches }}>
            {children}
        </MatchContext.Provider>
    )
}