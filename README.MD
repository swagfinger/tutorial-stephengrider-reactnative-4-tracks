## REACT NATIVE - Tracks

### navigation types (reactnavigation.org/docs/en/api-reference.html)

- Stack navigator - back and forward between screens
- Bottom tab navigator - tab bar at bottom with buttons to navigate
- Switch navigator - cuts between diff screens
- Drawer navigator - fly-out menu from one side

## dependencies

- react-native-elements has been changed to @rneui/themed

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

-<App> creates a ref to 'navigator' which it receives from react native, and sets it on 'setNavigator' (the imported navigator function)

- using NavigationEvents <NavigationEvents onWillBlur={clearErrorMessage} /> to clear messages before switching screens

- is there a token in AsyncStorage?
  if yes - navigate to TrackList
  if no - navigate to Signup
