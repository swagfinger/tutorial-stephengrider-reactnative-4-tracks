import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  //getting currentLocation, locations off state which comes from LocationContext
  const { state } = useContext(LocationContext);
  const { currentLocation, locations } = state;

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  console.log(state);

  // const initialLocation = {
  //   latitude: 24.9835233,
  //   longitude: 121.5676936
  // };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        //...initialLocation, //for realtime instead of fake data use: ...currentLocation.coords,
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
