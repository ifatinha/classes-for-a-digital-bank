import Client from "../classes/Client.js";
import Deposit from "../classes/Deposit.js";
import Loan from "../classes/Loan.js";
import Transfer from "../classes/Transfer.js";

export default class App {

   static #clients = [];

   static get clients() {
      return this.#clients;
   }

   static findClient(code) {
      return this.#clients.find((client) => client.code === code) ?? null;
   }

   static createClient(code, name) {
      const exist = this.findClient(code);

      if (!exist) {
         this.#clients.push(new Client(code, name));
      }
   }

   static deposit(value, codeClient) {
      const client = App.findClient(codeClient);

      if (value > 0 && client) {
         client.account.addDeposit(new Deposit(value));
      }
   }

   static loan(value, codeClient, numberOfInstallments) {
      const client = App.findClient(codeClient);

      if (value > 0 && client) {
         client.account.addLoan(new Loan(value, numberOfInstallments));
      }
   }

   static transfer(value, fromClientCode, toClientCode) {
      const fromClient = this.findClient(fromClientCode);
      const toClient = this.findClient(toClientCode);

      if (value > 0 && fromClient && toClient) {
         const transfer = new Transfer(value, fromClient, toClient);

         if (transfer.value <= fromClient.account.balance &&
            transfer.value <= toClient.account.balance) {
            fromClient.account.addTransfer(transfer);
            toClient.account.addTransfer(transfer);
         }
      }
   }

   static changeLoanFee(newFeePercentage) {
      Loan.fee = newFeePercentage;
   }

}