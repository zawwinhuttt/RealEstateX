import { ScrollView, View, StyleSheet } from 'react-native';
import { listings } from '@/mocks/listings';
import SearchBar from '@/components/SearchBar';
import ListingCard from '@/components/ListingCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      
      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
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
  content: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});