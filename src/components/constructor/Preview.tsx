import React from "react"

type PreviewProps = {
  html?: string
  children?: React.ReactNode
}

export default function Preview({ html, children }: PreviewProps) {
  return (
    <div>
      <h2>Preview</h2>
      <div id="COPY_CONTAINER">{html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : <div>{children}</div>}</div>
    </div>
  )
}
