import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.9:5000/api",
  },
  staging: {
    apiUrl: "http://staging.example.com/api",
  },
  prod: {
    apiUrl: "https://api.example.com/api",
  },
};

const getCurrentSettings = () => {
  const releaseChannel = Constants.manifest.releaseChannel;
  if (releaseChannel === "staging") return settings.staging;
  if (releaseChannel === "prod") return settings.prod;
  return settings.dev;
};

export default getCurrentSettings();
