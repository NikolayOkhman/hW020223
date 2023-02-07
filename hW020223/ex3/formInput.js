import { Create } from "./create.js";
export class FormInput {
   tagType;
   tagAttribute;
   tagAttributeContent;
   tagTextContent;
   constructor() {
      this.tagType = document.getElementById("tagType").value;
      this.tagAttribute = document.getElementById("tagId").value;
      this.tagAttributeContent = document.getElementById("tagName").value;
      this.tagTextContent = document.getElementById("tagInputText").value;
   }
   readAndRender() {
      let newElementOnHtml = new Create(this);
      newElementOnHtml.print();
   }
}
