import Deposit from "./Deposit.js";
import Loan from "./Loan.js";
import Transfer from "./Transfer.js";

export default class Account {

   #balance;

   constructor(client) {
      this.owner = client;
      this.#balance = 0;
      this.deposits = [];
      this.loans = [];
      this.transfers = [];
   }

   get balance() {
      return this.#balance;
   }

   addDeposit(deposit) {
      this.#balance += deposit.value;
      this.deposits.push(deposit);
   }

   addLoan(loan) {
      this.#balance += loan.value;
      this.loans.push(loan);
   }

   addTransfer(transfer) {

      if (transfer.toClient.code === this.owner.code) {
         this.#balance += transfer.value;
         this.transfers.push(transfer);
      } else if (transfer.fromClient.code === this.owner.code) {
         if (transfer.value <= this.owner.account.balance) {
            this.#balance -= transfer.value;
            this.transfers.push(transfer);
         }
      }
   }

   show() {
      console.log("######### Extrato #########");
      console.log(`Cliente: ${this.owner.code} - ${this.owner.fullName}`);
      console.log(`Saldo em Conta: ${this.#balance}.00R$`);

      console.log("\nDepósitos:");
      console.table(this.deposits);

      console.log("\nEmpréstimos:");
      console.table(this.loans);

      console.log("\nTransferências:")
      console.table(this.transfers);

   }

}