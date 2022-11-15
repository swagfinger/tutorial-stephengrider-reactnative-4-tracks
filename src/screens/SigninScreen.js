import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
//safearea
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

//context
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <AuthForm
          headerText="Sign into your account"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign in"
        />
        <NavLink
          routeName="Signup"
          text="Dont have an account? Sign up instead"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
    justifyContent: 'center'
  }
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

export default SigninScreen;
