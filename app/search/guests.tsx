import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { X, Minus, Plus } from 'lucide-react-native';

const GUEST_TYPES = [
  {
    type: 'Adults',
    description: 'Ages 13 or above',
  },
  {
    type: 'Children',
    description: 'Ages 2-12',
  },
  {
    type: 'Infants',
    description: 'Under 2',
  },
  {
    type: 'Pets',
    description: 'Service animals always allowed',
  },
];

export default function GuestsScreen() {
  const router = useRouter();
  const [guests, setGuests] = useState({
    Adults: 1,
    Children: 0,
    Infants: 0,
    Pets: 0,
  });

  const updateGuests = (type: string, increment: boolean) => {
    setGuests(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const totalGuests = guests.Adults + guests.Children;

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerTitle: "Who's coming?",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <X size={24} color="#000" />
            </Pressable>
          ),
        }} 
      />

      <View style={styles.content}>
        {GUEST_TYPES.map((guestType) => (
          <View key={guestType.type} style={styles.guestType}>
            <View>
              <Text style={styles.guestTypeTitle}>{guestType.type}</Text>
              <Text style={styles.guestTypeDescription}>{guestType.description}</Text>
            </View>

            <View style={styles.counter}>
              <Pressable
                style={[
                  styles.counterButton,
                  guests[guestType.type] === 0 && styles.counterButtonDisabled,
                ]}
                onPress={() => updateGuests(guestType.type, false)}
                disabled={guests[guestType.type] === 0}
              >
                <Minus size={20} color={guests[guestType.type] === 0 ? '#ccc' : '#000'} />
              </Pressable>

              <Text style={styles.count}>{guests[guestType.type]}</Text>

              <Pressable
                style={[
                  styles.counterButton,
                  totalGuests >= 16 && guestType.type !== 'Infants' && guestType.type !== 'Pets' && styles.counterButtonDisabled,
                ]}
                onPress={() => updateGuests(guestType.type, true)}
                disabled={totalGuests >= 16 && guestType.type !== 'Infants' && guestType.type !== 'Pets'}
              >
                <Plus size={20} color={totalGuests >= 16 && guestType.type !== 'Infants' && guestType.type !== 'Pets' ? '#ccc' : '#000'} />
              </Pressable>
            </View>
          </View>
        ))}

        <Text style={styles.info}>
          This place has a maximum of 16 guests, not including infants and pets
        </Text>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Apply</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  guestType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  guestTypeTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  guestTypeDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  counterButton: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButtonDisabled: {
    opacity: 0.5,
  },
  count: {
    fontSize: 16,
    minWidth: 24,
    textAlign: 'center',
  },
  info: {
    fontSize: 12,
    color: '#666',
    marginTop: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  button: {
    backgroundColor: '#FF5A5F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});