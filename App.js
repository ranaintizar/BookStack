import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStartedScreen from "./components/screens/GettingStartedScreen";
import SignUpFlowScreen from "./components/screens/SignUpFlowScreen";

export default function App() {
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

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="SignUpFlow" component={SignUpFlowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
