import React, { useContext } from 'react';

//screens
import AccountScreen from './screens/AccountScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import TrackCreateScreen from './screens/TrackCreateScreen';
import TrackDetailScreen from './screens/TrackDetailScreen';
import TrackListScreen from './screens/TrackListScreen';

//createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//need access to state to see if there is token
import { Context } from './context/AuthContext';

import { FontAwesome } from '@expo/vector-icons';

const LoginFlow = createNativeStackNavigator();
function LoginFlowScreen() {
  return (
    <LoginFlow.Navigator screenOptions={{ headerShown: false }}>
      <LoginFlow.Screen name="Signup" component={SignupScreen} />
      <LoginFlow.Screen name="Signin" component={SigninScreen} />
    </LoginFlow.Navigator>
  );
}

const TrackListFlow = createNativeStackNavigator();
function TrackListFlowScreen() {
  return (
    <TrackListFlow.Navigator>
      <TrackListFlow.Screen name="TrackList" component={TrackListScreen} />
      <TrackListFlow.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListFlow.Navigator>
  );
}

const MainFlow = createBottomTabNavigator();
function MainFlowScreen() {
  return (
    <MainFlow.Navigator screenOptions={{ headerShown: false }}>
      <MainFlow.Screen
        name="TrackListFlow"
        component={TrackListFlowScreen}
        options={{
          tabBarLabel: 'Tracks',
          tabBarIcon: () => <FontAwesome name="th-list" size={20} />
        }}
      />
      <MainFlow.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          tabBarLabel: 'Add Track',
          tabBarIcon: () => <FontAwesome name="plus" size={20} />
        }}
      />
      <MainFlow.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <FontAwesome name="gear" size={20} />
        }}
      />
    </MainFlow.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const { state } = useContext(Context);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {state.token == null ? (
        <Stack.Screen name="LoginFlow" component={LoginFlowScreen} />
      ) : (
        <Stack.Screen name="MainFlow" component={MainFlowScreen} />
      )}
    </Stack.Navigator>
  );
};
