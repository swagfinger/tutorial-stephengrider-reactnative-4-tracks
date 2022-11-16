import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem } from '@rneui/themed';

//detect when navigating to screen
import { useIsFocused } from '@react-navigation/native';

const TrackListScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  const { state, fetchTracks } = useContext(TrackContext);
  if (isFocused) {
    fetchTracks();
  }

  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
