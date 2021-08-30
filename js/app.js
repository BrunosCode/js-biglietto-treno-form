// TICKET PRICE CALCULATOR
const ticketPrice = () => {
    // ask and store user age
    const userAge = parseInt(document.getElementById('user-age').value);
    // ask and store distance of the destination
    const distance = parseInt(document.getElementById('distance').value);
    // check for error
    if (userAge <= 0 || isNaN(userAge)) {
        document.getElementById('age-error').innerHTML = "(Invalid age, retry)";
        return;
    } 
    document.getElementById('age-error').innerHTML = "";
    if (distance <= 0 || isNaN(distance)) {
        document.getElementById('distance-error').innerHTML = "(Invalid distance, retry)";
        return;
    }
    document.getElementById('distance-error').innerHTML = "";
    // store price multiplier, minor discount and over 65 discount
    const priceMultiplier = 0.21;
    const minorDiscount = 0.2;
    const over65Discount = 0.4;
    // calculate base price
    let price = distance * priceMultiplier;
    // if user is a minor apply discount
    if (userAge < 18) {
        price *= (1 - minorDiscount);
        document.getElementById('discount').innerHTML = "*The discount for Minors has been applied";
    }
    // if user age is over 65 apply discount
    if (userAge >= 65) {
        price *= (1 - over65Discount);
        document.getElementById('discount').innerHTML = "*The discount for Over65 has been applied";
    }
    // round the price to decimal number
    price = Math.round(price * 100)/ 100;
    // show price to the user
    document.getElementById('ticket-price').innerHTML = price + "€";
}


document.getElementById('submitBtn').addEventListener('click', ticketPrice);