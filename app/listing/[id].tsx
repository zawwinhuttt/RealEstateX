import { View, Text, StyleSheet, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Heart, Star, Share, MapPin, Users, Calendar, Wifi, Car, Tv, Pool } from 'lucide-react-native';
import { listings } from '@/mocks/listings';

const AMENITIES = [
  { icon: Wifi, label: 'Fast Wifi' },
  { icon: Car, label: 'Free parking' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Pool, label: 'Pool access' },
];

export default function ListingScreen() {
  const { id } = useLocalSearchParams();
  const { width } = useWindowDimensions();
  const listing = listings.find(l => l.id === id);

  if (!listing) return null;

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen 
        options={{
          headerTransparent: true,
          headerRight: () => (
            <View style={styles.headerButtons}>
              <Pressable style={styles.headerButton}>
                <Share size={24} color="#000" />
              </Pressable>
              <Pressable style={styles.headerButton}>
                <Heart size={24} color="#000" />
              </Pressable>
            </View>
          ),
        }} 
      />

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {listing.images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={[styles.image, { width }]}
            contentFit="cover"
          />
        ))}
      </ScrollView>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{listing.title}</Text>
          <View style={styles.rating}>
            <Star size={16} color="#000" fill="#000" />
            <Text style={styles.ratingText}>{listing.rating}</Text>
            <Text style={styles.reviewCount}>
              ({listing.reviewCount} reviews)
            </Text>
          </View>
        </View>

        <View style={styles.location}>
          <MapPin size={16} color="#666" />
          <Text style={styles.locationText}>{listing.location}</Text>
        </View>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Users size={20} color="#666" />
            <Text style={styles.detailText}>
              {listing.beds * 2} guests • {listing.beds} bedrooms • {listing.baths} baths
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Calendar size={20} color="#666" />
            <Text style={styles.detailText}>
              Available from tomorrow
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About this place</Text>
          <Text style={styles.description}>
            Experience luxury living in this stunning {listing.type.toLowerCase()} featuring breathtaking city views. 
            Perfect for both short and extended stays, this space offers modern amenities and stylish comfort.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What this place offers</Text>
          <View style={styles.amenities}>
            {AMENITIES.map((amenity, index) => (
              <View key={index} style={styles.amenity}>
                <amenity.icon size={24} color="#666" />
                <Text style={styles.amenityLabel}>{amenity.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.price}>
            ${listing.price} <Text style={styles.night}>night</Text>
          </Text>
          <Text style={styles.total}>
            ${listing.price * 5} total for 5 nights
          </Text>
        </View>
        <Pressable style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Check availability</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 16,
    marginRight: 16,
  },
  headerButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    height: 300,
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '500',
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'underline',
  },
  details: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    paddingVertical: 16,
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailText: {
    fontSize: 14,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  amenities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  amenity: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  amenityLabel: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
  night: {
    fontWeight: '400',
  },
  total: {
    fontSize: 12,
    color: '#666',
    textDecorationLine: 'underline',
  },
  bookButton: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});