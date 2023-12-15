/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let obj = {};
  transactions.forEach((element) => {
    const property = element.category;
    const value = element.price;
    const hasProp = obj.hasOwnProperty(property);
    if (hasProp) {
      obj[property] += value;
    } else {
      obj = { ...obj, [property]: element.price };
    }
  });
  const itemArr = Object.entries(obj);
  let ans = [];
  itemArr.forEach((element) => {
    const temp = {
      category: element[0],
      totalSpent: element[1],
    };
    ans.push(temp);
  });
  return ans;
}

calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
]);

module.exports = calculateTotalSpentByCategory;
