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
      this.zipCode = obj ? obj.zipcode : '';
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
}
