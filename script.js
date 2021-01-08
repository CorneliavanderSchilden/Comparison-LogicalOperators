const age = 20;

if (age > 17) {
    console.log("Je bent ouder dan 18 jaar. Welkom in onze kroeg");
}
else if (age < 18) {
    console.log("Je bent jonger dan 18 jaar. Helaas mogen we je niet binnen laten");
}

const isFemale = false;

if (isFemale == true) {
    console.log("Welkom bij ladies night");
}

else {
    console.log("Ladies only vanavond. Tot een andere keer");
}

const driverStatus = "Karin";

if (driverStatus == "Bob") {
    console.log("Hoi Bob. Have a safe drive home!")
}
else {
    console.log("Glaasje op laat je rijden")
}

var leeftijd = 20;

if (leeftijd >= 18 && leeftijd <= 25) {
    console.log("Je krijgt 50% korting!")
}

else {
    console.log("Cheers!")
}

const voornaamM = "Bram";
const voornaamV = "Sarah"

if (voornaamM == "Bram" || voornaamV == "Sarah") {
    console.log("Van harte gefeliciteerd. Je krijgt van ons een gratis biertje!")
}

else {
    console.log("Gezellig dat je er bent!")
}

const totalAmount = 23;

if (totalAmount > 25 && totalAmount < 51) {
    console.log("Er staat een portie gratis (vega)bitterballen voor je klaar.")
}

else if (totalAmount > 50 && totalAmount < 100) {
    console.log("Er staat een portie gratis nachos voor je klaar.")
}

else if (totalAmount >= 100) {
    console.log("Er staat een gratis fles champagne voor je klaar.")
}

else {
    console.log("Leuk dat je er vanavond bent.")
}