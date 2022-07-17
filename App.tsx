import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/Navigation";
import ChatDetail from "./screens/ChatDetail";
import Home from "./screens/Home";
import Notification from "./screens/Notification";
import Search from "./screens/Search";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    PoppinSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinLight: require("./assets/fonts/Poppins-Light.ttf"),
  });
  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <Navigation />
    </NavigationContainer>
  );
}
