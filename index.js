import App from "./app/App.js";

App.createClient(1, "John Doe");
App.createClient(2, 'John Smith');
App.createClient(3, "Mary Johnson");
App.createClient(4, "Peter Brown");
App.createClient(5, "Anna White");
App.createClient(6, 'Charles Green');

const clients = App.clients;
console.table(clients);