import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
//safearea
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

//context
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

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
          headerText="Sign up for tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign up"
          onSubmit={signup}
        />
        <NavLink
          routeName="Signin"
          text="Already have an account? sign in instead!"
        />
      </SafeAreaView>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
    justifyContent: 'center'
  }
});

export default SignupScreen;
