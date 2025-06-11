import React from "react"
import styles from "../newsletter/regular.module.scss"
import TopImage from "../../../components/shared/TopImage"

const LandingPageRegular = ({ TopImageTitle, topImageData, Intro, categories = [] }) => (
  <>
    TIT1: {TopImageTitle.text.line1}
    <br />
    TIT2: {TopImageTitle.text.line2}
    <br />
    Intro: {Intro}
    <TopImage TopImage={topImageData} />
    Categories:
    {categories.map((cat) => (
      <div key={cat.name}>
        <h3>{cat.name}</h3>
        <img src={cat.image} alt={cat.name} />
        {cat.products && (
          <div>
            {cat.products.map((prod) => (
              <div key={prod.id}>
                <img src={prod.image} alt={prod.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </>
)

export default LandingPageRegular
