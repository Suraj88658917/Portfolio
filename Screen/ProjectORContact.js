import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProjectORContact = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Your Options</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.leftButton]}
          onPress={() => navigation.navigate("ProjectScreen")}
        >
          <FontAwesome name="folder" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>MyProject</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.rightButton]}
          onPress={() => navigation.navigate("ContactScreen")}
        >
          <FontAwesome name="envelope" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProjectORContact;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff", borderRadius: 11 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  button: { flexDirection: "row", alignItems: "center", padding: 10, borderRadius: 10 },
  leftButton: { backgroundColor: "#ed0407ff", flex: 0.45, justifyContent: "center" },
  rightButton: { backgroundColor: "#2447f8ff", flex: 0.45, justifyContent: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  icon: { marginRight: 8 },
});
