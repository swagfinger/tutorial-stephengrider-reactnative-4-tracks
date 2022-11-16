import axios from 'axios';

//use ngrok to get public url to get access to express api: 'ngrok http 3000'
export default axios.create({
  baseURL: 'https://6c6d-2001-b011-3-3a57-5c9-28f3-233a-3459.jp.ngrok.io'
});
