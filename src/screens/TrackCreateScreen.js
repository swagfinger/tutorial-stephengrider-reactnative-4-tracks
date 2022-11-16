//import '../_mockLocation'; //testing //for realtime instead of fake data, comment out
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import Map from '../components/Map';
//safearea
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation); //same as: useLLocation((location)=> addLocation(location));
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
