import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthContext } from './auth/Auth';

const firebaseConfig = {
  apiKey: "AIzaSyCBBzR29M0PB2JgHOHPurLDoYEmapMHUxU",
  authDomain: "packmeapp-77c66.firebaseapp.com",
  databaseURL: "https://packmeapp-77c66.firebaseio.com",
  projectId: "packmeapp-77c66",
  storageBucket: "packmeapp-77c66.appspot.com",
  messagingSenderId: "1034465593756",
  appId: "1:1034465593756:web:70ee52d8d9012002fbe059"
};
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
<AuthContext>
<App />
</AuthContext>, document.getElementById('root'));

serviceWorker.unregister();
