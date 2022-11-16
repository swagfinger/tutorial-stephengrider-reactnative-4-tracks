import { useContext } from 'react';

import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

import * as RootNavigation from '../navigationRef';

export default () => {
  //pull action function TrackContext
  const { createTrack } = useContext(TrackContext);

  //pull locations and name from LocationContext
  const {
    state: { name, locations },
    reset
  } = useContext(LocationContext);

  //expose reusable functionality
  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    RootNavigation.navigate('TrackList');
  };

  return [saveTrack];
};
