import { useState } from 'react'; // Import useState
import { View, Text, StyleSheet, ScrollView, Pressable, Switch, TextInput } from 'react-native'; // Import TextInput
import { Image } from 'expo-image';
import { Settings, LogOut, HelpCircle, Share2, Bell, Home, Star, Key, ChevronRight, Edit } from 'lucide-react-native'; // Import Edit icon
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker

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
  const [username, setUsername] = useState('John Doe'); // State for username
  const [profilePictureUri, setProfilePictureUri] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'); // State for profile picture URI
  const [isEditingUsername, setIsEditingUsername] = useState(false); // State to toggle username editing

  const handleChooseProfilePicture = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePictureUri(result.assets[0].uri); // Update state with new URI
    }
  };

  const handleSaveUsername = () => {
    // In a real app, you would save the username to a backend here
    setIsEditingUsername(false); // Exit editing mode
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Profile Picture - Make Pressable */}
        <Pressable onPress={handleChooseProfilePicture}>
          <Image
            source={profilePictureUri} // Use state variable
            style={styles.avatar}
          />
        </Pressable>

        {/* Username - Toggle between Text and TextInput */}
        <View style={styles.nameContainer}> {/* Container for name and edit icon */}
          {isEditingUsername ? (
            <TextInput
              style={styles.nameInput}
              value={username}
              onChangeText={setUsername}
              autoFocus // Focus input when editing starts
              onBlur={handleSaveUsername} // Save when input loses focus
              onSubmitEditing={handleSaveUsername} // Save when pressing enter
            />
          ) : (
            <Text style={styles.name}>{username}</Text> // Use state variable
          )}
          {/* Edit Username Icon */}
          {!isEditingUsername && (
            <Pressable onPress={() => setIsEditingUsername(true)} style={styles.editIcon}>
              <Edit size={20} color="#666" />
            </Pressable>
          )}
        </View>

        {/* Removed Email */}
        {/* <Text style={styles.email}>john.doe@example.com</Text> */}

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
  nameContainer: { // Style for the container holding name/input and edit icon
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  nameInput: { // Style for the username input field
    fontSize: 20,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Add a subtle underline
    paddingVertical: 2,
    minWidth: 150, // Ensure input has a minimum width
  },
  editIcon: { // Style for the edit icon
    marginLeft: 8,
    padding: 4, // Add padding for easier pressing
  },
  email: { // Keep email style in case it's used elsewhere, though the element is removed
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