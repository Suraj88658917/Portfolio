import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { projectsData } from "../assets/projectdata";

const ProjectCard = ({ item }) => {
  return (
    <View style={styles.card}>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.projectImage} />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.techList}>
        {item.techStack.map((tech, idx) => (
          <View key={idx} style={styles.techBadge}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL(item.github)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(item.live)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Live</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProjectScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Projects</Text>
      <FlatList
        data={projectsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProjectCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6dd8f5ff",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0066ffff",
    marginTop: 30,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
  },
  projectImage: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: "#333",
    lineHeight: 20,
    marginBottom: 12,
  },
  techList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  techBadge: {
    backgroundColor: "#E0E7FF",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 6,
  },
  techText: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "600",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});
