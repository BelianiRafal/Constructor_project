/// <reference types="vite/client" />

import React, { useState, useEffect, useCallback } from "react"
import { createRoot } from "react-dom/client"
import ConstructorLayout from "./components/constructor/ConstructorLayout"
import shopsData from "./data/shops.json"
import "./styles.scss"
import ReactDOMServer from "react-dom/server"
import logger from "./utilities/logger"

function App() {
  const [campaignsList, setCampaignsList] = useState<any[]>([])
  const [selectedCampaign, setSelectedCampaign] = useState<any | null>(null)
  const [templates, setTemplates] = useState<any[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null)
  const [shops, setShops] = useState<{ value: string; label: string }[]>([])
  const [selectedShop, setSelectedShop] = useState("")
  const [languages, setLanguages] = useState<{ value: string; label: string }[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState("")

  // Load campaigns and shops on mount
  useEffect(() => {
    // Load campaigns
    const modules = import.meta.glob("./campaigns/*.{ts,tsx,js,jsx}")
    Promise.all(Object.values(modules).map((importFn: any) => importFn())).then((mods) => {
      const campaigns = mods.map((mod) => mod.default).filter((c) => c && !c.disabled)
      setCampaignsList(campaigns)
      if (campaigns.length > 0) setSelectedCampaign(campaigns[0])
      logger.debug("Loaded campaigns", { table: campaigns })
    })

    // Load shops
    const shopOptions = Object.entries(shopsData).map(([slug, shop]: any) => ({
      value: slug,
      label: shop.seller || slug,
    }))
    setShops(shopOptions)
    if (shopOptions.length > 0) setSelectedShop(shopOptions[0].value)
  }, [])

  // Update templates and selectedTemplate when campaign changes
  useEffect(() => {
    if (selectedCampaign) {
      setTemplates(selectedCampaign.templates || [])
      setSelectedTemplate(selectedCampaign.templates?.[0] || null)
      logger.debug("Selected campaign changed", selectedCampaign)
      logger.debug("Templates for campaign", { table: selectedCampaign.templates || [] })
    }
  }, [selectedCampaign])

  // Update languages when shop changes
  useEffect(() => {
    if (selectedShop && shopsData[selectedShop]) {
      const langs = shopsData[selectedShop].languages.map((lang: any) => ({
        value: lang.slug,
        label: lang.name,
      }))
      setLanguages(langs)
      if (!langs.find((l: any) => l.value === selectedLanguage)) {
        setSelectedLanguage(langs[0]?.value || "")
      }
    } else {
      setLanguages([])
      setSelectedLanguage("")
    }
  }, [selectedShop, selectedLanguage])

  // Log template change
  useEffect(() => {
    logger.debug("Selected template changed", selectedTemplate)
  }, [selectedTemplate])

  // Handlers
  const handleTemplateChange = useCallback(
    (name: string) => {
      logger.debug("Template selected from menu", name)
      const found = templates.find((t: any) => t.name === name)
      if (found) setSelectedTemplate(found)
    },
    [templates]
  )

  const handleCampaignChange = useCallback(
    (name: string) => {
      const found = campaignsList.find((c) => c.name === name)
      if (found) setSelectedCampaign(found)
    },
    [campaignsList]
  )

  const getPreviewHtml = useCallback(() => {
    logger.debug("Rendering preview HTML", {
      selectedCampaign,
      selectedTemplate,
    })
    if (!selectedCampaign || !selectedTemplate) return ""
    const TemplateComponent = selectedTemplate.use
    if (!TemplateComponent) return ""

    let html = ReactDOMServer.renderToStaticMarkup(
      <TemplateComponent
        TopImageTitle={selectedCampaign.TopImageTitle}
        TopImage={selectedCampaign.links?.TopImage}
        Intro={selectedCampaign.Intro}
        categories={selectedCampaign.categories}
      />
    )

    // Remove react-inline-css wrapper if present
    html = html.replace(
      /^<div id="InlineCss-\d+"><div class="newsletter-bg">([\s\S]*?)<\/div><style[\s\S]*?<\/style><\/div>$/i,
      "$1"
    )

    return html
  }, [selectedCampaign, selectedTemplate])

  return (
    <ConstructorLayout
      campaigns={campaignsList.map((c) => ({ value: c.name, label: c.name }))}
      shops={shops}
      languages={languages}
      templates={templates.map((t: any) => ({ value: t.name, label: t.name }))}
      getPreviewHtml={getPreviewHtml}
      onCampaignChange={handleCampaignChange}
      onTemplateChange={handleTemplateChange}
      onShopChange={setSelectedShop}
      onLanguageChange={setSelectedLanguage}
      selectedCampaign={selectedCampaign?.name || ""}
      selectedShop={selectedShop}
      selectedLanguage={selectedLanguage}
    />
  )
}

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  )
}
