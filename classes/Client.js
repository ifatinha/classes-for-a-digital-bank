import Account from "./Account.js";

export default class Client {

   constructor(code, name) {
      this.code = code;
      this.name = name;
      this.account = new Account();
   }
}