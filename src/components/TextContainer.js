import React from 'react'

export const TextContainer = ({data}) => {
  return (
    <div className="text-cont">
        {
            data.map((item, i)=>(
                <span key={i}>
                    {(item.title) && <h2>{item.title}</h2>}
                    {(item.text) && <p>{item.text}</p>}
                </span>
            ))
        }
    </div>
  )
}
