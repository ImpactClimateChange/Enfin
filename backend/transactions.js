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
   "shopping": {
      "mult": (7 / 3 / 15),
      "includeTypes": ["Shops"],
      "excludeTypes": ["Supermarkets and Groceries"]
  },
  "other": {
      "mult": (7 / 3 / 15),
      "includeTypes": ["*"],
      "excludeTypes": ["Gas Stations","Car Service","Limos and Chauffeurs","Charter Buses","Utilities","Supermarkets and Groceries","Fast Food","Food and Drink","Shops"]
  }
}

function categorizeTransactions(transactionsResponse) {
  var transactions  = transactionsResponse.transactions;
  var selectAndTally = (transactions, type, includeType, excludeType) => {
          return tallyCategory(selectTransactions(transactions, includeType, excludeType), type);
        }
  var result = {}

  Object.keys(CATEGORIES).forEach((category) => {
    result[category] = selectAndTally(transactions, category, CATEGORIES[category]["includeType"], CATEGORIES[category]["excludeType"]);
  });
  return result;
}

// Returns all transactions that have at least one of the given includeTypes in their category list,
// but none of the excludeTypes.
function selectTransactions(transactions, includeTypes, excludeTypes) {
  excludeTypes = excludeTypes || []
  return transactions.filter(
    (trans) => {
      return (
        trans.category.some(
          (cat) => { return includeTypes.some( (includeType) => {
              return cat === includeType;
          });
        }) &&
        trans.category.every(
          (cat) => { return excludeTypes.every( (excludeType) => {
              return cat !== excludeType;
          });
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
    var cost = 0;
    transactions.forEach(
        (x) => {
            cost += x.amount;
        }
    )
    var emissions = CATEGORIES[category]['mult'] * cost;
    return {
        "cost": cost,
        "emissions": emissions,
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
      },
      {
        "account_id": "837QRePe5qCeBQ1ZvjoEc18aNWGGMeTwBlkvv",
        "account_owner": null,
        "amount": 500,
        "category": [
          "Food and Drink",
          "Restaurants"
        ],
        "category_id": "13005000",
        "date": "2019-01-01",
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
        "name": "Tectra Inc",
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
        "transaction_id": "E1A6rGWGPvCnEZ1JbdQvfGlgW6e8PJSXNKpjP",
        "transaction_type": "place",
        "unofficial_currency_code": null
      },
      {
        "account_id": "837QRePe5qCeBQ1ZvjoEc18aNWGGMeTwBlkvv",
        "account_owner": null,
        "amount": 2078.5,
        "category": [
          "Payment"
        ],
        "category_id": "16000000",
        "date": "2018-12-31",
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
        "name": "AUTOMATIC PAYMENT - THANK",
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
        "transaction_id": "Gpqmkv6v7osxGk4aXybwFeGyAxmbwgS1dezW3",
        "transaction_type": "special",
        "unofficial_currency_code": null
      },
      {
        "account_id": "837QRePe5qCeBQ1ZvjoEc18aNWGGMeTwBlkvv",
        "account_owner": null,
        "amount": 500,
        "category": [
          "Food and Drink",
          "Restaurants"
        ],
        "category_id": "13005000",
        "date": "2018-12-31",
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
        "name": "KFC",
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
        "transaction_id": "Aegm98W8dpsnvgkEyLXbfjXaWq6vZBF1mXnWA",
        "transaction_type": "place",
        "unofficial_currency_code": null
      },
      {
        "account_id": "837QRePe5qCeBQ1ZvjoEc18aNWGGMeTwBlkvv",
        "account_owner": null,
        "amount": 500,
        "category": [
          "Shops",
          "Sporting Goods"
        ],
        "category_id": "19046000",
        "date": "2018-12-31",
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
        "name": "Madison Bicycle Shop",
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
        "transaction_id": "WdZ94vAvbzhEneVJBlq7coPwG65kbEIlVmJWK",
        "transaction_type": "place",
        "unofficial_currency_code": null
      },
      {
        "account_id": "Aegm98W8dpsnvgkEyLXbfjXMd655rEt1mXnR9",
        "account_owner": null,
        "amount": 25,
        "category": [
          "Payment",
          "Credit Card"
        ],
        "category_id": "16001000",
        "date": "2018-12-22",
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
        "name": "CREDIT CARD 3333 PAYMENT *//",
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
        "transaction_id": "XaM9wvRvmBud6KDVjeRwUG1AZ5mEXBSdaWw5W",
        "transaction_type": "special",
        "unofficial_currency_code": null
      },
      {
        "account_id": "E1A6rGWGPvCnEZ1JbdQvfGlXQe99kwfXNKpZj",
        "account_owner": null,
        "amount": 5.4,
        "category": [
          "Travel",
          "Car Service",
          "Ride Share"
        ],
        "category_id": "22006001",
        "date": "2018-12-22",
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
        "name": "Uber 063015 SF**POOL**",
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
        "transaction_id": "mqNP9dwd4btDn5JVNmA7fAlKo4bv19SLavV7e",
        "transaction_type": "special",
        "unofficial_currency_code": null
      },
      {
        "account_id": "WdZ94vAvbzhEneVJBlq7coPRe5ggndHlVmJol",
        "account_owner": null,
        "amount": 5850,
        "category": [
          "Payment"
        ],
        "category_id": "16000000",
        "date": "2018-12-21",
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
        "name": "ACH Electronic CreditGUSTO PAY 123456",
        "payment_meta": {
          "by_order_of": null,
          "payee": null,
          "payer": null,
          "payment_method": "ACH",
          "payment_processor": null,
          "ppd_id": null,
          "reason": null,
          "reference_number": null
        },
        "pending": false,
        "pending_transaction_id": null,
        "transaction_id": "6zP7Bj4jVdTPwyEXeVn4U9Kzg3adR8sg5oVrR",
        "transaction_type": "special",
        "unofficial_currency_code": null
      },
      {
        "account_id": "g8B3JK6Kzkskz17GBlrmfr3wQ6ddWbigJmvjZ",
        "account_owner": null,
        "amount": 1000,
        "category": [
          "Transfer",
          "Deposit"
        ],
        "category_id": "21007000",
        "date": "2018-12-21",
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
        "name": "CD DEPOSIT .INITIAL.",
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
        "transaction_id": "g8B3JK6Kzkskz17GBlrmfr3ZnD6gBAugJmvlW",
        "transaction_type": "special",
        "unofficial_currency_code": null
      },
      {
        "account_id": "837QRePe5qCeBQ1ZvjoEc18aNWGGMeTwBlkvv",
        "account_owner": null,
        "amount": 78.5,
        "category": [
          "Recreation",
          "Gyms and Fitness Centers"
        ],
        "category_id": "17018000",
        "date": "2018-12-20",
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
        "name": "Touchstone Climbing",
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
        "transaction_id": "nKPjJa9aNwu6jBaWPNREFRX764yxomF64yL8Q",
        "transaction_type": "place",
        "unofficial_currency_code": null
      },
      {
        "account_id": "E1A6rGWGPvCnEZ1JbdQvfGlXQe99kwfXNKpZj",
        "account_owner": null,
        "amount": -500,
        "category": [
          "Travel",
          "Airlines and Aviation Services"
        ],
        "category_id": "22001000",
        "date": "2018-12-20",
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
        "transaction_id": "yjgpbLRLo5HXLZeWGV15hgJp78EDxlFyBq7rn",
        "transaction_type": "special",
        "unofficial_currency_code": null
      },
      {
        "account_id": "E1A6rGWGPvCnEZ1JbdQvfGlXQe99kwfXNKpZj",
        "account_owner": null,
        "amount": 12,
        "category": [
          "Food and Drink",
          "Restaurants"
        ],
        "category_id": "13005000",
        "date": "2018-12-19",
        "iso_currency_code": "USD",
        "location": {
          "address": null,
          "city": null,
          "lat": null,
          "lon": null,
          "state": null,
          "store_number": "3322",
          "zip": null
        },
        "name": "McDonald's",
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
        "transaction_id": "9xeZwQjQlKIn3EbRk69DfGaPnQbEmlSR6WXlx",
        "transaction_type": "place",
        "unofficial_currency_code": null
      },
      {
        "account_id": "E1A6rGWGPvCnEZ1JbdQvfGlXQe99kwfXNKpZj",
        "account_owner": null,
        "amount": 4.33,
        "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
        ],
        "category_id": "13005043",
        "date": "2018-12-19",
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
        "name": "Starbucks",
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
        "transaction_id": "v4LkRZJZ1ASXoDMAmanqhVP47J1ZNaFWd39oQ",
        "transaction_type": "place",
        "unofficial_currency_code": null
      },
      {
        "account_id": "E1A6rGWGPvCnEZ1JbdQvfGlXQe99kwfXNKpZj",
        "account_owner": null,
        "amount": 89.4,
        "category": [
          "Food and Drink",
          "Restaurants"
        ],
        "category_id": "13005000",
        "date": "2018-12-18",
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
        "name": "SparkFun",
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
        "transaction_id": "RrP91vAvEoU6mGj8BWwDFePkRMyoqJSREvmzg",
        "transaction_type": "place",
        "unofficial_currency_code": null
      },
      {
        "account_id": "Aegm98W8dpsnvgkEyLXbfjXMd655rEt1mXnR9",
        "account_owner": null,
        "amount": -4.22,
        "category": [
          "Food and Drink",
          "Restaurants"
        ],
        "category_id": "13005000",
        "date": "2018-12-17",
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
        "name": "INTRST PYMNT",
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
        "transaction_id": "DMWvwAGANVCxpazXDk31F5o1G8mRPNHvMPKzg",
        "transaction_type": "place",
        "unofficial_currency_code": null
      }];
hash = {"transactions": trans};
console.log(categorizeTransactions(hash));
