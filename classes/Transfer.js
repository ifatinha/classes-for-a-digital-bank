export default class Transfer {

   constructor(value, fromClient, toClient) {
      this.value = value;
      this.date = new Date();
      this.fromClient = fromClient;
      this.toClient = toClient;
   }

}