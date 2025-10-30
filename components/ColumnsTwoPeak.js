
export function ColumnsTwoPeak({ iter, left, right, shuffle, ctaComponent, href, cta, color, align }) {
    return `
      ${iter
        .map((item, index) => {
          const columns = [];
  
          if (shuffle) {
            if (index % 2 === 0) {
              for (const [idx, category] of item.entries()) {
                if (idx % 2 === 0) {
                  const LEFT_COLUMN = left(category);
                  columns.push(LEFT_COLUMN);
                } else {
                  const RIGHT_COLUMN = right(category);
                  columns.push(RIGHT_COLUMN);
                }
              }
            } else {
              for (const [idx, category] of item.entries()) {
                if (idx % 2 === 0) {
                  const RIGHT_COLUMN = right(category);
                  columns.push(RIGHT_COLUMN);
                } else {
                  const LEFT_COLUMN = left(category);
                  columns.push(LEFT_COLUMN);
                }
              }
            }
          } else {
            for (const [idx, category] of item.entries()) {
              if (idx % 2 === 0) {
                const RIGHT_COLUMN = right(category);
                columns.push(RIGHT_COLUMN);
              } else {
                const LEFT_COLUMN = left(category);
                columns.push(LEFT_COLUMN);
              }
            }
          }
  
          return `
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                <td ${index === iter.length -1 ? 'class="newsletterBottom35px"' : ""} style="${index === iter.length -1 ? "" : "padding-bottom: 10px;"}">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tbody>
                      <tr>
                        
                          ${columns.join("")}
                        
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          `;
        })
        .join("")}
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                <td align="${align}">
                  ${
                    ctaComponent
                      ? ctaComponent(href, cta)
                      : `
                      <a href="${href}" style="color:${
                          color || "#000"
                        }; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                      </a>
                    `
                  }
                </td>
              </tr>
            </tbody>
          </table>
      `;
  }
  