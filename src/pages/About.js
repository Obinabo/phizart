import React from 'react'
//Import Components 
import { Header, HeroBanner, Inverted, Section } from '../components/HeaderFooter'
import { TextContainer } from '../components/TextContainer'

//Import bg for herobanner
import heroBg from "../assets/img/about-bg.png";

import portrait from "../assets/img/phizzy2.1.png";
import cv from "../assets/img/phone-holding.jpg";
import { Doubleitems } from '../components/DoubleCont';

const intro = [
  {title: "A multifaceted creative with a single-minded purpose: solving challenges through creativity.", text: "I am a motivated, competitive, and enthusiastic individual with strong interpersonal skills and a continuous desire to learn and grow in my field."},
  {img: portrait}
]
const whoAmI = [
  {img: cv},
  {title: "Who am I?",
    text: "I’m Martin Ebubechukwu Chigbo, a Graphic Designer, Photography Editor, Wall Frames Art Designer and Hybrid UX/UI Designer. As a user-centric designer, I am dedicated to creating and improving products that prioritize the needs of the user. With a passion for user-centered product and service innovation, I am driven to solve complex problems and design interfaces that are both functional and visually appealing. My curious nature and love for connecting with people allow me to have a deep understanding of the user's experience."
  }
]
const myPassion = [
  {title: "My passion", text: "As a UX/UI designer, my passion is in creating products that are not only visually appealing but also serve their intended purpose through a combination of aesthetics and functionality. I prioritize collaboration by engaging with all stakeholders and team members to gather diverse perspectives and implement them into my designs."}
]

export const About = () => {
  return (
    <>
      <HeroBanner bgImage={heroBg}>
        <Header />
        <Inverted />
        <div className="heading">
          <h1>About Phizarts</h1>
        </div>
      </HeroBanner>
      <Section>     
        <Doubleitems data={intro} />
        <Doubleitems data={whoAmI} />
        <TextContainer data={myPassion} />
      </Section>
    </>
  )
}
