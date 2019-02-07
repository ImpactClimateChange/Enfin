const util = require('util');
const CHARITIES = require('./charities').charities;

// US dollars required to offset 1 kg^2 of CO2
const CARBON_COST = .00134;

const CATEGORIES = {
   "airTravel": {
      "mult": (9),
      "includeTypes": ["Airlines and Aviation Services"],
      "excludeTypes": []
  },
   "carTravel": {
      "mult": (7),
      "includeTypes": ["Gas Stations","Car Service","Limos and Chauffeurs","Charter Buses"],
      "excludeTypes": ["Shops"]
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
      "excludeTypes": ["Environmental","Airlines and Aviation Services", "Gas Stations","Car Service","Limos and Chauffeurs","Charter Buses","Utilities","Supermarkets and Groceries","Fast Food","Food and Drink","Shops","Transfer","Payment"]
  },
}

function categorizeTransactions(transactionsResponse) {
  const transactions  = transactionsResponse.transactions;
  const selectAndTally = (transactions, type, includeType, excludeType) => {
          return tallyCategory(selectTransactions(transactions, includeType, excludeType), type);
        }
  let result = {}

  Object.keys(CATEGORIES).forEach((category) => {
    result[category] = selectAndTally(transactions, category, CATEGORIES[category]["includeTypes"], CATEGORIES[category]["excludeTypes"]);
  });
  result["offsetDonation"] = selectAndTallyOffsets(transactions);
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
          (cat) => {
            return (includeTypes[0] === "*" ||
              includeTypes.some( (includeType) => {
              return cat === includeType;
          }));
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

// Given the full list of transactions and the list of
// viable charities, classifies all the approved offset purchases, and
// returns an object which details the total expenditure on offset, 
// the total negative emissions, and a list of the found offset transactions
function selectAndTallyOffsets(transactions) {
  selected = [];
  cost = 0;
  emissions = 0;
  transactions.forEach(
    (transaction) => {
      match = CHARITIES.find(charity => transaction.name.includes(charity.name)); 
      if (match){
          selected.push(transaction);
          cost += transaction.amount;
          emissions -= transaction.amount / match.ratePerKg;
      }
    });
  return ({
    "cost": cost,
    "emissions": emissions,
    "transactions": selected
  });
}

//sums the total cost of a category and calculates:
//   total carbon cost
//   total dollar amt
//   + same list of transactions
// Assumes that transactions param already contains only and all
// transactions from the given category.
function tallyCategory (transactions, category) {
    var cost = 0;
    transactions.forEach(
        (x) => {
          if (x.amount > 0) {
            cost += x.amount;
          }
        }
    )
    var emissions = CATEGORIES[category]['mult'] * cost;
    return {
        "cost": cost,
        "emissions": emissions,
        "transactions": transactions
    };
}

module.exports = {categorizeTransactions};
