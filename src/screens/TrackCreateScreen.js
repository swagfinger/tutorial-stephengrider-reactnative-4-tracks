import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import Map from '../components/Map';
//safearea
import { SafeAreaView } from 'react-native-safe-area-context';
const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
