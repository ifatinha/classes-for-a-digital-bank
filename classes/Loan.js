import FormatDate from "../util/FormatDate.js";
import Installments from "./Installments.js";

export default class Loan {

   static #fee = 1.05;

   constructor(value, numberOfInstallments) {
      this.value = value;
      this.date = new Date();
      this.installments = App.calculateInstallments(numberOfInstallments);
   }

   static get fee() {
      return this.#fee;
   }

   static set fee(newFeePorcentage) {
      Loan.#fee = (1 + newFeePorcentage) / 100;
   }

   static calculateInstallments(numberOfInstallments) {
      const arr = [];
      let installmentValue = ((this.value * Loan.get()) / numberOfInstallments);

      for (let i = 1; i <= numberOfInstallments; i++) {
         dueDate = FormatDate.addDays(new Date());
         const installment = new Installments(installmentValue, i, dueDate);
         arr.push(installment);
      }

      return arr;
   }

}