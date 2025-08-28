import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Modal,
  TextInput,
  ImageBackground,
} from 'react-native';
import { Alert, Platform } from 'react-native';
import CVComponent from './CVComponent';
import Certificates from './Certificates';
import ProjectORContact from './ProjectORContact';





const { width } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 260;
const HEADER_MIN_HEIGHT = 90;
const AVATAR_MAX_SIZE = 110;
const AVATAR_MIN_SIZE = 56;

export default function ProfileScreen({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [editVisible, setEditVisible] = useState(false);
  const [name, setName] = useState('SURAJ SAINI');
  const [bio, setBio] = useState('Mobile Development Enthusiast • React Native • Exploring new ideas');

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const avatarSize = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [AVATAR_MAX_SIZE, AVATAR_MIN_SIZE],
    extrapolate: 'clamp',
  });

  const avatarTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT - AVATAR_MAX_SIZE / 2, HEADER_MIN_HEIGHT - AVATAR_MIN_SIZE / 2],
    extrapolate: 'clamp',
  });

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT - 20],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const editButtonTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT - 32, HEADER_MIN_HEIGHT - 28],
    extrapolate: 'clamp',
  });

  const editButtonScale = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [1, 0.85],
    extrapolate: 'clamp',
  });

  const pulseAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.06, duration: 900, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 900, useNativeDriver: true }),
      ])
    ).start();
  }, [pulseAnim]);
  

  

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Header with background image */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <ImageBackground
          source={require('../assets/image002.jpeg')} // <-- your blue image here
          style={styles.headerBackground}
          resizeMode="cover"
        />
        <Animated.View style={[styles.headerTitleWrap, { opacity: titleOpacity }]}>
          <Text style={styles.headerSmallTitle}></Text>
        </Animated.View>
      </Animated.View>

      {/* Avatar */}
      <Animated.View style={[styles.avatarWrap, { top: avatarTop }]}>
        <Animated.Image
          source={require("../assets/image004.jpg")}
          style={[
            styles.avatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarSize.interpolate
                ? avatarSize.interpolate({
                    inputRange: [AVATAR_MIN_SIZE, AVATAR_MAX_SIZE],
                    outputRange: [AVATAR_MIN_SIZE / 2, AVATAR_MAX_SIZE / 2],
                  })
                : AVATAR_MAX_SIZE / 2,
            },
          ]}
        />
      </Animated.View>

      

      {/* Scroll content */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + 20, paddingBottom: 0.89 }}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
      >
        <View style={styles.content}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.bioText}>{bio}</Text>
          
<AnimatedCard 
  title="About" 
  bodyText={
    <Text style={styles.bodyText}>
  I am an aspiring <Text style={styles.highlight}>Software Developer</Text> with strong expertise in <Text style={styles.highlight}>React Native</Text> and <Text style={styles.highlight}>Android Studio</Text>, supported by a solid foundation in <Text style={styles.highlight}>Java</Text>, <Text style={styles.highlight}>JavaScript</Text>, and <Text style={styles.highlight}>Python</Text>. I have a strong grasp of <Text style={styles.highlight}>Data Structures and Algorithms (DSA)</Text>, and I enjoy building efficient, scalable, and high-performing applications that solve real-world problems.{"\n\n"}

  My journey in technology is driven by curiosity and a passion for learning. I specialize in transforming ideas into fully functional mobile applications, focusing on <Text style={styles.highlight}>clean code</Text>, <Text style={styles.highlight}>intuitive design</Text>, and a <Text style={styles.highlight}>seamless user experience</Text>.{"\n\n"}
</Text>

     }
/>


  {/* <AnimatedCard
  title="Interests"
  bodyText={
    <Text style={styles.bodyText}>
      I am particularly drawn to <Text style={styles.highlight}>full-stack development</Text>, where I can integrate frontend creativity with backend logic to deliver complete solutions. Beyond coding, I am a <Text style={styles.highlight}>quick learner</Text> and <Text style={styles.highlight}>problem solver</Text>, constantly exploring new technologies that enhance my development skills.{"\n\n"}
    </Text>
  }
/> */}

