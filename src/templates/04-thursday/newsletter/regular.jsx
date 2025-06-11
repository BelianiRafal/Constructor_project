import React from "react"
import NewsletterWrapper from "../../../components/newsletter/wrapper"
import styles from "./regular.module.scss" // SCSS will be inlined with inline-css

/**
 * Basic regular newsletter template.
 * Displays TopImageTitle, TopImage, Intro, and Categories with products.
 * Uses tables for all layout (Litmus/email friendly).
 */
const NewsletterRegular = ({ TopImageTitle, TopImage, Intro, categories = [] }) => (
  <NewsletterWrapper>
    {/* Top Image Title */}
    {TopImageTitle && (
      <table width="100%" cellPadding="0" cellSpacing="0" border="0" className={styles.section}>
        <tbody>
          <tr>
            <td align="center" style={{ padding: "24px 0" }}>
              {TopImageTitle.image && (
                <img
                  src={TopImageTitle.image || ""}
                  alt={TopImageTitle.text?.line1 || "Top Image"}
                  style={{ maxWidth: "100%" }}
                />
              )}
              {TopImageTitle.text && (
                <div>
                  <h1>{TopImageTitle.text.line1}</h1>
                  <h2>{TopImageTitle.text.line2}</h2>
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    )}

    {/* Top Gif */}
    {TopImage && (
      <table width="100%" cellPadding="0" cellSpacing="0" border="0" className={styles.section}>
        <tbody>
          <tr>
            <td align="center" style={{ padding: "24px 0" }}>
              <img src={TopImage || ""} alt="Top Gif" style={{ maxWidth: "100%" }} />
            </td>
          </tr>
        </tbody>
      </table>
    )}

    {/* Intro */}
    {Intro && (
      <table width="100%" cellPadding="0" cellSpacing="0" border="0" className={styles.section}>
        <tbody>
          <tr>
            <td align="center" style={{ padding: "24px 0" }}>
              <p>{Intro}</p>
            </td>
          </tr>
        </tbody>
      </table>
    )}

    {/* Categories with Products */}
    {categories.map((cat) => (
      <table key={cat.name} width="100%" cellPadding="0" cellSpacing="0" border="0" className={styles.section}>
        <tbody>
          <tr>
            <td align="center" style={{ padding: "32px 0" }}>
              <h3>{cat.name}</h3>
              <img
                src={cat.src || ""}
                alt={cat.name}
                style={{ maxWidth: "200px", display: "block", margin: "0 auto" }}
              />
              {cat.products && (
                <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ marginTop: "16px" }}>
                  <tbody>
                    <tr>
                      {cat.products.map((prod) => (
                        <td
                          key={prod.id}
                          align="center"
                          style={{
                            padding: "0 12px",
                          }}
                        >
                          {prod.image && <img src={prod.image || ""} alt={prod.id} style={{ maxWidth: "120px" }} />}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    ))}
  </NewsletterWrapper>
)

// Helper to parse inline CSS string to object
function parseInlineStyles(styleString = "") {
  return styleString.split(";").reduce((acc, rule) => {
    const [prop, value] = rule.split(":")
    if (prop && value) {
      const jsProp = prop.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase()) // kebab-case to camelCase
      acc[jsProp] = value.trim()
    }
    return acc
  }, {})
}

export default NewsletterRegular
