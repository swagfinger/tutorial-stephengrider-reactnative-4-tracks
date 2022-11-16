//import '../_mockLocation'; //testing //for realtime instead of fake data, comment out
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import Map from '../components/Map';
//safearea
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location'; //requestPermissions is deprecated

import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync(); //request in the startWatching method
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        (location) => {
          // console.log('location: ', location);
          addLocation(location);
        }
      );

      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
