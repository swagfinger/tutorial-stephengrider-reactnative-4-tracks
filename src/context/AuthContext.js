import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };

    //using 'signin' for both 'signin' and 'signup'
    case 'signin':
      return { errorMessage: '', token: action.payload };
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
    navigate('TrackList');
  } else {
    navigate('Signup');
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

      navigate('TrackList');

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

      navigate('TrackList');
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

const signout = (dispatch) => {
  return () => {
    //signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer, //reducer
  { signin, signout, signup, clearErrorMessage, tryLocalSignin }, //context methods
  { token: null, errorMessage: '' } //initial state
);
