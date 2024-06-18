import FormatDate from "../util/FormatDate.js";

export default class Account {

   #balance = 0;

   constructor(client) {
      this.client = client;
      this.deposits = [];
      this.loans = [];
      this.transfers = [];
   }

   getBalance() {
      return this.#balance;
   }

   deposit(deposit) {
      if (deposit.value > 0) {
         this.#balance += deposit.value;
         this.deposits.push(deposit);
      }
   }

   loan(loan) {
      if (loan.value > 0) {
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

   show() {
      console.log("######### Extrato #########");
      console.log(`Cliente: ${this.client.code} - ${this.client.name}`);
      console.log(`Saldo em Conta: ${this.getBalance()}`);

      console.table(this.deposits);
      console.table(this.loans);
      console.table(this.transfers);

   }

}