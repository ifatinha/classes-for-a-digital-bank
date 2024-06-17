export default class FormatDate {

   pattern = {
      month: "numeric",
      year: "2-digit",
      day: "numeric"
   }

   static formatDate(date) {
      return date.toLocaleDateString("pt-BR", this.pattern);
   }

   static addDays(date, days = 30) {
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + days);
      return nextDate;
   }

}