import { Tabs } from 'expo-router';
import { Home, Search, Heart, MessageCircle, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF5A5F',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          borderTopColor: '#f0f0f0',
        },
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          headerShown: false, // Hide header for Explore screen
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          title: 'Wishlists',
          headerShown: false, // Hide header for Wishlists screen
          tabBarIcon: ({ color }) => <Heart size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          headerShown: false, // Hide header for Inbox screen
          tabBarIcon: ({ color }) => <MessageCircle size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false, // Hide header for Profile screen
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}