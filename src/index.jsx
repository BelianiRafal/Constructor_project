import React from "react"
import { createRoot } from "react-dom/client"
import ConstructorLayout from "./components/constructor/ConstructorLayout"
import "./styles.scss"

// Dummy data and preview function for demonstration
const campaigns = [
  { value: "spring", label: "Spring Sale" },
  { value: "summer", label: "Summer Sale" },
]
const shops = [
  { value: "us", label: "US Shop" },
  { value: "de", label: "DE Shop" },
]
const languages = [
  { value: "en", label: "English" },
  { value: "de", label: "German" },
]
const templates = [
  { value: "lp", label: "Landing Page" },
  { value: "nslt", label: "Newsletter" },
]
const getPreviewHtml = (state) =>
  `<div>
    <p>Campaign: ${state.campaign}</p>
    <p>Shop: ${state.shop}</p>
    <p>Language: ${state.language}</p>
    <p>Template: ${state.template}</p>
  </div>`

function App() {
  return (
    <ConstructorLayout
      campaigns={campaigns}
      shops={shops}
      languages={languages}
      templates={templates}
      getPreviewHtml={getPreviewHtml}
    />
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)
