import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");


const certificatesData = [
  {
    id: "1",
    title: "React Native Certificate",
    image: require("../assets/React-native.jpg"),
  },
  {
    id: "2",
    title: " Big Data Computing Certificate",
    image: require("../assets/Big Data Computing.jpg"),
  },
  {
    id: "3",
    title: " JAVA Certificate",
    image: require("../assets/java.jpg"),
  },
];

const Certificates = () => {
  const flatListRef = useRef(null);
  const scrollIndex = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        scrollIndex.current = (scrollIndex.current + 1) % certificatesData.length;
        flatListRef.current.scrollToIndex({
          index: scrollIndex.current,
          animated: true,
        });
        setActiveIndex(scrollIndex.current);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <LinearGradient colors={["#6a11cb", "#2575fc"]} style={styles.gradient}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{item.title}</Text>
      </LinearGradient>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Certificates</Text>

      <FlatList
        ref={flatListRef}
        data={certificatesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          scrollIndex.current = index;
          setActiveIndex(index);
        }}
      />

      {/* Action Dots */}
      <View style={styles.indicatorContainer}>
        {certificatesData.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              activeIndex === i ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Certificates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    marginTop: 15,
    borderRadius: 20,
    paddingTop:10,
    
    
    
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  
  },
  card: {
    borderRadius: 12,
    marginBottom: 2,
    // overflow: "hidden",
    // elevation: 5,
    // shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
   padding:10,
    alignItems: "center",
  },
  gradient: {
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: width - 77,
    height: 200,
    borderRadius: 10,
    padding:20
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginTop: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#333",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});
