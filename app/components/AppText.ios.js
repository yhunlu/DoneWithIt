import React from "react";
import { Text, StyleSheet } from "react-native";

// <Heading>My Heading</Heading>
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
