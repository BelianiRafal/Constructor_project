// export const Paragraph = ({paragraph, align = "left", style, type= "standard"}) => {
//     if (type === "standard") {
//         return `
//             <table cellspacing="0" cellpadding="0" border="0" width="100%">
//                 <tbody>
//                     <tr>
//                         <td class="newsletterContainer" align="${align}" style="${style ?? ""}">
//                             <span class="newsletterParagraph">
//                                 ${paragraph}
//                             </span>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//       `;
//     }
//     if (type === "split") {
//         return `
            
//             <table cellspacing="0" cellpadding="0" border="0" width="100%">
//                 <tbody>
//                     <tr>
//                         <td  align="${align}">
//                             <table cellspacing="0" cellpadding="0" border="0">
//                                 <tbody> 
//                                     <tr>
//                                         <td style="align:left" width="100%">
//                                             <table cellspacing="0" cellpadding="0" border="0">
//                                             <tr><td class="newsletterMarkTitleSpace"><span class="newsletterMarkTitle">&#10003; ${paragraph[0]}</span></td></tr>
                                           
                                            
//                                             <tr><td class="newsletterMarkTitleSpace"><span class="newsletterMarkTitle">&#10003; ${paragraph[1]}</span></td></tr>
                                            
                                            
//                                             <tr><td><span class="newsletterMarkTitle">&#10003; ${paragraph[2]}</span></td></tr>
//                                             </table>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//       `;
//     }

// };

export class Paragraph{
    constructor({ paragraph, align = "left", style, type= "standard" }) {
    this.paragraph = paragraph; 
    this.align = align; 
    this.style = style; 
    this.type = type; 
    this.htmlOutput = this.Select();
  }
  Select(){
    const templates_form = {
        standard: this.Standard(),
        split: this.Split(),
    }

    return templates_form[this.type]
  }
  
  Template(layout){
     return `
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td  align="${this.align}" style="color: ${this.style.textColor}">
                            ${layout}
                        </td>
                    </tr>
                </tbody>
            </table>
      `;
  }
  Standard(){
    const standard = ` <span class="newsletterParagraph">
                                ${this.paragraph}
                            </span>`
    return this.Template(standard)
  }
  Split(){
    const split = `<table cellspacing="0" cellpadding="0" border="0">
                                <tbody> 
                                    <tr>
                                        <td class="newsletterMarkTitleAlign";style="align:left" width="100%">
                                            <table cellspacing="0" cellpadding="0" border="0">
                                            <tr><td class="newsletterMarkTitleSpace"><span class="newsletterMarkTitle">&#10003; ${this.paragraph[0]}</span></td></tr>
                                            <tr><td class="newsletterMarkTitleSpace"><span class="newsletterMarkTitle">&#10003; ${this.paragraph[1]}</span></td></tr>
                                            <tr><td><span class="newsletterMarkTitle">&#10003; ${this.paragraph[2]}</span></td></tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>`

    return this.Template(split)
  }
  
}

