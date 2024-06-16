export default class Transfer {

   constructor(value, userAccountDeposit, userAccountTransfer) {
      this.value = value;
      this.dateTransfer = new Date();
      this.userAccountDeposit = userAccountDeposit;
      this.userAccountTransfer = userAccountTransfer;
   }

}