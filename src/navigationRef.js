//create navigator which is reference to nav (passed in)
import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

// this function triggers react-native navigation through navigator by using NavigatorActions
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
