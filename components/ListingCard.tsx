import { useState, useEffect } from 'react'; // Import useEffect
import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { Star, Heart } from 'lucide-react-native'; // Import Heart
import { useRouter } from 'expo-router';
import type { Listing } from '@/types/listing';
import { useFavorites } from '@/context/FavoritesContext'; // Import the hook

interface Props {
  listing: Listing;
}

export default function ListingCard({ listing }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  // Remove local favorite state, use context instead
  // const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites(); // Get state and functions from context
  const cardWidth = (width - 48) / 2;

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  // Remove local toggleFavorite function
  // const toggleFavorite = () => {
  //   // In a real app, you'd update backend/global state here
  //   // setIsFavorite((prev) => !prev);
  // };

  // New toggle function using context
  const handleToggleFavorite = () => {
    if (isFavorite(listing.id)) {
      removeFavorite(listing.id);
    } else {
      addFavorite(listing.id);
    }
  };

  return (
    <Pressable
      style={[styles.container, { width: cardWidth }]}
      onPress={() => router.push(`/listing/${listing.id}`)}
    >
      <Pressable onPress={nextImage}>
        <Image
          source={listing.images[imageIndex]}
          style={[styles.image, { width: cardWidth }]}
          contentFit="cover"
        />
        {listing.superhost && (
          <View style={styles.superhostBadge}>
            <Text style={styles.superhostText}>SUPERHOST</Text>
          </View>
        )}
        {/* Favorite Button */}
        {/* Use handleToggleFavorite and check favorite status from context */}
        <Pressable onPress={handleToggleFavorite} style={styles.favoriteButton}>
          <Heart
            size={24}
            color="#fff"
            fill={isFavorite(listing.id) ? '#FF385C' : 'rgba(0,0,0,0.5)'} // Red when favorite, semi-transparent black otherwise
          />
        </Pressable>
      </Pressable>

      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.location} numberOfLines={1}>
            {listing.location}
          </Text>
          <View style={styles.rating}>
            <Star size={12} color="#000" fill="#000" />
            <Text style={styles.ratingText}>{listing.rating}</Text>
          </View>
        </View>

        <Text style={styles.title} numberOfLines={1}>
          {listing.title}
        </Text>

        <Text style={styles.info}>
          {listing.type} • {listing.beds} bed{listing.beds > 1 ? 's' : ''}
        </Text>

        <Text style={styles.price}>
          <Text style={styles.amount}>${listing.price}</Text> night
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    height: 200,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  superhostBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  superhostText: {
    fontSize: 10,
    fontWeight: '600',
  },
  favoriteButton: { // Style for the heart button container
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4, // Add some padding for easier pressing
    backgroundColor: 'rgba(0,0,0,0.1)', // Slight background for visibility
    borderRadius: 16, // Make it round
  },
  details: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    flex: 1,
    marginRight: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    marginTop: 4,
    color: '#666',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  price: {
    marginTop: 4,
    fontSize: 14,
  },
  amount: {
    fontWeight: '600',
  },
});