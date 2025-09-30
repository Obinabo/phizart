import React, { useEffect } from 'react'
//Import animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'
const iconStyle = {
    fontSize: "2.5em",
    color: "var(--white-color)",
    margin: "5px auto",
    padding: "7px",
    textAlign: "center",
    //clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)"
  }
export const MultiCont = ({data}) =>{
    useEffect(()=>{
        AOS.init({
        duration: 1000,
        easing: 'ease-in-out-sine'
        })
    }, [])
return (
    <div className="stat-cont">
        {data.map((item, i) => (
            <div key={i} className="stat" data-aos="fade-up">
                {(item.icon) && <span style={iconStyle}>{item.icon}</span>}
                <span style={{color: item.color || "inherit", textAlign: item.align || "inherit"}}>{(item.title) &&<h2>{item.title}</h2>}</span>
                <span style={{color: item.color || "inherit", textAlign: item.align || "inherit"}}>{(item.subTitle) && <h4>{item.subTitle}</h4>}</span>
                <span style={{color: item.color || "inherit", textAlign: item.align || "inherit"}}>{(item.text) && <p>{item.text}</p>}</span>
                <span style={{color: item.color || "inherit", textAlign: item.align || "inherit"}}>{(item.extra) && <p>{item.extra}</p>}</span>
            </div>
        ))
        }
    </div>
)}

export const Doubleitems = ({data}) =>{
    useEffect(()=>{
        AOS.init({
        duration: 1000,
        easing: 'ease-in-out-sine'
        })
    }, [])
return (
    <div className="double-cont">
        {data.map((item, i) => (
            <div key={i} className="item">
                {(item.img) && <img src={item.img} data-aos="fade-up"/>}
                <span style={{color: item.color || "inherit"}}>{(item.title) && <h2 data-aos="fade-up">{item.title}</h2>}</span>
                <span style={{color: item.color || "inherit"}}>{(item.text) && <p data-aos="fade-up">{item.text}</p>}</span>
                <span style={{color: item.color || "inherit"}}>{(item.extra) && <p data-aos="fade-up">{item.extra}</p>}</span>
                
            </div>
        ))
        }
    </div>
)}

export const Fcss = ({h2, paragraph, extra, color}) =>{
    useEffect(()=>{
        AOS.init({
        duration: 1000,
        easing: 'ease-in-out-sine'
        })
    }, [])
return (
    <div className="fcss-cont">
        <div className="fcss">
            <span style={{color: color || "inherit"}}>{(h2) && <h2 data-aos="fade-up">{h2}</h2>}</span>
            <span style={{color: color || "inherit", whiteSpace: "pre-line"}}>{(paragraph) && <p data-aos="fade-up">{paragraph}</p>}</span>
        </div>
        {//Extra can take buttons or image attachment
            (extra) && <p data-aos="fade-up">{extra}</p>
        }
    </div>
)}
