import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from '@rneui/themed';

import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } =
    useContext(LocationContext);

  //pulling off 'name', 'recording', 'locations' from 'state'
  const { name, recording, locations } = state;

  console.log('locations.length: ', locations.length);

  return (
    <View>
      <Spacer>
        <Input
          value={name}
          placeholder="enter name"
          onChangeText={changeName}
        />
      </Spacer>
      {recording ? (
        <Button onPress={stopRecording} title="stop" />
      ) : (
        <Button onPress={startRecording} title="start recording" />
      )}
    </View>
  );
};

export default TrackForm;
