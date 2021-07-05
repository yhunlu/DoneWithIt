import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";

import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

import colors from "./app/config/colors";
export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
