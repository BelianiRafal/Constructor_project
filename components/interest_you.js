export function ThisMayInterestYou({ title, categories }) {
    return `
      <tr>
        <td align="center">
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            <tr>
              <td align="center" class="newsletterBottom35px">
                <span class="newsletterTitle">${title}</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            ${[0, 2].map(rowIndex => `
              <tr>
                ${[0, 1].map(colIndex => {
                  const index = rowIndex + colIndex;
                  if (!categories[index]) return "";
                  return `
                    <td style="width: 50%" class="newsletterInterestYouContainer">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                          <tr>
                            <td class="newsletterBottom35px">
                              <a href="${categories[index].href}">
                                <img src="${categories[index].src}" style="display: block;" width="100%">
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="text-align: center;">
                              <a href="${categories[index].href}" style="color: #000000; text-decoration: underline;" class="newsletterInterestYouCta">
                                ${categories[index].name}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  `;
                }).join("")}
              </tr>
            `).join("")}
          </table>
        </td>
      </tr>
    `;
  }
  