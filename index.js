import App from "./app/App.js";

App.createClient(1, "John Doe");
App.createClient(2, 'John Smith');
App.createClient(3, "Mary Johnson");
App.createClient(4, "Peter Brown");
App.createClient(5, "Anna White");
App.createClient(6, 'Charles Green');

const clients = App.clients;

// App.deposit(500, clients[0].code);
App.changeLoanFee(1);
App.loan(500, clients[0].code, 2);


// App.deposit(500, clients[1].code);

// App.transfer(100, clients[0].code, clients[0].code);
// App.transfer(500, clients[0].code, clients[1].code);
// App.transfer(50, clients[1].code, clients[0].code);

// clients[0].account.show();

clients[0].account.loans[0].installments[0].updatePaid();
console.table(clients[0].account.loans[0].installments);
