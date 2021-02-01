const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { default: Stripe } = require('stripe');
const stirpe = require("stripe")('sk_test_51HgP5BFnxuBtdAsJl8sgdB7oSagyFeaJPNjpODJ2avVvhEjfHm9ArkAI8h3v886zICYTqCuJ3FpTs41kePUWemKC00paH7tS2d')

//API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response ) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ' , total)

    const paymentIntent = await Stripe.PaymentIntentsResource.create({
        amount: total,  // subunits of the currency
        currency: "usd" ,
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// listen command
exports.api = functions.https.onRequest(app)

