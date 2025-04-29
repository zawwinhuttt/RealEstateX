import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FavoritesContextType {
  favoriteListingIds: string[];
  addFavorite: (listingId: string) => void;
  removeFavorite: (listingId: string) => void;
  isFavorite: (listingId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteListingIds, setFavoriteListingIds] = useState<string[]>([]);

  const addFavorite = (listingId: string) => {
    setFavoriteListingIds((prevIds) => [...prevIds, listingId]);
  };

  const removeFavorite = (listingId: string) => {
    setFavoriteListingIds((prevIds) => prevIds.filter((id) => id !== listingId));
  };

  const isFavorite = (listingId: string) => {
    return favoriteListingIds.includes(listingId);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteListingIds, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};