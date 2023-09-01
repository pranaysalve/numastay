import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";

const Mapview = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",

    width: "10%",
    height: "10%",  
  },
  map: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
});

export default Mapview;
