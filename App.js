import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "./Navigation/BottomTabs";
import SplashScreen from "./Screen/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* First show Splash */}
          <Stack.Screen name="Splash" component={SplashScreen} />
          {/* Then BottomTab navigator as Main */}
          <Stack.Screen name="Profile" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
