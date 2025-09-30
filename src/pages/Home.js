import React from 'react'

//Import custom components
import { Header, HeroBanner, Inverted } from '../components/HeaderFooter'
import { Slider, TestSlider } from '../components/Slider'
import { Section } from '../components/HeaderFooter'
import { Button } from '../components/Button'
import { MultiCont, Doubleitems, Fcss} from '../components/DoubleCont'
import { SiMaterialdesignicons } from "react-icons/si"
import { SiVorondesign } from "react-icons/si"
import { MdOutlineDesignServices } from 'react-icons/md'
import { List } from '../components/List'

//Import component pictures
import img1 from '../assets/img/design3.png'
import img2 from '../assets/img/uiux.png'
import img3 from '../assets/img/Group+3666.png'
import skillsImg from '../assets/img/IMG_1408.jpg'

//Import for portfolio pictures in a slider
import testImg1 from '../assets/img/IMG_1381.JPG'
import testImg2 from '../assets/img/IMG_1386.PNG'
import testImg3 from '../assets/img/IMG_1385.PNG'
import testImg4 from '../assets/img/IMG_1384.PNG'
import testImg5 from '../assets/img/IMG_1378.PNG'
import testImg6 from '../assets/img/IMG_1407.jpg'
import testImg7 from '../assets/img/IMG_1409.jpg'
import testImg8 from '../assets/img/IMG_1410.jpg'
import testImg9 from '../assets/img/IMG_1404.jpg'

const testImageArray = [testImg1, testImg2,testImg3, testImg4, testImg5, testImg6, testImg7, testImg8, testImg9]

export const Home = () => {
  const bg = "var(--dark-green-color)"
  const tripleService = [
    {title: "800+", text: "Design Projects", align: "center"},
    {title: "1500+", text: "Delivered Frames", align: "center"},
    {title: "200+", text: "Customer Referrals", align: "center"},
    {title: "400+", text: "Satisfied Clients", align: "center"}
  ]

  const iconService = [
    {subTitle: "Creative Excellence", text: "Every project is fuelled by originally and passion, ensuring designs that are not only visually stunning but also impactful.", icon: <SiMaterialdesignicons />,  color: "var(--white-color)"},
    {subTitle: "User-Centered Design", text: "With strong expertise in UI/UX, I prioritize seamless and engaging experiences that put your audience at the heart of every design.", icon: <SiVorondesign />, color: "var(--white-color)"},
    {subTitle: "Versatility Across Mediums", text: "From graphic design to digital interfaces and handcrafted picture frames, Phizarts offers a rare blend of both digital and physical artistry.", icon: <MdOutlineDesignServices />, color: "var(--white-color)"}
  ]

  const designProcess = [
    {title: "01", subTitle: "Discover and Strategize", text: "Every great design begins with understanding. I take time to learn about your brand, goals, audience, and vision"},
    {title: "02", subTitle: "Design and Develop", text: "With strategy in place, I bring ideas to life. From concept sketches to polished designs, I blend creativity with precision, ensuring every element reflects your brand's identity."},
    {title: "03", subTitle: "Refine and Deliver",text: "I value collaboration and feedback. Together, I refine the work to perfection, ensuring it meets your expectations and resonates with your ausience."}
  ]

  const doubleItem = [
    {title: "Graphic Design", text: "I specialize in bringing bold ideas to life through eye-catching graphics. From digital illustrations to visual storytelling, I craft designs that capture attention, communicate meaning, and leave a lasting impression.", img: img1, color: "var(--white-color)"},
    {title: "UI / UX Experience Design", text: "My passion for UI/UX is about creating digital experiences that are not only beautiful but also intuitive. I focus on clean layouts, smooth user journeys, and modern interfaces that make interacting with products effortless and enjoyable.", img: img2, color: "var(--white-color)"}
  ]

  const doubleItem2 = [
    {img: img3},
    {title: "I face every challenge head-on and with creativity", text: "As a hybrid UX/UI and graphic designer with over five years of experience, I excel in designing and resolving user interface challenges by incorporating the ideal techniques, skills, and methods in UX research and design. My approach emphasizes not only the visual aspect of a product but also its functionalities."}
  ]
  const skillList = [
    {list: ["Graphic Designer", "Content Photographer", "User Experience Designer", "User Interface Designer", "Wall Frame Designer"]}
  ]
  const skills = [
    {img: skillsImg},
    {
      title: "I have the skills for all types of projects.", 
      text: "I utilize design thinking in my projects to guide the creation of products and services that are centered around the needs of the users.",
      extra: <List data={skillList} /> 
    }
  ]
  
  return(
  <>
    <HeroBanner>
      <Header />
      <Inverted />
    </HeroBanner>
    <Slider />
    <Section>
      <MultiCont data={tripleService} />
    </Section>
    <Section bgColor={bg}>
      <Fcss 
        h2="About Phizarts" 
        paragraph="For me, design is not just a profession, it’s an endless journey of learning, experimenting, and creating. Every project is an opportunity to blend beauty with meaning and deliver designs that truly make an impact." 
        extra = {<Button text="Learn More" btnclass="point-button" to="/about"/>}
        color = "var(--white-color)"
      />
      <Doubleitems data={doubleItem}/>
      <br />
      <MultiCont data={iconService} />
    </Section>
    <Section>
      <Doubleitems data={doubleItem2}/>
      <Fcss 
        h2="Project Portfolio" 
        paragraph="Projects that focus on Graphic design, photography, User interface design and User experience design." 
        extra = {<Button text="Open Portfolio" btnclass="click-button" to="/portfolio"/>}
      />
      <TestSlider images={testImageArray} />
      <Fcss 
        h2="My Design Process..." 
        paragraph={"I break down a large project into \n manageable chunks. This is how:"}
      />
      <MultiCont data={designProcess} />
      <Doubleitems data={skills}/>
      
    </Section>
  </>
  )
}
