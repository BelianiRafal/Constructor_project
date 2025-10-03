export function GetCode({ type, code, link, color }) {
  return `
  ${
    type === "newsletter"
      ? `
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
              <tr>
                  <td align="center">
                    <a href=${link} style="text-decoration:underline!important; color: ${color || "#000" };">
                        <span class="newsletterCode">
                        ${code}
                        </span>
                    </a>
                  </td>
              </tr>
          </tbody>
        </table>
        `
      : `
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
                <td align="center">
                    <span class="newsletterCode" style="color: ${color || "#000" }">
                        ${code}
                    </span>
                </td>
            </tr>
          </tbody>
        </table>
        `
  }
  `;
}
