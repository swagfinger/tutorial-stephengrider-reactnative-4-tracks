// FOR TESTING PURPOSES ONLY
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 121.5676936 + increment * tenMetersWithDegrees,
      latitude: 24.9835233 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
//tells expo that our location has changed...
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
