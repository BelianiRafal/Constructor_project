import React from "react"
import Select from "./Select"
import Button from "./Button"
import "./constructor-ui.scss"

export default function Menu({ campaigns, shops, languages, templates, onChange, onPreview }) {
  return (
    <div className="constructor-menu">
      <h2>Constructor</h2>
      <label>Campaign</label>
      <Select options={campaigns} onChange={(e) => onChange("campaign", e.target.value)} />
      <label>Shop</label>
      <Select options={shops} onChange={(e) => onChange("shop", e.target.value)} />
      <label>Language</label>
      <Select options={languages} onChange={(e) => onChange("language", e.target.value)} />
      <label>Template</label>
      <Select options={templates} onChange={(e) => onChange("template", e.target.value)} />
      <Button style={{ marginTop: 24 }} onClick={onPreview}>
        Preview
      </Button>
    </div>
  )
}
