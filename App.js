import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RoomScreen from "./src/screen/room/room.screen";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Greed-Bold": require("./assets/fonts/greedfamily/Greed-Bold.otf"),
    "Greed-Heavy": require("./assets/fonts/greedfamily/Greed-Heavy.otf"),
    "Greed-Medium": require("./assets/fonts/greedfamily/Greed-Medium.otf"),
    "Greed-Regular": require("./assets/fonts/greedfamily/Greed-Regular.otf"),
    "FoundersGrotesk-Bold": require("./assets/fonts/foundersgroteskfamily/FoundersGrotesk-Bold.otf"),
    "FoundersGrotesk-Medium": require("./assets/fonts/foundersgroteskfamily/FoundersGrotesk-Medium.otf"),
    "FoundersGrotesk-Regular": require("./assets/fonts/foundersgroteskfamily/FoundersGrotesk-Regular.otf"),
    "FoundersGrotesk-Semibold": require("./assets/fonts/foundersgroteskfamily/FoundersGrotesk-Semibold.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
