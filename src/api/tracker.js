import axios from 'axios';

//use ngrok to get public url to get access to express api: 'ngrok http 3000'
export default axios.create({
  baseURL: 'https://fc21-2001-b011-3-3a57-cc7-7474-2526-2002.jp.ngrok.io'
});
