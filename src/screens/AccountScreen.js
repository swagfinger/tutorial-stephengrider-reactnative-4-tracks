import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

//safearea
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

AccountScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

export default AccountScreen;
