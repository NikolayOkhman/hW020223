import { Create } from "./create.js";
export class SaharInput {
   name;
   lastName;
   saharHodshi;
   saharPensia;
   saharKeren;

   constructor() {
      document.getElementById("newBtn").addEventListener("click", () => {
         this.createObjectAndRender();
      });
   }

   createObjectAndRender() {
      this.name = document.getElementById("nameInp").value;
      this.lastName = document.getElementById("lastNameInp").value;
      this.saharHodshi = document.getElementById("saharInp").value;
      this.saharPensia = document.getElementById("pensiaInp").value;
      this.saharKeren = document.getElementById("kerenInp").value;
      let a = new Create(
         this.name,
         this.lastName,
         this.saharHodshi,
         this.saharPensia,
         this.saharKeren
      );
      console.log(a);
      let ahuzPensia = this.saharHodshi * (this.saharPensia / 100);
      let ahuzKeren = this.saharHodshi * (this.saharKeren / 100);
      let mas;

      if (this.saharHodshi <= 6790) {
         mas = this.saharHodshi * 0.1;
      } else if (this.saharHodshi > 6790 && this.saharHodshi <= 9730) {
         mas = 6790 * 0.1;
         mas = mas + (this.saharHodshi - 6790) * 0.14;
      } else if (this.saharHodshi > 9730 && this.saharHodshi <= 15620) {
         mas = 6790 * 0.1;
         mas = mas + 2939 * 0.14;
         mas = mas + (this.saharHodshi - 9730) * 0.2;
      } else if (this.saharHodshi > 15620 && this.saharHodshi <= 21710) {
         mas = 6790 * 0.1;
         mas = mas + 2939 * 0.14;
         mas = mas + (15620 - 9730) * 0.2;
         mas = mas + (this.saharHodshi - 15620) * 0.31;
      } else if (this.saharHodshi > 21710 && this.saharHodshi <= 45180) {
         mas = 6790 * 0.1;
         mas = mas + 2939 * 0.14;
         mas = mas + (15620 - 9730) * 0.2;
         mas = mas + (21710 - 15620) * 0.31;
         mas = mas + (this.saharHodshi - 21710) * 0.35;
      } else if (this.saharHodshi > 45180 && this.saharHodshi <= 58190) {
         mas = 6790 * 0.1;
         mas = mas + 2939 * 0.14;
         mas = mas + (15620 - 9730) * 0.2;
         mas = mas + (21710 - 15620) * 0.31;
         mas = mas + (45180 - 21710) * 0.35;
         mas = mas + (this.saharHodshi - 45180) * 0.47;
      } else if (this.saharHodshi > 58191) {
         mas = 6790 * 0.1;
         mas = mas + 2939 * 0.14;
         mas = mas + (15620 - 9730) * 0.2;
         mas = mas + (21710 - 15620) * 0.31;
         mas = mas + (45180 - 21710) * 0.35;
         mas = mas + (58191 - 45180) * 0.47;
         mas = mas + (this.saharHodshi - 58191) * 0.5;
      }

      let saharNeto = this.saharHodshi - (ahuzPensia + ahuzKeren + mas);

      let newDiv = document.getElementById("newDiv");
      newDiv.innerText = `שם: ${a.name}
      שם משפחה: ${a.lastName}
       שכר ברוטו: ${this.saharHodshi} ש"ח.
      הופרש לקרן פנסיה: ${ahuzPensia} ש"ח.  
      הופרש לקרן השתלמות: ${ahuzKeren} ש"ח. 
      מס הכנסה: ${mas} ש"ח. 
      שכר נטו בבנק: ${saharNeto} ש"ח. `;
   }
}
