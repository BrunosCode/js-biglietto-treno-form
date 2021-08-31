// TICKET PRICE CALCULATOR

// 0. Store price multiplier, minor discount and over 65 discount
const priceMultiplier = 0.21;
const minorDiscount = 0.2;
const over65Discount = 0.4;
// 0. diclare variable
let userName, userSurname, userAge, distance;

// 1. Passenger data
const storeUserData = () => {
    // 1a. store passenger name
    userName = document.getElementById('user-name').value;
    // 1a. store passenger surname
    userSurname = document.getElementById('user-surname').value;
    // 1c. store passenger age
    userAge = parseInt(document.getElementById('user-age').value);
    // 1d. store distance of the destination
    distance = parseInt(document.getElementById('distance').value);

    // 2. Check for input error
    let validInput = true;
    // 2a. reset error messages
    document.getElementById('name-error').innerHTML = "";
    document.getElementById('surname-error').innerHTML = "";
    document.getElementById('age-error').innerHTML = "";
    document.getElementById('distance-error').innerHTML = "";
    // 2a. check user name
    if (userName === "") {
        validInput = false;
        document.getElementById('name-error').innerHTML = "(Name is mandatory)";
    } 
    // 2b. check user surname
    if (userSurname === "") {
        validInput = false;
        document.getElementById('surname-error').innerHTML = "(Surname is mandatory)";
    }
    // 2c. check valid age
    if (userAge < 1 || userAge > 135 || isNaN(userAge)) {
        validInput = false;
        document.getElementById('age-error').innerHTML = "(Invalid age, retry)";
    }
    // 2d. check valid distance
    if (distance < 1 || isNaN(distance)) {
        validInput = false;
        document.getElementById('distance-error').innerHTML = "(Invalid distance, retry)";
    }
    if (validInput == true) {
        printTicket();
    }
}

// Print ticket
const printTicket = () => {
    // 4. Calculate base price
    let price = distance * priceMultiplier;
    // 4a. if user is a minor apply discount
    if (userAge < 18) {
        price *= (1 - minorDiscount);
        document.getElementById('discount').innerHTML = "Minors Discount";
    // 4b. if user age is over 65 apply discount
    } else if (userAge >= 65) {
        price *= (1 - over65Discount);
        document.getElementById('discount').innerHTML = "Silver Discount";
    // 4c. if user age is between 18 and 65 no discount
    } else {
        document.getElementById('discount').innerHTML = "None";
    }
    // 4d. round the price to decimal number
    price = price.toFixed(2);
    // 4e. show price to the user
    document.getElementById('ticket-price').innerHTML = price + "€";
    
    // 5. Print passenger full name
    document.getElementById('full-name').innerHTML = userName + " " + userSurname;
    
    // 6. Calculate random Carriege
    document.getElementById('carriege').innerHTML = Math.floor(Math.random() * 9) + 1;
    
    // 6. Calculate random CP code
    document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * 10000) + 90000;
    
    // 7. Show ticket
    document.getElementById('ticket').classList.toggle("hide");
}
        

document.getElementById('submitBtn').addEventListener('click', storeUserData);

const reset = () => {
    // 8. Delete input value
    document.getElementById('user-name').value = "";
    document.getElementById('user-surname').value = "";
    document.getElementById('user-age').value = "";
    document.getElementById('distance').value = "";

    // 9. Hide ticket
    document.getElementById('ticket').classList.toggle("hide");
}

document.getElementById('resetBtn').addEventListener('click', reset);