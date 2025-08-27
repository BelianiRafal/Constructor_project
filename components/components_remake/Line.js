export function Line(img = "https://beliani.info/newsletter/2022/line.jpg", insideContainer = false) {
  return `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
                <td ${insideContainer ? 'class="newsletterContainer"' : ''}>
                    <img src=${img} style="display:block" width="100%" alt="">
                </td>
            </tr>
        </tbody>
    </table>
    `;
}
