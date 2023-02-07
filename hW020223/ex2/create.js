export class Create {
   name;
   lastName;
   saharHodshi;
   ahuzPensia;
   ahuzKeren;
   constructor(
      nameInp,
      lastNameInp,
      saharHodshiInp,
      ahuzPensiaInp,
      ahuzKerenInp
   ) {
      this.name = nameInp;
      this.lastName = lastNameInp;
      this.saharHodshi = saharHodshiInp;
      this.ahuzPensia = ahuzPensiaInp;
      this.ahuzKeren = ahuzKerenInp;
   }
}
