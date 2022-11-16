import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from '@rneui/themed';

import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } =
    useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  //pulling off 'name', 'recording', 'locations' from 'state'
  const { name, recording, locations } = state;

  return (
    <View>
      <Spacer>
        <Input
          value={name}
          placeholder="enter name"
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button onPress={stopRecording} title="stop" />
        ) : (
          <Button onPress={startRecording} title="start recording" />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </View>
  );
};

export default TrackForm;
