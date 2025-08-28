import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
  StatusBar,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const contacts = [
  { id: "1", type: "Email", value: "surajsaini1679@gmail.com", icon: "mail-outline" },
  { id: "2", type: "Phone", value: "+91 8865891779", icon: "call-outline" },
  { id: "3", type: "LinkedIn", value: "https://www.linkedin.com/in/suraj-saini-739b591ba/", icon: "logo-linkedin" },
  { id: "4", type: "GitHub", value: "https://github.com/Suraj88658917", icon: "logo-github" },
];

const ContactScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const openLink = (contact) => {
    switch (contact.type) {
      case "Email":
        Linking.openURL(`mailto:${contact.value}`);
        break;
      case "Phone":
        Linking.openURL(`tel:${contact.value}`);
        break;
      default:
        Linking.openURL(contact.value.startsWith("http") ? contact.value : `https://${contact.value}`);
        break;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "Email":
        return "#FFA500"; // Orange
      case "Phone":
        return "#32CD32"; // Green
      case "LinkedIn":
        return "#0A66C2"; // LinkedIn Blue
      case "GitHub":
        return "#000000"; // Black
      default:
        return "#fff";
    }
  };

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, 100 * index, 100 * (index + 2)];
    const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0.95], extrapolate: "clamp" });
    const opacity = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0.8], extrapolate: "clamp" });

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => openLink(item)}>
        <Animated.View style={[styles.card, { transform: [{ scale }], opacity }]}>
          <Icon name={item.icon} size={26} color={getIconColor(item.type)} style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
          <Icon name="arrow-forward-circle-outline" size={26} color="#fff" />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image source={require("../assets/image36.png")} style={styles.avatar} />
        <Text style={styles.headerText}>📞 Contact Me</Text>
        <Text style={styles.subHeader}>Let’s connect! Open to opportunities and collaboration anytime.</Text>
      </View>

      {/* Contact List */}
      <Animated.FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4eb2ecff", // single solid color
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  subHeader: {
    fontSize: 14,
    color: "#fffafaff",
    marginTop: 4,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  icon: { marginRight: 12 },
  type: { fontSize: 16, fontWeight: "600", color: "#fff" },
  value: { fontSize: 14, color: "#eee", marginTop: 2 },
});

export default ContactScreen;
