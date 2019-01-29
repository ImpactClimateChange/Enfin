'use strict';

const util = require('util');
const transactions = require('./transactions');
const envvar = require('envvar');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const plaid = require('plaid');

// Plaid sandbox environment setup
const APP_PORT = "8000";
const PLAID_CLIENT_ID = "5c37cedb48339d0011601acf";
const PLAID_SECRET = "ba3a91b90aba2368be1422d4a89128";
const PLAID_PUBLIC_KEY = "dc14e823249a9b78995fc65b53f0c6";
const PLAID_PRODUCTS = "transactions";
const PLAID_ENV = "sandbox";

// We store the access_token in memory - in production, store it in a secure
// persistent data store
let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

// Initialize the Plaid client
// Find your API keys in the Dashboard (https://dashboard.plaid.com/account/keys)
const client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV],
  {version: '2018-05-22'}
);

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.get('/', function(request, response, next) {
  response.render('index.ejs', {
    PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
    PLAID_ENV: PLAID_ENV,
    PLAID_PRODUCTS: PLAID_PRODUCTS,
  });
});

// Exchange token flow - exchange a Link public_token for
// an API access_token
// https://plaid.com/docs/#exchange-token-flow
app.post('/get_access_token', function(request, response, next) {
  PUBLIC_TOKEN = request.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error,
      });
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    prettyPrintResponse(tokenResponse);
    response.json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID,
      error: null,
    });
  });
});

// Retrieve Transactions for an Item
// https://plaid.com/docs/#transactions
app.get('/transactions', function(request, response, next) {
  // Pull transactions for the Item for the last 30 days
  const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');
  client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
    count: 250,
    offset: 0,
  }, function(error, transactionsResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error
      });
    } else {
      prettyPrintResponse(transactionsResponse);
      response.json({error: null, transactions: transactionsResponse});
    }
  });
});

app.get('/transactions/:days', function(request, response, next) {
  // Pull transactions for the Item for the last X days
  const startDate = moment().subtract(request.params.days, 'days').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');
  client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
    count: 250,
    offset: 0,
  }, function(error, transactionsResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error
      });
    } else {
      prettyPrintResponse(transactionsResponse);
      response.json({error: null, transactions: transactionsResponse});
    }
  });
});

app.get('/breakdown/:days', function(request, response, next) {
  // Pull transactions for the Item for the last 30 days
  const startDate = moment().subtract(request.params.days, 'days').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');
  client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
    count: 250,
    offset: 0,
  }, function(error, transactionsResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error
      });
    } else {
      const categorizedTransactions = transactions.categorizeTransactions(transactionsResponse);
      const cost = Object.keys(categorizedTransactions).reduce(
          (acc, key) => {return acc + categorizedTransactions[key]['cost']}, 0);
      const emission = Object.keys(categorizedTransactions).reduce(
          (acc, key) => {return acc + categorizedTransactions[key]['emissions']}, 0);
      const offset = transactions.offsetCost(emission);
      response.json({error: null, cost: cost, emission: emission, offsetNeeded: offset, breakdown: categorizedTransactions});
    }
  });
});

const server = app.listen(APP_PORT, function() {
  console.log('plaid-quickstart server listening on port ' + APP_PORT);
});

const prettyPrintResponse = response => {
  console.log(util.inspect(response, {colors: true, depth: 4}));
};

app.post('/set_access_token', function(request, response, next) {
  ACCESS_TOKEN = request.body.access_token;
  client.getItem(ACCESS_TOKEN, function(error, itemResponse) {
    response.json({
      item_id: itemResponse.item.item_id,
      error: false,
    });
  });
});
