import React, { useState } from "react"
import Select from "./Select"
import Button from "./Button"
import "./constructor-ui.scss"

export default function Menu({ campaigns, shops, languages, templates, onChange, onPreview, onCopy, state }) {
  // Track last previewed values
  const [previewed, setPreviewed] = useState({
    campaign: "",
    shop: "",
    language: "",
    template: "",
  })

  // When Preview is clicked, update previewed state and call parent handler
  const handlePreviewClick = () => {
    setPreviewed({
      campaign: state.campaign,
      shop: state.shop,
      language: state.language,
      template: state.template,
    })
    onPreview()
  }

  return (
    <div className="constructor-menu">
      <h2>Constructor</h2>

      <label>Shop</label>
      <Select
        options={shops}
        value={state.shop}
        onChange={(e) => onChange("shop", e.target.value)}
        placeholder="Select Shop"
      />

      <label>Language</label>
      <Select
        options={languages}
        value={state.language}
        onChange={(e) => onChange("language", e.target.value)}
        placeholder="Select Language"
      />

      <label>Campaign</label>
      <Select
        options={campaigns}
        value={state.campaign}
        onChange={(e) => onChange("campaign", e.target.value)}
        placeholder="Select Campaign"
      />

      <label>Template</label>
      <Select
        options={templates}
        value={state.template}
        onChange={(e) => onChange("template", e.target.value)}
        placeholder="Select Template"
      />

      <div style={{ display: "flex", gap: 10 }}>
        <Button className="constructor-button" onClick={handlePreviewClick}>
          Preview
        </Button>

        <Button className="constructor-button" onClick={onCopy}>
          COPY HTML
        </Button>
      </div>

      <hr />
      <p className="constructor-info">Showing preview for:</p>
      <table style={{ width: "100%", fontSize: "0.95em", background: "#f9f9f9", borderRadius: 4 }}>
        <tbody>
          <tr>
            <td>
              <b>Campaign</b>
            </td>
            <td>{previewed.campaign || <span style={{ color: "#bbb" }}>-</span>}</td>
          </tr>
          <tr>
            <td>
              <b>Shop</b>
            </td>
            <td>{previewed.shop || <span style={{ color: "#bbb" }}>-</span>}</td>
          </tr>
          <tr>
            <td>
              <b>Language</b>
            </td>
            <td>{previewed.language || <span style={{ color: "#bbb" }}>-</span>}</td>
          </tr>
          <tr>
            <td>
              <b>Template</b>
            </td>
            <td>{previewed.template || <span style={{ color: "#bbb" }}>-</span>}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
