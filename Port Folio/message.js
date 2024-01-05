// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoO8wra5KC2zY2fGNdyGQGHvtC39Kyd00",
    authDomain: "portfolio-message-31db6.firebaseapp.com",
    databaseURL: "https://portfolio-message-31db6-default-rtdb.firebaseio.com",
    projectId: "portfolio-message-31db6",
    storageBucket: "portfolio-message-31db6.appspot.com",
    messagingSenderId: "657436090527",
    appId: "1:657436090527:web:4cb4a091e74ab7e02a02aa",
    measurementId: "G-48SJWQV45D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var contactformDB = firebase.database().ref("portfolio-message");

document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('text');
    var emailid = getElementVal('emailid');
    var project = getElementVal('project');
    var message = getElementVal('msgcontent');

    // console.log(name, emailid, project, message);
    saveMessages(name, emailid, project, message);

    document.getElementById("contactform").reset();

}

const saveMessages = (name, emailid, project, message) => {
    var newContactForm = contactformDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        project: project,
        message: message,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}