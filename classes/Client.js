import Account from "./Account.js";

export default class Client {

   constructor(code, fullName) {
      this.code = code;
      this.fullName = fullName;
      this.account = new Account(this);
   }
}