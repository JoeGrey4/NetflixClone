import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyBvgIjdHeczn6zYFdo4lRFVJY7iiA7KTDo",
    authDomain: "netflix-clone-62f3a.firebaseapp.com",
    projectId: "netflix-clone-62f3a",
    storageBucket: "netflix-clone-62f3a.appspot.com",
    messagingSenderId: "915560061484",
    appId: "1:915560061484:web:ce0a1fe75616a773580f89",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
