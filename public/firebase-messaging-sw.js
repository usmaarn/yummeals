importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
let config = {
        apiKey: "AIzaSyB4l6kZi0f1HbyukkINaCuyw5kEzwbrbjg",
        authDomain: "yummealsapp.firebaseapp.com",
        projectId: "yummealsapp",
        storageBucket: "yummealsapp.appspot.com",
        messagingSenderId: "469970290584",
        appId: "1:469970290584:web:0c2f1a4e70264391d8cded",
        measurementId: "G-W0DTDCNXHC",
 };
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/images/default/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
