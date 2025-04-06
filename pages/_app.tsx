import { AppProps } from "next/app";
import { LocationProvider } from "../context/LocationProvider";


export function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LocationProvider>
            <Component {...pageProps}/>
        </LocationProvider>
    )
}