/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = new Map();
  transactions.forEach((transaction) => {
    if (!categories.has(transaction.category)) {
      categories.set(transaction.category, transaction.price);
    } else {
      let updatedCategoryPrice =
        categories.get(transaction.category) + transaction.price;
      categories.set(transaction.category, updatedCategoryPrice);
    }
  });

  let totalSpentArr = [];
  categories.forEach(function (value, key) {
    totalSpentArr.push({ category: key, totalSpent: value });
  });

  return totalSpentArr;
}

module.exports = calculateTotalSpentByCategory;
