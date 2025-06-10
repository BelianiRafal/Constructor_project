import React from "react"

export default function Button({ children, ...props }) {
  return (
    <button
      style={{
        padding: "8px 16px",
        background: "#e67e22",
        color: "#fff",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  )
}
