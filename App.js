import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { firebase } from "./firebase.config";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import GetStartedScreen from "./components/screens/GettingStartedScreen";
import SignUpFlowScreen from "./components/screens/SignUpFlowScreen";
import HomeScreen from "./components/screens/HomeScreen";
import LibraryScreen from "./components/screens/LibraryScreen";
import DiscoverScreen from "./components/screens/DiscoverScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import Header from "./components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [showStartup, setShowStartup] = useState(true);
  const [user, setUser] = useState();
  const [theme, setTheme] = useState("light");
  const [fontsLoaded] = useFonts({
    Sono: require("./assets/fonts/Sono-Regular.ttf"),
    SonoMedium: require("./assets/fonts/Sono-Medium.ttf"),
    SonoBold: require("./assets/fonts/Sono-SemiBold.ttf"),
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => setUser(user));
    AsyncStorage.getItem("userData").then((item) => {
      const user = JSON.parse(item);
      if (user) {
        firebase
          .auth()
          .signInWithCredential(
            firebase.auth.EmailAuthProvider.credential(
              user.email,
              user.password
            )
          )
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

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

  // const clearStorage = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     console.log("Storage successfully cleared!");
  //   } catch (error) {
  //     console.log("Error clearing storage:", error);
  //   }
  // };

  // clearStorage();

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      {(user === null && showStartup === true && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="SignUpFlow">
            {({ navigation }) => (
              <SignUpFlowScreen
                navigation={navigation}
                user={user}
                setShowStartup={setShowStartup}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )) || (
        <>
          <Header theme={theme} setTheme={setTheme} />
          <Tab.Navigator
            shifting={true}
            activeColor="#1e90ff"
            barStyle={
              theme === "light"
                ? {
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderColor: "#9994",
                    height: 70,
                  }
                : {
                    backgroundColor: "#16161a",
                    borderTopWidth: 1,
                    borderColor: "#72757e",
                    height: 70,
                  }
            }
            initialRouteName="Home"
          >
            <Tab.Screen
              name="Home"
              options={{
                tabBarIcon: ({ focused }) => {
                  const iconContainerStyle = [
                    { backgroundColor: focused ? "#bbe5ed" : "transparent" },
                    styles.container,
                  ];
                  return (
                    <View style={iconContainerStyle}>
                      <Ionicons
                        name="ios-home"
                        color={focused ? "#1e90ff" : "#72757e"}
                        size={25}
                      />
                    </View>
                  );
                },
              }}
            >
              {() => <HomeScreen theme={theme} />}
            </Tab.Screen>
            <Tab.Screen
              name="Library"
              options={{
                tabBarIcon: ({ focused }) => {
                  const iconContainerStyle = [
                    { backgroundColor: focused ? "#bbe5ed" : "transparent" },
                    styles.container,
                  ];
                  return (
                    <View style={iconContainerStyle}>
                      <Ionicons
                        name="ios-library"
                        color={focused ? "#1e90ff" : "#72757e"}
                        size={25}
                      />
                    </View>
                  );
                },
              }}
            >
              {() => <LibraryScreen theme={theme} />}
            </Tab.Screen>
            <Tab.Screen
              name="Discover"
              options={{
                tabBarIcon: ({ focused }) => {
                  const iconContainerStyle = [
                    { backgroundColor: focused ? "#bbe5ed" : "transparent" },
                    styles.container,
                  ];
                  return (
                    <View style={iconContainerStyle}>
                      <AntDesign
                        name="find"
                        color={focused ? "#1e90ff" : "#72757e"}
                        size={25}
                      />
                    </View>
                  );
                },
              }}
            >
              {() => <DiscoverScreen theme={theme} />}
            </Tab.Screen>
            <Tab.Screen
              name="Profile"
              options={{
                tabBarIcon: ({ focused }) => {
                  const iconContainerStyle = [
                    { backgroundColor: focused ? "#bbe5ed" : "transparent" },
                    styles.container,
                  ];
                  return (
                    <View style={iconContainerStyle}>
                      <Ionicons
                        name="person"
                        color={focused ? "#1e90ff" : "#72757e"}
                        size={25}
                      />
                    </View>
                  );
                },
              }}
            >
              {() => (
                <ProfileScreen theme={theme} handleLogout={setShowStartup} />
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </>
      )}
      <StatusBar style="auto" />
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
