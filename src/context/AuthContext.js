import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
      break;
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
      console.log(err.response.data);
      dispatch({
        type: 'add_error',
        payload: 'something went wrong with sign up'
      });
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
  authReducer, //reducer
  { signin, signout, signup }, //context methods
  { isSignedIn: false, errorMessage: '' } //initial state
);
