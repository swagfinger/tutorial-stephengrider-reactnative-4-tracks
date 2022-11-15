import axios from 'axios';

//use ngrok to get public url to get access to express api: 'ngrok http 3000'
export default axios.create({
  baseURL: 'https://574d-2001-b011-3-3a57-405a-5dc3-1f56-af0.jp.ngrok.io'
});
