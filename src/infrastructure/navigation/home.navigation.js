import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screen/home/home.screen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeNavigator;
