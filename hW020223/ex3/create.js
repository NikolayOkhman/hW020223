export class Create {
   fromObject;
   constructor(fromObjectInput) {
      this.fromObject = fromObjectInput;
   }
   print() {
      let newHTML = document.createElement(this.fromObject.tagType);
      newHTML.setAttribute(
         this.fromObject.tagAttribute,
         this.fromObject.tagAttributeContent
      );
      let newTextNode = document.createTextNode(this.fromObject.tagTextContent);

      newHTML.appendChild(newTextNode);
      document.body.appendChild(newHTML);
   }
}
