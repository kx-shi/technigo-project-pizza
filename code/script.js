// Start here

// Helper functions
function inputIsInvalid(input, rangeStart, rangeEnd) {
  if(isNaN(input) || input < rangeStart || input > rangeEnd) {
    return true;
  }
  return false;
}

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let userName = prompt(`What is your name?`);
while (userName === "") {
  userName = prompt(`Invalid input. What is your name?`);
};

alert(
  `Hello, ${userName}!`
);

// Step 2 - Food choice
let foodChoice = parseInt(prompt(
  `What would you like to eat today?
  1. Pizza
  2. Tacos
  3. Burger`
  ));

while(inputIsInvalid(foodChoice, 1, 3)) {
  foodChoice =  parseInt(prompt(
    `Invalid input. What would you like to eat today?
    1. Pizza
    2. Tacos
    3. Burger`
    ));
}

switch(foodChoice) {
  case 1:
    foodChoice = "Pizza";
    break;
  case 2:
    foodChoice = "Tacos";
    break;
  case 3:
    foodChoice = "Burger";
    break;
}

alert(`You've chosen ${foodChoice.toLowerCase()}!`)

// Step 3 - Subtype choice
function chooseSubtype(subChoice1, subChoice2, subChoice3) {
  let subType = parseInt(prompt(
    `${foodChoice}! How delicious! What kind would you like?
    1. ${subChoice1}
    2. ${subChoice2}
    3. ${subChoice3}`
  ));

  while (inputIsInvalid(subType, 1, 3)) {
    subType =  parseInt(prompt(
      `Invalid input. What kind of ${foodChoice.toLowerCase()} would you like?
      1. ${subChoice1}
      2. ${subChoice2}
      3. ${subChoice3}`
    ));
  }

  switch(subType) {
    case 1:
      subType = subChoice1;
      break;
    case 2:
      subType = subChoice2;
      break;
    case 3:
      subType = subChoice3;
      break;
  }

  return subType;
};

let subChoice
switch (foodChoice) {
  case "Pizza":
    subChoice = chooseSubtype("Pepperoni", "Veggie", "Curry");
    break;
  case "Tacos":
    subChoice = chooseSubtype("Creamy", "Crunchy", "Supreme");
    break;
  case "Burger":
    subChoice = chooseSubtype("Cheese", "Double cheese", "Triple cheese");
    break;
};

alert(`You've chosen ${subChoice.toLowerCase()}!`)

// Step 4 - Age
let userAge = parseInt(prompt(
  `Is this meal for an child or adult? Please enter your age:`
  ));

while (isNaN(userAge) || userAge <= 0) {
  userAge = parseInt(prompt(
    `Invalid input. Please enter your age:`
    ));
};

let totalCost = 5;
if(userAge >= 18) {
  totalCost = 10;
  alert(
    `One adult sized ${subChoice.toLowerCase()} ${foodChoice.toLowerCase()} will be prepared for you. That'll be £${totalCost}.`
  )
}else {
  alert(
    `One child sized ${subChoice.toLowerCase()} ${foodChoice.toLowerCase()} will be prepared for you. That'll be £${totalCost}.`
  )
}

let userConfirmation = parseInt(prompt(
  `ORDER CONFIRMATION
  One ${subChoice.toLowerCase()} ${foodChoice.toLowerCase()}. Total cost: £${totalCost}
  Are you sure you want to order this?
  1. Yes
  2. No`
));

while (inputIsInvalid(userConfirmation, 1, 2)) {
  userConfirmation = parseInt(prompt(
    `Invalid choice. Proceed with order?
    1. Yes
    2. No`
    ));
};

// Step 5 - Order confirmation
switch(userConfirmation) {
  case 1:
    alert("Thank you for your order! Have a nice day!");
    break;
  case 2:
    alert("Order has been canceled. Have a nice day!");
    break;
};
