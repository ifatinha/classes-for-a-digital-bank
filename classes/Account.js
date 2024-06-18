export default class Account {

   #balance = 0;

   constructor(user) {
      this.user = user;
      this.deposits = [];
      this.loans = [];
      this.transfers = [];
   }

   getBalance() {
      return this.#balance;
   }

   deposit(deposit) {
      if (deposit.value > 0) {
         this.#balance += value
         this.deposits.push({ message: "Deposit: ", deposit: deposit });
      }
   }

}