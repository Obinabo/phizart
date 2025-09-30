import React, { useEffect } from 'react'
//Import required components 
import { Header, HeroBanner, Inverted, Section } from '../components/HeaderFooter'
import { TextContainer } from '../components/TextContainer'
import { MultiCont, Doubleitems, Fcss } from '../components/DoubleCont'
import portImage from '../assets/img/bg-portfolio.png'

export const Portfolio = () => {
  const portfolioHeader = [{text: "I bring a unique blend of UX and UI design skills to the table. My approach is centered on understanding your needs and those of your users, then combining the right research, UX, and UI design techniques to deliver outstanding results. Whether working on large or small projects, my focus is always on providing you with the best possible outcome."}]
    useEffect(()=>{
      document.title = "Portfolio"
  })
  return (
    <div>
      <HeroBanner bgImage={portImage}>
        <Header />
        <Inverted />
        <div className="heading">
          <h1>Portfolio</h1>
        </div>
      </HeroBanner>
      <Section>
        <TextContainer data={portfolioHeader}/>
      </Section>
    </div>
  )
}
