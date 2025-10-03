
export function Create2Columns({ iter, left, right, shuffle }) {
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
              <td style="padding-bottom: 20px;">
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        ${columns.join("")}
                      </td>
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
    `;
}
