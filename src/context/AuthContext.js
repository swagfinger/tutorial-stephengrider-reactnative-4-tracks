import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };

    //using 'signin' for both 'signin' and 'signup'
    case 'signin':
      return { token: action.payload, errorMessage: '' };

    case 'signout':
      return { token: null, errorMessage: '' };

    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    RootNavigation.navigate('TrackListFlow', { screen: 'TrackList' });
  } else {
    RootNavigation.navigate('Signin');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    //make api request to sign up with that email and password
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
      //store token
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      RootNavigation.navigate('TrackListFlow', { screen: 'TrackList' });

      //to get token at later stage...
      //await AsyncStorage.getItem('token');
    } catch (err) {
      console.log(err.message);
      console.log(err.response.data);
      dispatch({
        type: 'add_error',
        payload: 'something went wrong with sign up'
      });
    }
    //if we sign up, modify our state, and say we are authenticated
    //if signing up fails, error handling
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    //make api request to sign up with that email and password
    try {
      const response = await trackerApi.post('/signin', {
        email,
        password
      });

      //store token
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin',
        payload: response.data.token
      });

      RootNavigation.navigate('MainFlow', { screen: 'TrackList' });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in'
      });
    }
    //if we sign up, modify our state, and say we are authenticated
    //if signing up fails, error handling
  };

const signout = (dispatch) => async () => {
  //signout
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    console.log('dispatch signout...');
    RootNavigation.navigate('LoginFlow', { screen: 'Signin' });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signout'
    });
  }
};

export const { Context, Provider } = createDataContext(
  authReducer, //reducer

  { signin, signout, signup, clearErrorMessage, tryLocalSignin }, //context methods

  { token: null, errorMessage: '' } //initial state
);
