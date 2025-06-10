import React from "react"
import "./constructor-ui.scss"

export default function Select({ options = [], placeholder = "Select...", ...props }) {
  return (
    <select className="constructor-select" {...props}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
