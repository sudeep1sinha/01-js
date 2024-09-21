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
  
 
    // Use a plain object for category totals
    const categoryTotals = {};
  
    for (const transaction of transactions) {
      const category = transaction.category;
      const price = transaction.price;
  
      // Check if category exists
      if (!categoryTotals[category]) {
        categoryTotals[category] = 0; // Initialize total for new category
      }
  
      categoryTotals[category] += price; // Add price to category total
    }
  
    // Convert object to array of objects
    return Object.entries(categoryTotals).map(([category, totalSpent]) => ({
      category,
      totalSpent,
    }));
  }
  
 



module.exports = calculateTotalSpentByCategory;