<AnimatedCard
  title="Impactful Work"
  bodyText={
    <Text style={styles.bodyText}>
 Currently, I am working on multiple projects, including:{"\n\n"}
      • <Text style={styles.highlight}>RoomieFind App</Text> – A student-focused app for finding roommates, mess, single rooms, and rental flats (1BHK, 2BHK, 3BHK).{"\n"}
      • <Text style={styles.highlight}>Employee Management App</Text> – A simple yet efficient system for managing employees.{"\n"}
      • <Text style={styles.highlight}>Legal Consultancy App</Text> – A digital platform to connect users with legal experts.{"\n"}
      • <Text style={styles.highlight}>AI-Chat App</Text> – An AI-powered chat application.{"\n"}
      • <Text style={styles.highlight}>Amore-Dating App</Text> – A modern solution for meaningful social connections.{"\n\n"}

      What excites me the most is the ability to bring ideas to life through apps—whether it’s improving productivity, connecting people, or delivering unique solutions. My goal is to grow as a versatile developer while contributing to <Text style={styles.highlight}>impactful projects</Text> that make a difference.
  </Text>
  }/>
 

         <AnimatedCard
  title="Interests"
  bodyText={
    <Text style={styles.bodyText}>
      <Text style={styles.highlight}>Traveling & Exploration</Text>: Passionate about discovering new places and cultures.{"\n\n"}
      <Text style={styles.highlight}>Technology Enthusiast</Text>: Always eager to work with the latest tech and innovative tools.{"\n\n"}
      <Text style={styles.highlight}>Boxing</Text>: Avid boxer who enjoys the discipline and challenge of the sport.{"\n\n"}
      <Text style={styles.highlight}>Music Lover</Text>: Enjoys unwinding with a good playlist.{"\n\n"}
      <Text style={styles.highlight}>Imagination to Reality</Text>: Love converting imaginative ideas into real-world solutions.
    </Text>
  }
/>

<View style={{ marginBottom:5, marginTop:15 }} >
  <ProjectORContact />
</View>



<View style={{ marginBottom:5 }}>
  <Certificates />
</View>

<View style={{ marginTop:0 }}>
  <CVComponent />
</View>



          <View style={{ height: 120 }} />
        </View>
      </Animated.ScrollView>

      {/* Edit modal */}
      <Modal visible={editVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <Animated.View style={styles.modalCard}>
            <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Full name" />
            <TextInput
              value={bio}
              onChangeText={setBio}
              style={[styles.input, { height: 80 }]}
              placeholder="Short bio"
              multiline
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => setEditVisible(false)} style={styles.modalCancel}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setEditVisible(false)} style={styles.modalSave}>
                <Text style={styles.modalSaveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

function AnimatedCard({ title, bodyText }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, { toValue: 1, duration: 600, delay: 120, useNativeDriver: true }).start();
  }, [anim]);

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: anim }], opacity: anim }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{bodyText}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#7cd1f6ff' },
  header: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, overflow: 'hidden' },
  headerBackground: { ...StyleSheet.absoluteFillObject },
  headerTitleWrap: { position: 'absolute', bottom: 12, left: 16 },
  headerSmallTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  avatarWrap: {
    position: 'absolute',
    left: 20,
    zIndex: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  avatar: { borderWidth: 4, borderColor: 'white' },
  editButtonWrap: { position: 'absolute', right: 18, zIndex: 5 },
  editButton: {
    backgroundColor: '#ebe4e4ff',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
  },
  editButtonText: { fontWeight: '700', color: '#4b7bec' },
  content: { paddingHorizontal: 20, marginTop: 40 },
  nameText: { fontSize: 22, fontWeight: '800', marginTop: 8 },
  bioText: { fontSize: 14, color: '#4b4b4b', marginTop: 6 },
  card: { backgroundColor: 'white', borderRadius: 14, padding: 16, marginTop: 16, elevation: 2 },
  cardTitle: { fontWeight: '800', fontSize: 16 },
  cardBody: { marginTop: 8, color: '#4b4b4b' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: 'white', padding: 20, borderTopLeftRadius: 14, borderTopRightRadius: 14 },
  input: { borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 10, marginTop: 12, padding: 12 },
  modalCancel: { padding: 10, marginRight: 10 },
  modalCancelText: { color: '#666' },
  modalSave: { backgroundColor: '#4b7bec', padding: 10, borderRadius: 8 },
  modalSaveText: { color: 'white', fontWeight: '700' },
highlight: {
  color: '#000000ff',
  fontWeight: '600',
  
},


});