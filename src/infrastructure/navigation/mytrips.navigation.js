import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyTripsScreen from "../../screen/mytrips/mytrips.screen";

const Stack = createStackNavigator();

const MyTripsNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="My Trips" component={MyTripsScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MyTripsNavigator;
