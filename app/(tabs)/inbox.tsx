import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { MessageCircle, Star } from 'lucide-react-native';

const MESSAGES = [
  {
    id: '1',
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    preview: 'Hi! Is this property still available for the dates I requested?',
    time: '2h ago',
    unread: true,
  },
  {
    id: '2',
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    preview: 'Thank you for accepting my booking request!',
    time: '1d ago',
    unread: false,
  },
  {
    id: '3',
    user: {
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    preview: 'Great experience! Thanks for being such a wonderful host.',
    time: '3d ago',
    unread: false,
  },
];

const REQUESTS = [
  {
    id: '1',
    listing: {
      title: 'Modern Loft with City Views',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    },
    dates: 'Aug 15-20',
    status: 'pending',
  },
];

export default function InboxScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Messages</Text>
        
        {MESSAGES.map((message) => (
          <Pressable key={message.id} style={styles.messageItem}>
            <Image
              source={message.user.avatar}
              style={styles.avatar}
            />
            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.userName}>{message.user.name}</Text>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
              <Text 
                style={[
                  styles.messagePreview,
                  message.unread && styles.unreadMessage
                ]}
                numberOfLines={1}
              >
                {message.preview}
              </Text>
            </View>
            {message.unread && <View style={styles.unreadDot} />}
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Booking Requests</Text>
        
        {REQUESTS.map((request) => (
          <Pressable key={request.id} style={styles.requestItem}>
            <Image
              source={request.listing.image}
              style={styles.listingImage}
            />
            <View style={styles.requestContent}>
              <Text style={styles.listingTitle}>{request.listing.title}</Text>
              <Text style={styles.dates}>{request.dates}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Pending Approval</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      {MESSAGES.length === 0 && REQUESTS.length === 0 && (
        <View style={styles.emptyState}>
          <MessageCircle size={48} color="#666" />
          <Text style={styles.emptyStateTitle}>No messages yet</Text>
          <Text style={styles.emptyStateText}>
            When you book a stay or experience, messages from your host will show up here.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
  },
  messagePreview: {
    fontSize: 14,
    color: '#666',
  },
  unreadMessage: {
    color: '#000',
    fontWeight: '500',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF5A5F',
  },
  requestItem: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
  },
  listingImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  requestContent: {
    flex: 1,
  },
  listingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  dates: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFE8E8',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  statusText: {
    color: '#FF5A5F',
    fontSize: 12,
    fontWeight: '500',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 48,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});