var firebaseConfig = {
    apiKey: "AIzaSyD_bZUejo7eNdPGe075ztsOqWvRaCzRyto",
    authDomain: "flag-quiz-4e2db.firebaseapp.com",
    projectId: "flag-quiz-4e2db",
    storageBucket: "flag-quiz-4e2db.appspot.com",
    messagingSenderId: "379360673646",
    appId: "1:379360673646:web:8e87129913e6cf52918b7f",
    measurementId: "G-FMB24KG2XS"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();