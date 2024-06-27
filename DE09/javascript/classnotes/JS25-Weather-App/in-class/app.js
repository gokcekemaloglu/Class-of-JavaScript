console.log('App.js working')

//! Selectors

const form = document.querySelector("form")
const input = document.querySelector("form input.form-control")

//! Variables

let apiKey = "2c43275ccaaf3112671fba1b4e875e59"
let url; // api isteği için kullanılacak
let units = "metric" // fahrenheit için 'impeiral' yazılması
let lang = "en" // Almanca için 'de' yazılması

console.log(input);

//! EventListener

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log((input.value));





    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${apiKey}`;
})