const tripLenght = prompt("Quanti km e' lungo il tuo viaggio?")

console.log(tripLenght);

const customerAge = prompt("Quanti anni hai?")

console.log(customerAge)

if (customerAge < 18) {
    price = tripLenght * 0.21 * (1 - 20 / 100);
}

else if (customerAge > 65) {
    price = tripLenght * 0.21 * (1 - 40 / 100);
}

else {
    price = tripLenght * 0.21;
}

console.log(price);

document.getElementById("result").innerHTML = price;