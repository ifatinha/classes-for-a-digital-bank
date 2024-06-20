export default class Installments {

   constructor(value, number, dueDate) {
      this.value = value;
      this.number = number;
      this.dueDate = dueDate;
      this.paid = false;
   }

   updatePaid() {
      this.paid = true;
   }

}