import Client from "../classes/Client.js";
import Transfer from "../classes/Transfer.js";

export default class App {

   static #clients = [];

   static getClients() {
      return this.#clients;
   }

   static findClient(code) {
      return this.#clients.find((client) => client.code === code);
   }

   static createClient(code, name, account) {
      const client = new Client(code, name, account);
      const exist = this.findClient(client.code);

      if (!exist) {
         this.#clients.push(client);
      }
   }

   static deposit(client, value) {
      client.account.deposit(value);
   }

   static loan(client, value, numberOfInstallments) {
      client.account.loan(value, numberOfInstallments);
   }

   static transfer(value, clientSend, clientReceives) {
      const transfer = new Transfer(value, clientSend, clientReceives);
      clientReceives.account.transfer(transfer);
   }
}