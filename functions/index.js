const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HkDcBIRbyCvMF3pjDNVpPrT5U96nltqyRk2jsf4EMPJw58CG6qyIVG4Xdx9Cakk1PLb6EzcrvuZr4EAsPZMAtNP00rJCRqTlE');

// App Config
const app = express();

// Middlewares
app.use(cors({origin : true}));
app.use(express.json());
// API routes
app.get('/', (req, res)=>{
    return res.status(200).json({ message : 'hello world'});
})

app.post('/payment/create', (req, res)=>{
    const total = req.query.total;
    console.log('Payment request recieved ', total);
    stripe.paymentIntents.create({
        amount : total ,
        currency : 'INR'
    })
    .then((paymentIntent)=>{
        return res.status(201).json({
            clientSecret : paymentIntent.client_secret,
        })
    })
    .catch(err=>{
        console.log(err);
    })
})
exports.api = functions.https.onRequest(app);
// Listen Command