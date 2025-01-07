import React, { createContext, useState, ReactNode } from "react";
import { historicalPlaces } from "../db/data";

export type HistoricalPlace = {
  id: number;
  name: string;
  location: {
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    region: string;
    nearest_city: string;
  };
  image: string;
  link: string;
  description: string;
  established: string;
  type: string;
  status: string;
  visited: boolean;
}

// Define the context data and methods
interface HistoricalPlacesContextType {
  places: HistoricalPlace[];
  toggleVisited: (placeId: number) => void;
  setUnvisited: (placeId: number) => void;
}

// @ Create the Context
export const HistoricalPlacesContext = createContext<HistoricalPlacesContextType>({
    places: [],
    toggleVisited: () => {},
    setUnvisited: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [places, setPlaces] = useState<HistoricalPlace[]>(historicalPlaces);

  // Function to toggle the visited status
  const toggleVisited = (placeId: number) => {
    setPlaces((prevPlaces) => prevPlaces.map((place) => (place.id === placeId ? { ...place, visited: true } : place)));
  };

  const setUnvisited = (placeId: number) => {
    setPlaces((prevPlaces) => prevPlaces.map((place) => (place.id === placeId ? { ...place, visited: false } : place)));
  };

  return <HistoricalPlacesContext.Provider value={{ places, toggleVisited, setUnvisited }}>{children}</HistoricalPlacesContext.Provider>;
};
