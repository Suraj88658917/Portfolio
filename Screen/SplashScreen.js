// SplashScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("ProfileStack"); // Navigate after 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4eb2ec" />

      {/* Top-left corner circle */}
      <View style={[styles.cornerCircle, styles.topLeft]} />

      {/* Top-right corner circle */}
      <View style={[styles.cornerCircle, styles.topRight]} />

      {/* Bottom-left corner circle */}
      <View style={[styles.cornerCircle, styles.bottomLeft]} />

      {/* Bottom-right corner circle */}
      <View style={[styles.cornerCircle, styles.bottomRight]} />

      {/* Center gradient circle with name */}
      <LinearGradient
        colors={["#42e7fdff", "#45a9f1ff", "#16c9fbff"]}
        style={styles.centerCircle}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.centerText}>Suraj Saini</Text>
      </LinearGradient>

      <Text style={styles.subtitle}>Welcome to My Portfolio</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4eb2ec",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cornerCircle: {
    position: "absolute",
    backgroundColor: "#fff",
    opacity: 0.2,
    borderRadius: 300, // Large radius for full screen arcs
    width: 300,
    height: 300,
  },
  topLeft: {
    top: -150,
    left: -150,
  },
  topRight: {
    top: -150,
    right: -150,
  },
  bottomLeft: {
    bottom: -150,
    left: -150,
  },
  bottomRight: {
    bottom: -150,
    right: -150,
  },
  centerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  centerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
  },
});
