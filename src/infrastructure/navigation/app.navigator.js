import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ACCOUNT, LOCATION, MYTRIPS, SEARCH } from "../assets/svg";
import HomeNavigator from "./home.navigation";
import LocationNavigator from "./location.navigation";
import MyTripsNavigator from "./mytrips.navigation";
import AccountNavigator from "./account.navigation";
const Tab = createBottomTabNavigator();

// const createScreenOption = ({ route }) => {
//   const iconName = TAB_ICON[route.name];
//   return {
//     tabBarIcon: ({ size, color }) => (
//       <Ionicons name={iconName} size={size} color={color} />
//     ),
//   };
// };

const Navigator = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="LocationScreen"
          component={LocationNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="MyTripsScreen"
          component={MyTripsNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountNavigator}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navigator;
