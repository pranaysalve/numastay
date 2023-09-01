import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../screen/account/account.screen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AccountNavigator;
