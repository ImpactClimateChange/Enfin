const util = require("util");
const CHARITIES = require("./charities").CHARITIES;

const CATEGORIES = {
    airTravel: {
        displayName: "Air Travel",
        conversionFunction: dollars => dollars * 9,
        conversionRationale:
            "Every dollar spent has an associated carbon cost. Here is the explanation for how we found that conversion with regard to this specific category.",
        includeTypes: ["Airlines and Aviation Services"],
        excludeTypes: []
    },
    carTravel: {
        displayName: "Car Travel",
        conversionFunction: (dollars, date) => {
            const UPSTREAM_EMS_PER_GAL = 2.279;
            const DIRECT_EMS_PER_GAL = 8.887;
            const gallons = gallonsFromDollars(dollars, date);
            return (UPSTREAM_EMS_PER_GAL + DIRECT_EMS_PER_GAL) * gallons;
        },
        conversionRationale:
            "The amount of gallons of gasoline purchased can be estimated from the date and cost of that purchase using the AAA gas prices database. \n Every gallon of gasoline burned creates about 8,887 grams of CO2. \n In addition, the emissions generated during the production and shipping of the gasoline, from well to gas pump, average around 2279g/gal. \n Putting all of this together, the kg of CO2 emissions caused by a purchase will be equivalent to the approximate gallons of gasoline yeilded from the purchase, multiplied by the approximate total Carbon emissions per gallon from both the production and burning of that gasoline.",
        includeTypes: [
            "Gas Stations",
            "Car Service",
            "Limos and Chauffeurs",
            "Charter Buses"
        ],
        excludeTypes: ["Shops"]
    },
    utility: {
        displayName: "Utilities",
        conversionFunction: dollars => dollars * (7 / 3 / 15),
        conversionRationale:
            "Every dollar spent has an associated carbon cost. Here is the explanation for how we found that conversion with regard to this specific category.",
        includeTypes: ["Utilities"],
        excludeTypes: []
    },
    grocery: {
        displayName: "Groceries",
        conversionFunction: dollars => dollars * (7 / 3 / 15),
        conversionRationale:
            "Every dollar spent has an associated carbon cost. Here is the explanation for how we found that conversion with regard to this specific category.",
        includeTypes: ["Supermarkets and Groceries"],
        excludeTypes: []
    },
    fastFood: {
        displayName: "Fast Food",
        conversionFunction: dollars => dollars * (7 / 3 / 15),
        conversionRationale:
            "Every dollar spent has an associated carbon cost. Here is the explanation for how we found that conversion with regard to this specific category.",
        includeTypes: ["Fast Food"],
        excludeTypes: []
    },
    resturantOther: {
        displayName: "Resturants",
        conversionFunction: dollars => dollars * (7 / 3 / 15),
        conversionRationale:
            "Every dollar spent has an associated carbon cost. Here is the explanation for how we found that conversion with regard to this specific category.",
        includeTypes: ["Food and Drink"],
        excludeTypes: ["Fast Food"]
    },
    shopping: {
        displayName: "General Shopping",
        conversionFunction: dollars => dollars * (7 / 3 / 15),
        conversionRationale:
            "Every dollar spent has an associated carbon cost. Here is the explanation for how we found that conversion with regard to this specific category.",
        includeTypes: ["Shops"],
        excludeTypes: ["Supermarkets and Groceries"]
    },
    other: {
        displayName: "Other Spending",
        conversionFunction: dollars => dollars * (7 / 3 / 15),
        conversionRationale:
            "Every dollar spent has an associated carbon cost. Here is the explanation for how we found that conversion with regard to this specific category.",
        includeTypes: ["*"],
        excludeTypes: [
            "Environmental",
            "Airlines and Aviation Services",
            "Gas Stations",
            "Car Service",
            "Limos and Chauffeurs",
            "Charter Buses",
            "Utilities",
            "Supermarkets and Groceries",
            "Fast Food",
            "Food and Drink",
            "Shops",
            "Transfer",
            "Payment"
        ]
    }
};

function gallonsFromDollars(dollars, date) {
  return dollars / 2.395;
}

function categorizeTransactions(transactionsResponse) {
    const transactions = transactionsResponse.transactions;
    const selectAndTally = (transactions, type, includeType, excludeType) => {
        return tallyCategory(
            selectTransactions(transactions, includeType, excludeType),
            type
        );
    };
    let result = {};

    Object.keys(CATEGORIES).forEach(category => {
        result[category] = selectAndTally(
            transactions,
            category,
            CATEGORIES[category]["includeTypes"],
            CATEGORIES[category]["excludeTypes"]
        );
    });
    result["offsetDonation"] = selectAndTallyOffsets(transactions);
    return result;
}

// Returns all transactions that have at least one of the given includeTypes in their category list,
// but none of the excludeTypes.
function selectTransactions(transactions, includeTypes, excludeTypes) {
    excludeTypes = excludeTypes || [];
    return transactions.filter(trans => {
        return (
            trans.category.some(cat => {
                return (
                    includeTypes[0] === "*" ||
                    includeTypes.some(includeType => {
                        return cat === includeType;
                    })
                );
            }) &&
            trans.category.every(cat => {
                return excludeTypes.every(excludeType => {
                    return cat !== excludeType;
                });
            })
        );
    });
}

// Given the full list of transactions and the list of
// viable charities, classifies all the approved offset purchases, and
// returns an object which details the total expenditure on offset,
// the total negative emissions, and a list of the found offset transactions
function selectAndTallyOffsets(transactions) {
    selected = [];
    cost = 0;
    emissions = 0;
    transactions.forEach(transaction => {
        match = CHARITIES.find(charity =>
            transaction.name.includes(charity.name)
        );
        if (match) {
            selected.push(transaction);
            cost += transaction.amount;
            emissions -= transaction.amount / match.ratePerKg;
        }
    });
    return {
        cost: cost,
        emissions: emissions,
        transactions: selected
    };
}

//sums the total cost of a category and calculates:
//   total carbon cost
//   total dollar amt
//   + same list of transactions
// Assumes that transactions param already contains only and all
// transactions from the given category.
function tallyCategory(transactions, category) {
    var emissions = 0.0;
    var cost = 0.0;
    transactions.forEach(x => {
        if (x.amount > 0) {
            emissions += CATEGORIES[category].conversionFunction(
                x.amount,
                x.date
            );
            cost += x.amount;
        }
    });
    return {
        cost: cost,
        emissions: emissions,
        transactions: transactions
    };
}

module.exports = { categorizeTransactions, CATEGORIES };
