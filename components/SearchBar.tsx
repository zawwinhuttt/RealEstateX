import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Search, MapPin, Users, Calendar } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';

export default function SearchBar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable style={styles.searchBar} onPress={() => router.push('/search')}>
        <View style={styles.searchContent}>
          <Search size={20} color="#666" style={styles.icon} />
          <View>
            <TextInput 
              placeholder="Where to?"
              placeholderTextColor="#666"
              style={styles.input}
              editable={false}
            />
          </View>
        </View>
      </Pressable>
      
      <View style={styles.filters}>
        <Pressable style={styles.filterButton}>
          <Calendar size={18} color="#666" />
          <TextInput 
            placeholder="When"
            style={styles.filterText}
            editable={false}
          />
        </Pressable>
        
        <Pressable style={styles.filterButton}>
          <Users size={18} color="#666" />
          <TextInput 
            placeholder="Who"
            style={styles.filterText}
            editable={false}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchBar: {
    backgroundColor: '#f7f7f7',
    borderRadius: 32,
    padding: 12,
    marginBottom: 12,
  },
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  filters: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    gap: 4,
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
});