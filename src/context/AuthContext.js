import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };

    case 'signup':
      return { errorMessage: '', token: action.payload };

    default:
      return state;
  }
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
      dispatch({ type: 'signup', payload: response.data.token });

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

const signin = (dispatch) => {
  return ({ email, password }) => {
    //make api request to sign up with that email and password
    //if we sign up, modify our state, and say we are authenticated
    //if signing up fails, error handling
  };
};

const signout = (dispatch) => {
  return () => {
    //signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer, //reducer
  { signin, signout, signup }, //context methods
  { token: null, errorMessage: '' } //initial state
);
