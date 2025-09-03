import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Asset } from "expo-asset";

const CVComponent = () => {
  const handleViewCV = async () => {
    try {
      const asset = Asset.fromModule(require("../assets/SurajSaini_resume.pdf.pdf"));
      await asset.downloadAsync();

      const fileUri = FileSystem.documentDirectory + "SurajSaini_resume.pdf.pdf";

      await FileSystem.copyAsync({
        from: asset.localUri,
        to: fileUri,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("Error", "Sharing is not available on this device.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Unable to open CV.");
    }
  };

  const handleDownloadCV = async () => {
    try {
      const asset = Asset.fromModule(require("../assets/SurajSaini_resume.pdf.pdf"));
      await asset.downloadAsync();

      const fileUri = FileSystem.documentDirectory + "SurajSaini_resume.pdf.pdf";

      await FileSystem.copyAsync({
        from: asset.localUri,
        to: fileUri,
      });

      if (Platform.OS === "ios" || Platform.OS === "android") {
        await Sharing.shareAsync(fileUri);
      }

      Alert.alert("Success", "CV saved and ready to view!");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Unable to download CV.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My CV</Text>

      {/* Buttons in one row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.viewButton]} onPress={handleViewCV}>
          <FontAwesome name="eye" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>View CV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.downloadButton]} onPress={handleDownloadCV}>
          <FontAwesome name="download" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Download CV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CVComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 11,
    padding: 10,
    alignItems: "center",
    elevation: 3,
    marginTop:16,
    },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  viewButton: {
    backgroundColor: "#007AFF",
  },
  downloadButton: {
    backgroundColor: "#34A853",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    marginRight: 8,
  },
});
