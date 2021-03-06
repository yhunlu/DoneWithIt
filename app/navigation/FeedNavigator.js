import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "../navigation/routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
