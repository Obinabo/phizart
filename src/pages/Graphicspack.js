import React, { useEffect } from 'react'
//Import required components 
import { Header, HeroBanner, Inverted, Section } from '../components/HeaderFooter'
import { Button } from '../components/Button'
import { TextContainer } from '../components/TextContainer'
import { Doubleitems } from '../components/DoubleCont'
import gpImage from '../assets/img/bg-graphicspack.png'
import img1 from '../assets/img/IMG_1374.jpg'

export const Graphicspack = () => {
  const doubleItem = [
    {img: img1},
    {title: "Phizarts Graphics Pack", text: "Imagine having a full design studio right on your computer. No more spending hours searching for free templates, outdated resources, or low-quality assets. With the Graphics Pack, you get a single, reliable source for everything you need to create, experiment, and deliver professional-grade designs.", color: "var(--white-color)", extra: <Button text="Get the pack" to="/contact" btnclass="point-button"/>}
  ]
  const gPackHeader = [{text: "The Graphics Pack is available for designers, students, creatives and agencies looking to level up their design work. Every resource inside is crafted to meet professional standards while staying beginner-friendly. Reach out to get yours and start creating with confidence."}]
  useEffect(()=>{
    document.title = "Phizarts Graphics Pack"
  })
  return (
    <div>
      <HeroBanner bgImage={gpImage}>
        <Header />
        <Inverted />
        <div className="heading">
          <h1>Graphics Pack</h1>
        </div>
      </HeroBanner>
      <Section>
        <TextContainer data={gPackHeader} />
      </Section>
      <Section bgColor="var(--light-bg)">
         <Doubleitems data={doubleItem} />
      </Section>
    </div>
  )
}
