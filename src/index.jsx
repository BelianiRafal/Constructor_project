import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import ConstructorLayout from "./components/constructor/ConstructorLayout"
import "./styles.scss"
import shopsData from "./data/shops.json"
import { useSyncedState } from "./hooks/useSyncedState"

function App() {
  const [campaigns, setCampaigns] = useState([])
  const [templates, setTemplates] = useState([])
  const [selectedCampaign, setSelectedCampaign] = useSyncedState("selectedCampaign", "")
  const [shops, setShops] = useState([])
  const [selectedShop, setSelectedShop] = useSyncedState("selectedShop", "")
  const [languages, setLanguages] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useSyncedState("selectedLanguage", "")

  useEffect(() => {
    import(`./campaigns/${selectedCampaign}.js`)
      .then((mod) => {
        setCampaigns(mod.campaigns || [])
        setTemplates(mod.templates || [])
      })
      .catch(() => {
        setCampaigns([])
        setTemplates([])
      })
  }, [selectedCampaign])

  useEffect(() => {
    const shopOptions = Object.entries(shopsData).map(([slug, shop]) => ({
      value: slug,
      label: shop.seller || slug,
    }))
    setShops(shopOptions)
    if (shopOptions.length > 0 && !selectedShop) setSelectedShop(shopOptions[0].value)
  }, [])

  useEffect(() => {
    if (selectedShop && shopsData[selectedShop]) {
      const langs = shopsData[selectedShop].languages.map((lang) => ({
        value: lang.slug,
        label: lang.name,
      }))
      setLanguages(langs)
      if (!langs.find((l) => l.value === selectedLanguage)) {
        setSelectedLanguage("")
      }
    } else {
      setLanguages([])
      setSelectedLanguage("")
    }
  }, [selectedShop])

  const getPreviewHtml = (state) =>
    `<div>
      <p>Campaign: ${state.campaign}</p>
      <p>Shop: ${state.shop}</p>
      <p>Language: ${state.language}</p>
      <p>Template: ${state.template}</p>
    </div>`

  return (
    <ConstructorLayout
      campaigns={campaigns}
      shops={shops}
      languages={languages}
      templates={templates}
      getPreviewHtml={getPreviewHtml}
      onCampaignChange={setSelectedCampaign}
      onShopChange={setSelectedShop}
      onLanguageChange={setSelectedLanguage}
      selectedCampaign={selectedCampaign}
      selectedShop={selectedShop}
      selectedLanguage={selectedLanguage}
    />
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)
