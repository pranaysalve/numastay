import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LocationScreen from "../../screen/locations/locations.screen";

const Stack = createStackNavigator();

const LocationsNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Locations" component={LocationScreen} />
      </Stack.Navigator>
    </>
  );
};

export default LocationsNavigator;
