import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Plus, Heart } from 'lucide-react-native';
import { listings } from '@/mocks/listings';

export default function WishlistsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wishlists</Text>
        <Pressable style={styles.createButton}>
          <Plus size={20} color="#fff" />
          <Text style={styles.createButtonText}>Create new</Text>
        </Pressable>
      </View>

      {/* Default Wishlist */}
      <View style={styles.wishlist}>
        <View style={styles.wishlistHeader}>
          <View>
            <Text style={styles.wishlistName}>Favorites</Text>
            <Text style={styles.wishlistCount}>{listings.length} saves</Text>
          </View>
          <Heart size={24} fill="#FF5A5F" color="#FF5A5F" />
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.wishlistItems}
        >
          {listings.map((listing) => (
            <Pressable key={listing.id} style={styles.wishlistItem}>
              <Image
                source={listing.images[0]}
                style={styles.wishlistItemImage}
                contentFit="cover"
              />
              <View style={styles.wishlistItemOverlay}>
                <Text style={styles.wishlistItemPrice}>
                  ${listing.price}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Empty State */}
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateTitle}>Create your first wishlist</Text>
        <Text style={styles.emptyStateText}>
          As you search, tap the heart icon to save your favorite places and Experiences to a wishlist.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5A5F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 8,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  wishlist: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  wishlistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  wishlistName: {
    fontSize: 18,
    fontWeight: '600',
  },
  wishlistCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  wishlistItems: {
    gap: 12,
  },
  wishlistItem: {
    position: 'relative',
    width: 200,
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
  },
  wishlistItemImage: {
    width: '100%',
    height: '100%',
  },
  wishlistItemOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  wishlistItemPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyState: {
    padding: 24,
    alignItems: 'center',
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});