## REACT NATIVE - Tracks

- NOTE: the udemy project is using expo@40 / react-navigation@4 -> this repository updates the dependencies to latest expo@47 / react-navigatio@6

- install server for this project, https://github.com/swagfinger/stephengrider-reactnative-4-express-mongodb.git
- make sure there is a mongodb database
- use tunnelling to listen to localhost url: 'ngrok http 3000'
- take forwarding url after running ngrok command and paste in src/api/tracker.js baseURL (this step needs to be done everytime you re-run ngrok)

## upgrading to expo 47 / react-navigation@6

### dependencies

- "react-native-tab-view"

## Running NGROK

```cmd
"ngrok http 3000"

note: when the ngrok url changes after running the above command, you need to update the url:
src/api/tracker.js
NB:
- ngrok given url eg. https://xxxxxxxxxxxxxxxxxxxxxx.jp.ngrok.io
- ngrok give you a url which is the tunneling url, you should open this link...
- there is a safety screen that asks you if you want to proceed, you need to accept this prompt


```

### navigation types (reactnavigation.org/docs/en/api-reference.html)

- Stack navigator - back and forward between screens
- Bottom tab navigator - tab bar at bottom with buttons to navigate
- Switch navigator - cuts between diff screens
- Drawer navigator - fly-out menu from one side

## dependencies

- react-native-elements has been changed to @rneui/themed

```js
import { Input, Button } from '@rneui/themed';
```

```
npm install @rneui/themed @rneui/base --legacy-peer-deps
```

## JWT

- json web token - returned token from api when successfully authenticated - is stored on the device (State)
- token is appended to requests to prove we are authenticated

## AsyncStorage (store on device - persistence)

- setItem(key, value)
- getItem(key)
- removeItem(key)

- AsyncStorage was part of reactnative - now.. its deprecated from reactnative to own package: "react-native-async-storage"
- "react-native-async-storage"

```cmd
npm install @react-native-async-storage/async-storage
```

```js imports
import AsyncStorage from '@react-native-async-storage/async-storage';
```

## navigation

- react navigation is now version @6 https://reactnavigation.org/

- Pass params to a route by putting them in an object as a second parameter to the navigation.navigate function: navigation.navigate('RouteName', { /_ params go here _/ })
- Read the params in your screen component: route.params.

-<App> creates a ref to 'navigator' which it receives from react native, and sets it on 'setNavigator' (the imported navigator function)

- using NavigationEvents <NavigationEvents onWillBlur={clearErrorMessage} /> to clear messages before switching screens

- is there a token in AsyncStorage?
  if yes - navigate to TrackList
  if no - navigate to Signup

- signout by clearing the jwt

### react-native-maps

- you should install react-native-maps

```
npx expo install react-native-maps
```

- and expo-location

```
npx expo-cli install expo-location
```

- to reset permissions for testing...google it

### Location Request

- deprecated: awaitRequestPermissionsAsync()
- updated: requestForegroundPermissionsAsync()

```js
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location';

const startWatching = async () => {
  try {
    const { granted } = await requestForegroundPermissionsAsync();
    if (!granted) {
      throw new Error('Location permission not granted');
    }
  } catch (e) {
    setErr(e);
  }
};
```

### check if page is focused

- https://reactnavigation.org/docs/use-is-focused/

```js
import { useIsFocused } from '@react-navigation/native';

const isFocused = useIsFocused();
```

### authentication

https://reactnavigation.org/docs/auth-flow

### ListItem

- https://reactnativeelements.com/docs/listitem/

### todo:

- when sign-in/signout looses focus, the clear content script was removed and still needs to be readded.
