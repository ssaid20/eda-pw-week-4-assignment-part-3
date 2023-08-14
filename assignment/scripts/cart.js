console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// Create a global variable named 'basket' and set it to an empty array
let basket = [];
// Created a function called 'addItem'
function addItem(item) {
  basket.push(item); // Add the item to the 'basket' array
  return true; // Return true to indicate the item was added
}
// Created a function called 'listItems'
function listItems() {
  for (let item of basket) {
    console.log(item); // Log each item in the 'basket' array
  }
}
// Created a function called 'empty'
function empty() {
    basket = []; // Reset the 'basket' array to an empty array
  }
  // Test the functions
  console.log(`Basket is ${basket}`);
  console.log('Adding apples ', addItem('apples'));
  console.log(`Basket is now ${basket}`);
  console.log('Adding oranges ', addItem('oranges'));
  console.log(`Basket is now ${basket}`);
  
  console.log('Listing items in basket:');
  listItems();
  
  console.log('Emptying the basket:');
  empty();
  console.log(`Basket is now ${basket}`);









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
