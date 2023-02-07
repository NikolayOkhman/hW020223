class User {
   name;
   lastName;
   city;
   age;
   pet;

   constructor() {
      this.name = document.getElementById("name").value;
      this.lastName = document.getElementById("lastName").value;
      this.city = document.getElementById("city").value;
      this.age = document.getElementById("age").value;
      this.pet = document.getElementById("pet").value;
      this.saveBtn = document
         .getElementById("btn")
         .addEventListener("click", () => {
            this.newPrint();
         });
      // this.getBtn = document
      //    .getElementById("btn1")
      //    .addEventListener("click", () => {
      //       this.getFromLS();
      //    });
   }
   newPrint() {
      let a = new User();
      localStorage.setItem("Users", JSON.stringify(a));
   }
   getFromLS() {
      document.getElementById("newDiv").innerHTML = "";
      let j = JSON.parse(localStorage.getItem("Users"));

      let newDiv = document.getElementById("newDiv");
      let txt = ` <b>User name is: </b> ${j.name} <br/>
      <b>LastName is: </b>${j.lastName}<br/>
      <b>City is: </b> ${j.city}<br/>
      <b>Age is: </b> ${j.age}<br/>
      <b>Pet is: </b> ${j.pet}<br/>`;
      newDiv.innerHTML = txt;
   }
}
let f = new User();
f.getFromLS();
