
export const Title = ({title, color, align = "left", className = "newsletterTitle", type = "normal", idx, len, size}) => {


  if (type === "product") {
        if (idx === len) {
          return `
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
                <tr>
                    <td align="${align}">
                        <span class="${className}" style="color: ${color || "#000000"}">
                            ${title}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td align="${align}">
                        <span class="${className}" style="color: ${color || "#000000"}; font-weight:600;">
                            ${size}
                        </span>
                    </td>
                </tr>
            </tbody>
            </table>
          `;
        }
        return `
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
                <tr>
                    <td align="${align}">
                        <span class="${className}" style="color: ${color || "#000000"}">
                            ${title}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
      `;
      }
      if (type === "normal") {
        if (idx === len) {
          return `
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
                <tr>
                    <td align="${align}">
                        <span class="${className}" style="color: ${color || "#000000"}">
                            ${title}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
          `;
        }
        return `
      `;
      }
      if (type === "productImg") {
        
          return `
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
                <tr>
                    <td align="${align === "center" ? "center" : "left"}">
                        <span class="${className}" style="color: ${color || "#000000"}">
                            ${title}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
          `;
      }
};
