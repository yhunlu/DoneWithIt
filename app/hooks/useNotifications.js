import { useEffect } from "react";
import * as Notifications from "expo-notifications";

export default function useNotifications(listener) {
  useEffect(() => {
    register();
    if (listener) {
      const subscription = Notifications.addNotificationReceivedListener(
        listener
      );
      return () => subscription.remove();
    }
  }, []);
}

const register = async () => {
  try {
    const settings = await Notifications.getPermissionsAsync();
    if (!settings.granted) {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") return;
    }
    const token = await Notifications.getExpoPushTokenAsync();
    console.log("Push token", token);
  } catch (error) {
    console.log("Error getting a push token", error);
  }
};
