import { View, Text, StyleSheet, ScrollView, Pressable, Switch } from 'react-native';
import { Image } from 'expo-image';
import { Settings, LogOut, HelpCircle, Share2, Bell, Home, Star, Key, ChevronRight } from 'lucide-react-native';

const SECTIONS = [
  {
    title: 'Hosting',
    items: [
      { icon: Home, label: 'Switch to hosting', type: 'switch' },
      { icon: Key, label: 'Create a new listing', type: 'link' },
    ]
  },
  {
    title: 'Account Settings',
    items: [
      { icon: Settings, label: 'Personal information', type: 'link' },
      { icon: Bell, label: 'Notifications', type: 'link' },
      { icon: Share2, label: 'Refer a host', type: 'link' },
    ]
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Get help', type: 'link' },
      { icon: Star, label: 'Give us feedback', type: 'link' },
      { icon: LogOut, label: 'Log out', type: 'button' },
    ]
  },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <Pressable style={styles.viewProfile}>
          <Text style={styles.viewProfileText}>View Profile</Text>
        </Pressable>
      </View>

      {SECTIONS.map((section, i) => (
        <View key={i} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          
          {section.items.map((item, j) => (
            <Pressable key={j} style={styles.item}>
              <View style={styles.itemLeft}>
                <item.icon size={20} color="#666" />
                <Text style={styles.itemLabel}>{item.label}</Text>
              </View>
              
              {item.type === 'switch' ? (
                <Switch />
              ) : item.type === 'link' ? (
                <ChevronRight size={20} color="#666" />
              ) : null}
            </Pressable>
          ))}
        </View>
      ))}
      
      <Text style={styles.version}>Version 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  viewProfile: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  viewProfileText: {
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemLabel: {
    fontSize: 16,
  },
  version: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 24,
  },
});