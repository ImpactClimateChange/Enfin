var util = require('util');

const CATEGORIES = {
   "airTravel": {
      "mult": (9),
      "includeTypes": ["Airlines and Aviation Services"],
      "excludeTypes": []
  },
   "carTravel": {
      "mult": (7),
      "includeTypes": ["Gas Stations","Car Service","Limos and Chauffeurs","Charter Buses"],
      "excludeTypes": []
  },
   "utility": {
      "mult": (7 / 3 / 15),
      "includeTypes": ["Utilities"],
      "excludeTypes": []
  },
   "grocery": {
      "mult": (7 / 3 / 15),
      "includeTypes": ["Supermarkets and Groceries"],
      "excludeTypes": []
  },
   "fastFood": {
      "mult": (7 / 3 / 15),
      "includeTypes": ["Fast Food"],
      "excludeTypes": []
  },
   "resturantOther": {
      "mult": (7 / 3 / 15),
      "includeTypes": ["Food and Drink"],
      "excludeTypes": ["Fast Food"]
  },
   "shoppingOther": {
      "mult": (7 / 3 / 15),
      "includeTypes": ["Shops"],
      "excludeTypes": ["Supermarkets and Groceries"]
  },
}


function categorizeTransactions(transactionsResponse) {
  var transactions    = transactionsResponse.transactions;
  var selectAndTally = (transactions, type, includeType, excludeType) => {
          return tallyCategory(selectTransactions(transactions, subtypes), type);
        }
  var result = {}
  CATEGORIES.forEach((category) => {
    result[category["type"]] = selectAndTally(transactions, category["type"], category["includeTypes"], category["excludeTypes"]);
  });
  return result;
}

// Returns all transactions that have at least one of the given includeTypes in their category list,
// but none of the excludeTypes.
function selectTransactions(transactionsResponse, includeTypes, excludeTypes) {
  return transactionsResponse.transactions.filter(
    (trans) => { 
      return (
        trans.category.some( 
          (cat) => { includeTypes.some( (includeType) => { return cat === includeType; }); 
        }) &&
        trans.category.every( 
          (cat) => { excludeTypes.some( (excludeType) => { return cat !== excludeType; }); 
        })
      ); 
    }
  );
}

//sums the total cost of a category and calculates:
//   total carbon cost
//   total dollar amt
//   + same list of transactions
function tallyCategory (transactions, category) {
    var totalCurrencyAmt = 0;
    transactions.forEach(
        (x) => {
            totalCurrencyAmt += x.amount;
        }
    )
    var totalCurrencyAmt = typeMultipliers["category"] * totalCurrencyAmt;
    return {
        "totalCurrency": totalCurrencyAmt,
        "totalCarbon": totalCarbonAmt,
        "transactions": transactions
    };
}


trans = [{
        "account_id": "837QRePe5qCeBQ1ZvjoEc18aNWGGMeTwBlkvv",
        "account_owner": null,
        "amount": 500,
        "category": [
          "Travel",
          "Airlines and Aviation Services"
        ],
        "category_id": "22001000",
        "date": "2019-01-06",
        "iso_currency_code": "USD",
        "location": {
          "address": null,
          "city": null,
          "lat": null,
          "lon": null,
          "state": null,
          "store_number": null,
          "zip": null
        },
        "name": "United Airlines",
        "payment_meta": {
          "by_order_of": null,
          "payee": null,
          "payer": null,
          "payment_method": null,
          "payment_processor": null,
          "ppd_id": null,
          "reason": null,
          "reference_number": null
        },
        "pending": false,
        "pending_transaction_id": null,
        "transaction_id": "837QRePe5qCeBQ1ZvjoEc18KnQW4yriwBlkxG",
        "transaction_type": "special",
        "unofficial_currency_code": null
      },
      {
        "account_id": "E1A6rGWGPvCnEZ1JbdQvfGlXQe99kwfXNKpZj",
        "account_owner": null,
        "amount": 6.33,
        "category": [
          "Travel",
          "Car Service",
          "Ride Share"
        ],
        "category_id": "22006001",
        "date": "2019-01-04",
        "iso_currency_code": "USD",
        "location": {
          "address": null,
          "city": null,
          "lat": null,
          "lon": null,
          "state": null,
          "store_number": null,
          "zip": null
        },
        "name": "Uber 072515 SF**POOL**",
        "payment_meta": {
          "by_order_of": null,
          "payee": null,
          "payer": null,
          "payment_method": null,
          "payment_processor": null,
          "ppd_id": null,
          "reason": null,
          "reference_number": null
        },
        "pending": false,
        "pending_transaction_id": null,
        "transaction_id": "b1lqjvov5gC39MNWlmjztjo95y8r4nFVe4MG6",
        "transaction_type": "special",
        "unofficial_currency_code": null
    }];
console.log(tallyCategory(trans, 'grocery'));
