"use strict";
function greeter(person) {
    return "Hello, " + person;
}
let userName = "??????";
let greeting = document.querySelector('.greeting');
if (greeting) {
    greeting.textContent = greeter(userName);
}
