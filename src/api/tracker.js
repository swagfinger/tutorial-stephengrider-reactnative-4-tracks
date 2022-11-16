import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//use ngrok to get public url to get access to express api: 'ngrok http 3000'
const instance = axios.create({
  baseURL: 'https://91cb-2001-b011-3-3a57-5c9-28f3-233a-3459.jp.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  //called when about to make request
  (err) => {
    return Promise.reject(err);
  } //called for errors
);

export default instance;
