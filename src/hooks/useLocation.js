//reusable hook for user location
//expects 2 props (shouldTrack, callback);
//shouldtrack - whether page is focused and needs to track
//callback - a function to call when tracking...

import React, { useState, useEffect } from 'react';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync(); //request in the startWatching method

        //watchPositionAsync() via 'expo-location' gives access to (location), on TrackCreateScreen() we are saying we
        //pass in a function (that will receive 'location')
        //see lesson 241 - 2min27 https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15708882#notes
        // const [err] = useLocation(isFocused, (location) => {
        //   addLocation(location, state.recording);
        // });
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },

          callback //This function is called on each location update. It receives an object of type LocationObject {coords, timestamp, mocked} as the first argument.
        );

        if (!granted) {
          throw new Error('Location permission not granted');
        }
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
        subscriber = null;
      }
    }

    //cleanup useeffect
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
