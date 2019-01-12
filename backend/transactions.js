var util = require('util');

//sums the total cost of a category and calculates:
//   total carbon cost
//   total dollar amt
//   + same list of transactions
function tallyCategory (transactions, category) {
    totalCurrencyAmt = 0;
    totalCarbonAmt = 0;
    transactions.forEach(
        (x) => {
            totalCurrencyAmt += x.amount;
        }
    )
    if(category === 'airline') { // airline
        totalCarbonAmt = totalCurrencyAmt*9 //arbitrary value
    }
    if(category === 'car') { // car
        totalCarbonAmt = totalCurrencyAmt*7 //arbitrary value
    }
    if(category === 'grocery') { // grocery
        totalCarbonAmt = totalCurrencyAmt*7/3/15 //arbitrary value
    }
    if(category === 'restaurant') { //restaurant
        totalCarbonAmt = totalCurrencyAmt*7/3/15 //arbitrary value
    }
    if(category === 'other') { //shopping
        totalCarbonAmt = totalCurrencyAmt*7/3/15 //arbitrary value
    }
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
