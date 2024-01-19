export class User {
   customIdName: string;
   firstName: string;
   lastName: string;
   birthDate: number;
   email: number;
   street: string;
   zipCode: number;
   city: string;

   constructor(obj?: any) {
      this.customIdName = obj ? obj.customIdName : '';
      this.firstName = obj ? obj.firstName : '';
      this.lastName = obj ? obj.lastName : '';
      this.birthDate = obj ? obj.birthDate : '';
      this.email = obj ? obj.email : '';
      this.street = obj ? obj.street : '';
      this.zipCode = obj ? obj.zipCode : '';
      this.city = obj ? obj.city : '';
   }
   public toJSON() {
      return {
         customIdName: this.customIdName,
         firstName: this.firstName,
         lastName: this.lastName,
         birthDate: this.birthDate,
         street: this.street,
         zipCode: this.zipCode,
         city: this.city,
         email: this.email,
      };
   }

   //   public formatDate(timestamp: number): string {
   //      const date = new Date(timestamp);
   //      const day = date.getDate().toString().padStart(2, '0');
   //      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Monate sind 0-basiert
   //      const year = date.getFullYear();
   //      return `${day}.${month}.${year}`;
   //  }
}
