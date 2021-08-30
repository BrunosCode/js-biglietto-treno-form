// TICKET PRICE CALCULATOR
const ticketPrice = () => {
    // 1. Passenger data
    // 1a. store passenger name
    const userName = document.getElementById('user-name').value;
    // 1a. store passenger surname
    const userSurname = document.getElementById('user-surname').value;
    // 1c. store passenger age
    const userAge = parseInt(document.getElementById('user-age').value);
    // 1d. store distance of the destination
    const distance = parseInt(document.getElementById('distance').value);

    // 2. Check for input error
    // 2a. check valid name
    // 2b. check valid surname
    // 2c. check valid age
    if (userAge <= 0 || userAge > 135 || isNaN(userAge)) {
        document.getElementById('age-error').innerHTML = "(Invalid age, retry)";
    } else {
        document.getElementById('age-error').innerHTML = "";
    }
    // 2d. check valid distance
    if (distance <= 0 || isNaN(distance)) {
        document.getElementById('distance-error').innerHTML = "(Invalid distance, retry)";
    } else {
        document.getElementById('distance-error').innerHTML = "";
    }


    // 3. Store price multiplier, minor discount and over 65 discount
    const priceMultiplier = 0.21;
    const minorDiscount = 0.2;
    const over65Discount = 0.4;

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
}


document.getElementById('submitBtn').addEventListener('click', ticketPrice);