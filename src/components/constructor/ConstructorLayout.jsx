import React, { useState, useEffect } from "react"
import Menu from "./Menu"
import Preview from "./Preview"
import "./constructor-ui.scss"

export default function ConstructorLayout({
  campaigns,
  shops,
  languages,
  templates,
  getPreviewHtml,
  onCampaignChange,
  onShopChange,
  onLanguageChange,
  selectedCampaign,
  selectedShop,
  selectedLanguage,
}) {
  const [state, setState] = useState({
    campaign: selectedCampaign || "",
    shop: selectedShop || "",
    language: selectedLanguage || "",
    template: "",
    html: "",
  })

  // Keep state in sync with props (for refresh)
  useEffect(() => {
    setState((s) => ({
      ...s,
      campaign: selectedCampaign || "",
      shop: selectedShop || "",
      language: selectedLanguage || "",
    }))
  }, [selectedCampaign, selectedShop, selectedLanguage])

  // Notify parent when campaign, shop, or language changes
  useEffect(() => {
    if (onCampaignChange && state.campaign) onCampaignChange(state.campaign)
  }, [state.campaign, onCampaignChange])

  useEffect(() => {
    if (onShopChange && state.shop) onShopChange(state.shop)
  }, [state.shop, onShopChange])

  useEffect(() => {
    if (onLanguageChange && state.language) onLanguageChange(state.language)
  }, [state.language, onLanguageChange])

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
        onCopy={handleCopy}
        state={state}
      />
      <div className="constructor-preview">
        <Preview html={state.html} />
      </div>
    </div>
  )
}
