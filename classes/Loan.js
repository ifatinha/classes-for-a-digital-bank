import FormatDate from "../util/FormatDate.js";
import Installments from "./Installments.js";

export default class Loan {

   static #interestRate = 0.01;

   constructor(value, numberOfInstallments) {
      this.value = value;
      this.date = new Date();
      this.installments = this.calculateInstallments(numberOfInstallments);
   }

   static get() {
      return this.#interestRate;
   }

   static set(interestRate) {
      this.#interestRate = interestRate / 100;
   }

   calculateInstallments(numberOfInstallments) {
      const arr = [];
      let installmentValue = (this.value / numberOfInstallments);
      installmentValue += installmentValue * Loan.get();
      let dueDate = new Date();

      for (let i = 0; i < numberOfInstallments; i++) {
         dueDate = FormatDate.addDays(dueDate);
         const installment = new Installments(installmentValue, i + 1, dueDate);
         arr.push(installment);
      }

      return arr;
   }

}