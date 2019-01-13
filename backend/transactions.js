var util = require('util');

// US dollars required to offset 1 kg^2 of CO2
const CARBON_COST = .0134;

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
      "excludeTypes": ["Airlines and Aviation Services", "Gas Stations","Car Service","Limos and Chauffeurs","Charter Buses","Utilities","Supermarkets and Groceries","Fast Food","Food and Drink","Shops","Transfer","Payment"]
  }
}

function categorizeTransactions(transactionsResponse) {
  var transactions  = transactionsResponse.transactions;
  var selectAndTally = (transactions, type, includeType, excludeType) => {
          return tallyCategory(selectTransactions(transactions, includeType, excludeType), type);
        }
  var result = {}

  Object.keys(CATEGORIES).forEach((category) => {
    result[category] = selectAndTally(transactions, category, CATEGORIES[category]["includeTypes"], CATEGORIES[category]["excludeTypes"]);
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

//sums the total cost of a category and calculates:
//   total carbon cost
//   total dollar amt
//   + same list of transactions
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

function offsetCost(emission) {
  return emission * CARBON_COST;
}

module.exports = {categorizeTransactions, offsetCost};
