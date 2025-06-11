import React from "react"
import "./constructor-ui.scss"

export default function Select({ options = [], placeholder = "Select...", ...props }) {
  return (
    <select className="constructor-select" {...props}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt, idx) => (
        <option key={opt.value ?? idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
