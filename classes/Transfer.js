export default class Transfer {

   constructor(value, clientSend, clientReceives) {
      this.value = value;
      this.date = new Date();
      this.clientSend = clientSend;
      this.clientReceives = clientReceives;
   }

}