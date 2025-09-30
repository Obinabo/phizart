import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
//Import required components 
import { Header, HeroBanner, Inverted, Section } from '../components/HeaderFooter'
import { Doubleitems } from '../components/DoubleCont'
import { List } from '../components/List'
import { ContactForm } from '../components/ContactForm'
import { MdMarkEmailUnread } from "react-icons/md"
import { FaMobileButton, FaLocationDot } from "react-icons/fa6"
//Import bg for herobanner
import heroBg from "../assets/img/contact-bg.png";
const iconStyle = {
  // position: "absolute",
  fontSize: "1.2em",
  color: "var(--dark-green-color)",
  marginTop: "5px",
  marginRight: "5px",
  left: "0px",
  borderRadius: "50%",
}
const iconDetails = [
  {list: [<><MdMarkEmailUnread style={iconStyle}/> <Link to="mailto:phizarts@gmail.com">phizarts@gmail.com</Link></>, <><FaMobileButton style={iconStyle}/> <Link to="tel:+234 810 943 8320">+234 810 943 8320</Link></>, <><FaLocationDot style={iconStyle} />Awka, Nigeria</>]}
]
const contactDetails = [
  {title: "Do not hesitate to contact me.", text: "As a UX/UI designer with over four years of experience, I bring expertise in research, UX and UI design to solve user interface problems and create effective digital products.", extra: <List data={iconDetails}/>},
  {text:"Send a message today", extra: <ContactForm />}
]
export const Contact = () => {
  useEffect(()=>{
    document.title = "Contact Me"
  })
  return (
    <div>
      <HeroBanner bgImage={heroBg}>
        <Header />
        <Inverted />
        <div className="heading">
          <h1>Contact Me</h1>
        </div>
      </HeroBanner>
      <Section>
        <Doubleitems data={contactDetails} />
      </Section>
    </div>
  )
}
