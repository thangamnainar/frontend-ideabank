importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyAY7WcuhqLQofSGhIfy3Ozi8cQ1jTgqKQw",
    authDomain: "pushnotification-938dd.firebaseapp.com",
    projectId: "pushnotification-938dd",
    storageBucket: "pushnotification-938dd.appspot.com",
    messagingSenderId: "1019184155842",
    appId: "1:1019184155842:web:ecad92ecf7f87290a33f5b",
});

const messaging = firebase.messaging();