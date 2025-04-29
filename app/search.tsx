import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Search, MapPin, Clock, X } from 'lucide-react-native';

const RECENT_SEARCHES = [
  'New York, United States',
  'London, United Kingdom',
  'Paris, France',
];

const POPULAR_PLACES = [
  {
    city: 'Miami',
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f',
  },
  {
    city: 'Barcelona',
    country: 'Spain',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded',
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
  },
];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <X size={24} color="#000" />
            </Pressable>
          ),
        }} 
      />

      <View style={styles.searchContainer}>
        <Search size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search destinations"
          style={styles.searchInput}
          autoFocus
        />
      </View>

      <ScrollView style={styles.content}>
        {RECENT_SEARCHES.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent searches</Text>
            {RECENT_SEARCHES.map((search, index) => (
              <Pressable key={index} style={styles.recentItem}>
                <Clock size={20} color="#666" />
                <Text style={styles.recentText}>{search}</Text>
              </Pressable>
            ))}
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular destinations</Text>
          {POPULAR_PLACES.map((place, index) => (
            <Pressable key={index} style={styles.popularItem}>
              <MapPin size={20} color="#666" />
              <View>
                <Text style={styles.cityText}>{place.city}</Text>
                <Text style={styles.countryText}>{place.country}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  recentText: {
    fontSize: 16,
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  cityText: {
    fontSize: 16,
    fontWeight: '500',
  },
  countryText: {
    fontSize: 14,
    color: '#666',
  },
});