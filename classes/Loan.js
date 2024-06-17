import FormatDate from "../util/FormatDate.js";
import Installments from "./Installments.js";

export default class Loan {

   static #interestRate = 0.01;

   constructor(value, numberOfInstallments) {
      this.value = value;
      this.dateLoan = new Date();
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
      let valueInstallment = (this.value / numberOfInstallments);
      valueInstallment += valueInstallment * Loan.get();
      let dueDate = new Date();

      for (let i = 0; i < numberOfInstallments; i++) {
         dueDate = FormatDate.addDays(dueDate);
         const installment = new Installments(valueInstallment, i + 1, dueDate);
         arr.push(installment);
      }

      return arr;
   }

}