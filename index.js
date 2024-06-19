import App from "./app/App.js";
import Account from "./classes/Account.js";

const account1 = new Account();
const account2 = new Account();

App.createClient(1, "John Doe");
App.createClient(2, 'John Smith');
App.createClient(3, "Mary Johnson");
App.createClient(4, "Peter Brown");
App.createClient(5, "Anna White");
App.createClient(6, 'Charles Green');

const clients = App.getClients();

App.deposit(clients[0], 1500);
App.deposit(clients[0], 1500);
App.deposit(clients[0], 1500);
App.deposit(clients[0], 1500);

App.loan(clients[0], 500, 5);
App.loan(clients[0], 750, 1);
App.loan(clients[0], 1250, 2);

clients[0].account.show(clients[0]);

