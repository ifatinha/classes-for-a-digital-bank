import Account from "./classes/Account.js";
import Deposit from "./classes/Deposit.js";
import Loan from "./classes/Loan.js";
import Transfer from "./classes/Transfer.js";

const cl1 = {
   code: 1,
   name: "John Doe"
}

const cl2 = {
   code: 2,
   name: "Sally River"
}

const account = new Account(cl1);

const dep1 = new Deposit(1500);
const dep2 = new Deposit(2000);
account.deposit(dep1);
account.deposit(dep2);

const loan1 = new Loan(2500, 5);
const loan2 = new Loan(1000, 1);
account.loan(loan1);
account.loan(loan2);

const transfer = new Transfer(100, cl1, cl2);
const transfer2 = new Transfer(50, cl1, cl1);
account.transfer(transfer);
account.transfer(transfer2);

account.show();