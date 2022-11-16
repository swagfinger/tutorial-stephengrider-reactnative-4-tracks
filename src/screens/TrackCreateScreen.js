//import '../_mockLocation'; //testing //for realtime instead of fake data, comment out
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import Map from '../components/Map';
//safearea
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import { useIsFocused } from '@react-navigation/native';

import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();

  console.log('isFocused:', isFocused);

  const { state, addLocation } = useContext(LocationContext);

  //takes isFocused, a callback
  //callback function is called on each location update.
  //callback receives an object of type LocationObject { coords, timestamp, mocked } as the first argument.
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });

  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
      <TrackForm />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
