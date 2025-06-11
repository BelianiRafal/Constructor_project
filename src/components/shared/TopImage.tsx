import React from "react"
import type { TopImage } from "../../types/TopImage"

type TopImageProps = {
  TopImage?: TopImage
  alt?: string
  style?: React.CSSProperties
}

const TopImage: React.FC<TopImageProps> = ({ TopImage, alt = "Top Image", style }) => {
  if (!TopImage?.image) return null
  if (TopImage.link) {
    return (
      <a href={TopImage.link} target="_blank" rel="noopener noreferrer">
        <img src={TopImage.image} alt={alt} style={style} />
      </a>
    )
  }
  return <img src={TopImage.image} alt={alt} style={style} />
}

export default TopImage
