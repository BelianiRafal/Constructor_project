import React from "react"
import "./constructor-ui.scss"

export default function Select({ options = [], ...props }) {
  return (
    <select className="constructor-select" {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
