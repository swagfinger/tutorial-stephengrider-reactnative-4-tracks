import axios from 'axios';

//use ngrok to get public url to get access to express api: 'ngrok http 3000'
export default axios.create({
  baseURL: 'https://0846-2001-b011-3-30c3-19a2-471e-f1b8-264c.jp.ngrok.io'
});
