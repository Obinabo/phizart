import React from 'react'

export const Works = ({data}) => {
  return (
    <div className="portfolio-cont">
          {
            data.map((item, i)=>(
              <div key={i}>
                <div className="portfolio" data-aos="fade-up">
                  {(item.text) && <p>{item.text}</p>}
                </div>
                {(item.img) && <img src={item.img} />}
              </div>
            ))
          } 
    </div>
  )
}
