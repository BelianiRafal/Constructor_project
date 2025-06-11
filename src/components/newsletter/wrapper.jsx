import React from "react"
import InlineCss from "react-inline-css"
import stylesheet from "./wrapper.module.scss?raw" // Import as raw CSS string

const NewsletterWrapper = ({ children }) => (
  <InlineCss stylesheet={stylesheet} componentName="newsletter-bg">
    <div className="newsletter-bg">
      <table className="newsletter-bg" width="100%" cellPadding="0" cellSpacing="0" border="0" align="center">
        <tbody>
          <tr>
            <td align="center">
              <table className="newsletter-main" width="576" cellPadding="0" cellSpacing="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td className="newsletter-content">{children}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </InlineCss>
)

export default NewsletterWrapper
