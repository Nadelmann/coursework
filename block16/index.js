//Discount Chain:
// Your first assignment is to create the logic for their checkout system that returns the total cost 
//of all refills including if the customer has a subscription and/or a coupon.

//*****Had to add names to each of the object for the for loop script that prints final amounts*****

//Customer objects

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
    name: "Timmy"
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
    name: "Sarah",
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
    name: "Rocky",
}

// Calculating the total the customer would spend if all refills were bought at once
const refillTotal = (customer) => customer.pricePerRefill * customer.refills;

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
const subscriptionDiscount = (total) => total * 0.75;

// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
const dollarDiscount = (total) => total - 10;

//Final amount function for all customers checking for subscriptions and coupons.
const finalAmount = (customer) => {
    let total = refillTotal(customer);
    if (customer.subscription) {
        total = subscriptionDiscount(total);
    }
    if (customer.coupon) {
        total = dollarDiscount(total);
    }
    return total;
}
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
//for loop to check and return the grand total for every customer    
for (customer of [timmy,sarah,rocky]){
    console.log(customer.name + ", Your grand total is $" + finalAmount(customer));
}