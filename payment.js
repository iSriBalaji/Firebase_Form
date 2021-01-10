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


// // Reference Message Collections
// var mesRef = firebase.database().ref('messages');
function savetoDB(response) {
    // console.log(response)
    var payRef = firebase.database().ref('payment');

    payRef.child('pay_id').set({
    payment_id : response.razorpay_payment_id
    })
}

window.paymentProcess = function(){



    var options = {
        "key": "rzp_live_3YCngmVXgGd2il", // Enter the Key ID generated from the Dashboard //rzp_test_O7cEKBAPw7RrRF (Test)
        "amount": 10*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "AlgoLegion",
        "description": "Python Workshop",
        "image": "https://i.imgur.com/vNYzK4J.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
            console.log(response);
            alert("Dear Student,\nYour booking has been confirmed. Check your email for detials.");
            // $('#myModal').modal();
        },
        "prefill": {
            "name": "",
            "email": "",
            "contact": ""
        },
        "notes": {
            "address": "Algolegion Inc"
        },
        "theme": {
            "color": "#eb5a46"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}
