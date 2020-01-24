// MEAL
function Meal(price, calories) { 
    this.calories = calories;
    this.price = price;
};

Meal.prototype.getPrice = function () {
    console.log(`The price of ${this.type} is`)
    return this.price
};

Meal.prototype.getCalories = function () {
    console.log(`The calories of ${this.type} is`)
    return this.calories
};

//HAMBURGER
function Hamburger(price, calories, type, stuffing) {
    Meal.call(this, price, calories);
    this.type = type;
    this.stuffing = stuffing;
};

Hamburger.prototype = Object.create(Meal.prototype);
Hamburger.prototype.constructor = Hamburger;

//STUFFING
function Stuffing(price, calories, type) {
    Meal.call(this, price, calories);
    this.type = type;
};

Stuffing.prototype = Object.create(Meal.prototype);
Stuffing.prototype.constructor = Stuffing;

Hamburger.prototype.getTotalCalories = function () {
    var totalCalories = this.calories;
    for (var i = 0; i < this.stuffing; i++) {
        totalCalories += this.stuffing[i].calories;
    }
    return totalCalories;
};

// HAMBURGERS AND STUFFING EXPRESSIONS

var cheese = new Stuffing(10, 20, 'CHEESE');
var salad = new Stuffing(1, 2, 'SALAD');
var potato = new Stuffing(15, 10, 'POTATO');

var smallHamburger = new Hamburger(50, 20, 'SMALL_BURGER', [cheese, cheese, salad]);
var largeHamburger = new Hamburger(100, 40, "LARGE_BURGER", potato);

console.log(smallHamburger.getTotalCalories());
console.log(smallHamburger.getPrice());

console.log(largeHamburger.getTotalCalories());
console.log(largeHamburger.getPrice());

//SALADS
function Salad(price, calories, type, type) {
    Meal.call(this, price, calories);
    // this.Meal.price = this.type * this.price
    this.type = type;
    this.type = type + " gramm";
}


Salad.prototype = Object.create(Meal.prototype);
Salad.prototype.constructor = Salad;


var caesarSalad = new Salad(100, 20, 'CAESAR', 150);
var winterSalad = new Salad(50, 80, 'WINTER', 1000);


console.log(caesarSalad.getCalories());
console.log(caesarSalad.getPrice());

console.log(winterSalad.getCalories());
console.log(winterSalad.getPrice());

//DRINKS
function Drink(price, calories, type) { 
    Meal.call(this, price, calories);
    this.type = type;
 
}

Drink.prototype = Object.create(Meal.prototype);
Drink.prototype.constructor = Drink;

var cola = new Drink(50, 40, 'COLA');
var coffe = new Drink(80, 20, 'COFFE');

console.log(cola.getCalories());
console.log(coffe.getPrice());

//ORDERS

function Order(meals) {
    this.meals = meals;
    
}

Order.prototype.getTotalCalories = function () {
    var totalCalories = 0;
    for (var i = 0; i < this.meals.length; i++) {
        totalCalories += this.meals[i].calories;
    }
     console.log(`The total calories of order is`)
        return totalCalories
};

Order.prototype.getTotalPrice = function () {
    var TotalPrice = 0;  
    for (var i = 0; i < this.meals.length; i++) {
        TotalPrice += this.meals[i].price;
    }
        console.log(`The total price of order is`)
        return TotalPrice
};

function PayForOrder(order) {
    Order.call(this, order);

}

