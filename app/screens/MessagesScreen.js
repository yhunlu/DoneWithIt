import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Constants from "expo-constants";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Yahya Unlu",
    description:
      "Merhabalar, Ürününüz ile ilgili ebat detaylarını paylaşırmısınız?",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "Yahya Unlu",
    description:
      "Selamlar, Ürün hala elime ulaşmadı! kargoda problem mi var acaba?",
    image: require("../assets/me.jpg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Yahya Unlu",
              description:
                "Merhabalar, Ürününüz ile ilgili ebat detaylarını paylaşırmısınız?",
              image: require("../assets/me.jpg"),
            },
            {
              id: 2,
              title: "Yahya Unlu",
              description:
                "Selamlar, Ürün hala elime ulaşmadı! kargoda problem mi var acaba?",
              image: require("../assets/me.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
