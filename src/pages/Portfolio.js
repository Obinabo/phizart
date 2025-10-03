import React, { useEffect } from 'react'
//Import required components 
import { Header, HeroBanner, Inverted, Section } from '../components/HeaderFooter'
import { TextContainer } from '../components/TextContainer'
import { Works } from '../components/Works'
import { MultiCont, Doubleitems, Fcss } from '../components/DoubleCont'
//import portfolio image background
import portImage from '../assets/img/bg-portfolio.png'

//import portfolio logos
import img1 from '../assets/img/IMG_1408.jpg'
import img2 from '../assets/img/IMG_1410.jpg'
import img3 from '../assets/img/IMG_1405.jpg'

//import portfolio print
import img4 from '../assets/img/IMG_1385.PNG'
import img5 from '../assets/img/IMG_1384.PNG'
import img6 from '../assets/img/IMG_1386.PNG'
import img7 from '../assets/img/IMG_1404.jpg'
import img8 from '../assets/img/IMG_1405.jpg'
import img9 from '../assets/img/IMG_1406.jpg'
import img10 from '../assets/img/IMG_1407.jpg'
import img11 from '../assets/img/IMG_1409.jpg'

export const Portfolio = () => {
  
const portfolioImages = [{img: img1}, {img: img2}, {img: img3}]
const bannerImages = [{img: img4}, {img: img5}, {img: img6}, {img: img7}, {img: img8}, {img: img9}, {img: img10}, {img: img11}]

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
        <TextContainer data={portfolioHeader} />
        <Fcss  h2="Logo" paragraph="Bold, memorable identities crafted to make brands stand out." />
        <Works data={portfolioImages} />

        <Fcss  h2="Flyers" paragraph="Eye-catching layouts designed to inform, promote, and inspire action." />
        <Works data={portfolioImages} />

        <Fcss  h2="Social Media Designs" paragraph="Scroll-stopping visuals tailored for engagement across all platforms." />
        <Works data={portfolioImages} />

        <Fcss  h2="Posters and Banners" paragraph="Bold, impactful designs that command attention in print and digital spaces." />
        <Works data={bannerImages} />
      </Section>

    </div>
  )
}
