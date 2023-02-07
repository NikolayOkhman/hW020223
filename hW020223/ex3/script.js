import { FormInput } from "./formInput.js";

document.getElementById("btn").addEventListener("click", () => {
   let a = new FormInput();
   a.readAndRender();
});
