import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";

import colors from "./app/config/colors";
export default function App() {
  return <ListingDetailsScreen />;
}
