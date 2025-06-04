# DoneWithIt

A sample React Native application built with Expo. This project uses Jest for unit testing.

## Installation

Install the dependencies using npm:

```bash
npm install
```

## Running the application

Start the Expo development server:

```bash
npm start
```

You can also target a specific platform:

```bash
npm run android
npm run ios
```

## Running tests

The project uses Jest. Execute all tests with:

```bash
npm test
```

The default test can be found in `__tests__/App.test.js`.

## API configuration

API endpoints are configured in `app/config/settings.js`. Update the `apiUrl` values for the desired environment:

```javascript
// app/config/settings.js
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
```

The correct configuration is chosen based on the Expo release channel.
