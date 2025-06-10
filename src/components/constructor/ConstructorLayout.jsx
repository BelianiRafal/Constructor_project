import React, { useState } from "react"
import Menu from "./Menu"
import Preview from "./Preview"
import "./constructor-ui.scss"

export default function ConstructorLayout({ campaigns, shops, languages, templates, getPreviewHtml }) {
  const [state, setState] = useState({
    campaign: "",
    shop: "",
    language: "",
    template: "",
    html: "",
  })

  const handleChange = (field, value) => setState((s) => ({ ...s, [field]: value }))
  const handlePreview = () => setState((s) => ({ ...s, html: getPreviewHtml(s) }))
  const handleCopy = () => {
    if (state.html) {
      navigator.clipboard.writeText(state.html)
    }
  }

  return (
    <div className="constructor-layout">
      <Menu
        campaigns={campaigns}
        shops={shops}
        languages={languages}
        templates={templates}
        onChange={handleChange}
        onPreview={handlePreview}
      />
      <div className="constructor-preview">
        <Preview html={state.html} onCopy={handleCopy} />
      </div>
    </div>
  )
}
