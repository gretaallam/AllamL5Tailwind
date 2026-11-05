function greeter(person: string) {
    return "Hello, " + person;
}

let userName = "Testing?";
let greeting = document.querySelector('.greeting');

if (greeting) {
    greeting.textContent = greeter(userName);
}
