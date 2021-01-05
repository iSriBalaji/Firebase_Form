// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD_l5HRRC_3LiFHiSt_nw3u6ioEHJwCOvI",
    authDomain: "registrationform-58ca0.firebaseapp.com",
    projectId: "registrationform-58ca0",
    storageBucket: "registrationform-58ca0.appspot.com",
    messagingSenderId: "259624835494",
    appId: "1:259624835494:web:7b565afd8f5859b0ded767",
    measurementId: "G-R5BCK8HNQ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// Reference Message Collections
var mesRef = firebase.database().ref('messages');

document.getElementById('regForm').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
  //get values
  var name = getInp('name');
  var com = getInp('company');
  var email = getInp('email');
  var phno = getInp('phone');
  var mes = getInp('message');
  saveMes(name,com,email,phno,mes);

  document.querySelector('.alert').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('regForm').reset();

  console.log(name,com,email,phno,mes);
} 

function getInp(n){
  return document.getElementById(n).value;
}


// Save messages to Firebase
function saveMes(n,c,e,p,m){
  var setMes = mesRef.push();
  setMes.set({
    Name:n,
    Department:c,
    Email:e,
    Phone:p,
    KnownLanguages:m
  });
}