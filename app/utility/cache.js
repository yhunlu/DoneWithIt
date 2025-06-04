import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache";
const expiryInMinutes = 60;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log("Error storing data", error);
  }
};

const isExpired = (item) => {
  const now = Date.now();
  const diff = now - item.timestamp;
  return diff > expiryInMinutes * 60 * 1000;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (!value) return null;
    const item = JSON.parse(value);
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    console.log("Error getting data", error);
  }
};

export default { store, get };
