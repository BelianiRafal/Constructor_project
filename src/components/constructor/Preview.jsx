import React from "react"

export default function Preview({ html }) {
  return (
    <div>
      <h2>Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
