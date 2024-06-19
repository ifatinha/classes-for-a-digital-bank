import Deposit from "./Deposit.js";
import Loan from "./Loan.js";
import Transfer from "./Transfer.js";

export default class Account {

   #balance = 0;

   constructor() {
      this.deposits = [];
      this.loans = [];
      this.transfers = [];
   }

   getBalance() {
      return this.#balance;
   }

   deposit(value) {
      if (value > 0) {
         const deposit = new Deposit(value);
         this.#balance += deposit.value;
         this.deposits.push(deposit);
      }
   }

   loan(value, numberOfInstallments) {
      if (value > 0) {
         const loan = new Loan(value, numberOfInstallments);
         this.#balance += loan.value;
         this.loans.push(loan);
      }
   }

   transfer(transfer) {
      if (transfer.clientReceives.code === this.client.code) {
         this.#balance += transfer.value;
         this.transfers.push(transfer);
      } else {
         if (transfer.value <= this.getBalance()) {
            this.#balance -= transfer.value;
            this.transfers.push(transfer);
         }
      }
   }

   show(client) {
      console.log("######### Extrato #########");
      console.log(`Cliente: ${client.code} - ${client.name}`);
      console.log(`Saldo em Conta: ${this.getBalance()}`);

      console.log("\nDepósitos:");
      console.table(this.deposits);

      console.log("\nEmpréstimos:");
      console.table(this.loans);

      console.log("\nTransferências:")
      console.table(this.transfers);

   }

}