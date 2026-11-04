function greeter(person: string) {
    return "Hello, " + person;
}

let userName = "Greta Allam";
let greeting = document.querySelector('.greeting');

if (greeting) {
    greeting.textContent = greeter(userName);
}
