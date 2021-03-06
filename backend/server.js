'use strict';

// External library imports
const util = require('util');
const envvar = require('envvar');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const plaid = require('plaid');
const path = require('path');

// Plaid sandbox environment setup
const APP_PORT = process.env.PORT || "8000";
const PLAID_CLIENT_ID = "5c37cedb48339d0011601acf";
const PLAID_SECRET = "a1f4cf566ee8f90a1baedca2157532";
const PLAID_PUBLIC_KEY = "dc14e823249a9b78995fc65b53f0c6";
const PLAID_PRODUCTS = "transactions";
const PLAID_ENV = "development";

// Helper functions and constants
const FRONTEND_DIR = "../frontend/build/";
const CHARITIES = require("./charities").CHARITIES;
const transactions = require("./transactions");

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, FRONTEND_DIR)));

app.get('/', function (request, response, next) {
  const options = {
    PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
    PLAID_ENV: PLAID_ENV,
    PLAID_PRODUCTS: PLAID_PRODUCTS,
  };
  response.sendFile(path.join(__dirname, FRONTEND_DIR + 'index.html'), options);
});


// Exchange token flow - exchange a Link public_token for
// an API access_token
// https://plaid.com/docs/#exchange-token-flow
app.post('/get_access_token', function(request, response, next) {
  PUBLIC_TOKEN = request.body.public_token;
  console.log(PUBLIC_TOKEN);
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

app.post('/set_access_token', function (request, response, next) {
  ACCESS_TOKEN = request.body.access_token;
  client.getItem(ACCESS_TOKEN, function (error, itemResponse) {
    response.json({
      item_id: itemResponse.item.item_id,
      error: false,
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
      response.json({error: null, cost: cost, emission: emission, breakdown: categorizedTransactions});
    }
  });
});

app.get('/charities', function(request, response, next) {
  response.json({error: null, charities: CHARITIES});
});

app.get('/categories', function (request, response, next) {
  let result = Object.keys(transactions.CATEGORIES).map(catName => {
    return { 
      name: catName, 
      displayName: transactions.CATEGORIES[catName].displayName,
      conversionFunction: transactions.CATEGORIES[catName].conversionFunction.toString(),
      conversionRationale: transactions.CATEGORIES[catName].conversionRationale,
      includeTypes: transactions.CATEGORIES[catName].includeTypes,
      excludeTypes: transactions.CATEGORIES[catName].excludeTypes,
    }
  })
  response.json({ error: null, categories: result });
});

const server = app.listen(APP_PORT, function() {
  console.log('enfin backend server listening on port ' + APP_PORT);
});

const prettyPrintResponse = response => {
  console.log(util.inspect(response, {colors: true, depth: 4}));
};
