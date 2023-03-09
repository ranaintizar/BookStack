import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import GetStartedScreen from "./components/screens/GettingStartedScreen";
import SignUpFlowScreen from "./components/screens/SignUpFlowScreen";
import HomeScreen from "./components/screens/HomeScreen";
import LibraryScreen from "./components/screens/LibraryScreen";
import DiscoverScreen from "./components/screens/DiscoverScreen";
import ProfileScreen from "./components/screens/ProfileScreen";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [fontsLoaded] = useFonts({
    Sono: require("./assets/fonts/Sono-Regular.ttf"),
    SonoMedium: require("./assets/fonts/Sono-Medium.ttf"),
    SonoBold: require("./assets/fonts/Sono-SemiBold.ttf"),
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Tab.Navigator
        shifting={true}
        activeColor="#1e90ff"
        barStyle={{
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderColor: "#9994",
          height: 70,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconContainerStyle = [
                { backgroundColor: focused ? "#bbe5ed" : "transparent" },
                styles.container,
              ];
              return (
                <View style={iconContainerStyle}>
                  <Ionicons name="ios-home" color="#1e90ff" size={25} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconContainerStyle = [
                { backgroundColor: focused ? "#bbe5ed" : "transparent" },
                styles.container,
              ];
              return (
                <View style={iconContainerStyle}>
                  <Ionicons name="ios-library" color="#1e90ff" size={25} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconContainerStyle = [
                { backgroundColor: focused ? "#bbe5ed" : "transparent" },
                styles.container,
              ];
              return (
                <View style={iconContainerStyle}>
                  <AntDesign name="find" color="#1e90ff" size={25} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconContainerStyle = [
                { backgroundColor: focused ? "#bbe5ed" : "transparent" },
                styles.container,
              ];
              return (
                <View style={iconContainerStyle}>
                  <Ionicons name="person" color="#1e90ff" size={25} />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 32,
    marginTop: -4,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

// {isSignedIn ? (
//   <Tab.Navigator
//     shifting={true}
//     activeColor="#1e90ff"
//     barStyle={{ backgroundColor: "#fff" }}
//   >
//     <Tab.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         tabBarIcon: ({ focused }) => {
//           const iconContainerStyle = [
//             { backgroundColor: focused ? "#bbe5ed" : "transparent" },
//             styles.container,
//           ];
//           return (
//             <View style={iconContainerStyle}>
//               <Ionicons name="ios-home" color="#1e90ff" size={25} />
//             </View>
//           );
//         },
//       }}
//     />
//     <Tab.Screen
//       name="Library"
//       component={LibraryScreen}
//       options={{
//         tabBarIcon: ({ focused }) => {
//           const iconContainerStyle = [
//             { backgroundColor: focused ? "#bbe5ed" : "transparent" },
//             styles.container,
//           ];
//           return (
//             <View style={iconContainerStyle}>
//               <Ionicons name="ios-library" color="#1e90ff" size={25} />
//             </View>
//           );
//         },
//       }}
//     />
//     <Tab.Screen
//       name="Discover"
//       component={DiscoverScreen}
//       options={{
//         tabBarIcon: ({ focused }) => {
//           const iconContainerStyle = [
//             { backgroundColor: focused ? "#bbe5ed" : "transparent" },
//             styles.container,
//           ];
//           return (
//             <View style={iconContainerStyle}>
//               <AntDesign name="find" color="#1e90ff" size={25} />
//             </View>
//           );
//         },
//       }}
//     />
//     <Tab.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{
//         tabBarIcon: ({ focused }) => {
//           const iconContainerStyle = [
//             { backgroundColor: focused ? "#bbe5ed" : "transparent" },
//             styles.container,
//           ];
//           return (
//             <View style={iconContainerStyle}>
//               <Ionicons name="person" color="#1e90ff" size={25} />
//             </View>
//           );
//         },
//       }}
//     />
//   </Tab.Navigator>
// ) : (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="GetStarted" component={GetStartedScreen} />
//     <Stack.Screen name="SignUpFlow">
//       {({ navigation }) => (
//         <SignUpFlowScreen
//           setIsSignedIn={setIsSignedIn}
//           val={1}
//           navigation={navigation}
//         />
//       )}
//     </Stack.Screen>
//   </Stack.Navigator>
// )}
