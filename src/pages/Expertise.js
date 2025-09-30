import React, { useEffect } from 'react'
//Import required components 
import { Header, HeroBanner, Inverted, Section } from '../components/HeaderFooter'
import { MultiCont, Doubleitems, Fcss } from '../components/DoubleCont'
import { List } from '../components/List'

import hardWorkImg from '../assets/img/worker.png'
import imgSkills1 from '../assets/img/skills.png'
import imgSkills2 from '../assets/img/Image+3.png'

export const Expertise = () => {
const imgSkills = [
  {img: imgSkills1},
  {img: imgSkills2}
]
const hardWork = [
  {img: hardWorkImg},
  {title: "I am hard-working, driven, detail-oriented and always looking for ways to increase the efficiency of ordinary experiences.", text: "I create beautiful designs"}
]
const skill1 = [{list: ["Low - High Fidelity Wireframes", "Prototyping", "UX Research", "UX Audit", "Heuristic Evaluation", "Competitor Analysis", "Task Analysis", "Information Architecture"]}]
const skill2 = [{list: ["Prototyping", "Design Systems", "Building Components", "Responsive Design", "Interaction and Animation", "Testing & Iteration", "Style Guides"]}]
const skill3 = [{list: ["WordPress Websites", "Google Sites ", "Photography", "Retouching", "Retouching", "Lighting Set Up", "Social Media", "Image Manipulation", "HTML", "CSS"]}]

const theSkills = [
  {subTitle: "User Experience", extra:  <List data={skill1} />},
  {subTitle: "User Interface", extra: <List data={skill2} />},
  {subTitle: "Other Skills",  extra:  <List data={skill3} />}
]
  // const extraList = [{extra: theSkills}]
  useEffect(()=>{
    document.title = "Expertise"
  })
  return (
    <div>
      <HeroBanner>
        <Header />
        <Inverted />
        <div className="heading">
          <h1>Expertise</h1>
        </div>
      </HeroBanner>
      <Section>
        <Doubleitems data={hardWork} />
        <Fcss h2="The Skills" paragraph="Continuous learning and development is crucial in the field of design and technology as it keeps you up-to-date with the latest trends and techniques, enabling you to deliver better solutions to your clients. It also opens up new opportunities and helps you stay ahead in a constantly evolving industry." />
        <MultiCont data={theSkills} />
        <Fcss h2="Software" paragraph="I have experience with experience in a multitude of different software. These include: Figma, Whimsical, Miro board, Sketch, Zeplin, Notion, Adobe Design Suite (Photoshop, XD, After Effects, Illustrator), Invision, WordPress." />
        <Doubleitems data={imgSkills} />
      </Section>
    </div>
  )
}
