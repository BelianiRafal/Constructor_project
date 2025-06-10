import React from "react"

export default function Preview({ html, onCopy }) {
  return (
    <div>
      <button className="constructor-button" style={{ float: "right" }} onClick={onCopy}>
        COPY HTML
      </button>
      <h2>Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
