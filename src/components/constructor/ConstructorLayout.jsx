import React, { useState, useEffect } from "react"
import Menu from "./Menu"
import Preview from "./Preview"
import "./constructor-ui.scss"
import logger from "../../utilities/logger"

export default function ConstructorLayout({
  campaigns,
  shops,
  languages,
  templates,
  getPreviewHtml,
  onCampaignChange,
  onTemplateChange, // <-- add this line
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

  const handleChange = (field, value) => {
    logger.debug("Menu changed", { field, value })
    setState((s) => ({ ...s, [field]: value }))
    if (field === "template" && onTemplateChange) {
      onTemplateChange(value)
    }
  }

  const handlePreview = () => {
    logger.debug("Preview button clicked")
    setState((s) => ({ ...s, html: getPreviewHtml(s) }))
  }

  const handleCopy = () => {
    logger.debug("Copy HTML button clicked", state.html)
    if (state.html) {
      // Extract content inside COPY_CONTAINER
      const match = state.html.match(/<div id="COPY_CONTAINER"[^>]*>([\s\S]*?)<\/div>/i)
      const htmlToCopy = match ? match[1] : state.html
      navigator.clipboard.writeText(htmlToCopy)
    }
  }

  useEffect(() => {
    logger.debug("Rendering preview in ConstructorLayout", state.template)
  }, [state.template])

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
