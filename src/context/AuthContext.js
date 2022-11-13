import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    //make api request to sign up with that email and password
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
    //if we sign up, modify our state, and say we are authenticated
    //if signing up fails, error handling
  };
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
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
