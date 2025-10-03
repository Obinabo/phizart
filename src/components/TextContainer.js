import React from 'react'

export const TextContainer = ({data, children}) => {
  return (
    <div className="text-cont">
        {(data) &&
            data.map((item, i)=>(
                <span key={i}>
                    {(item.title) && <h2>{item.title}</h2>}
                    {(item.text) && <p>{item.text}</p>}
                </span>
            ))
        }
        {children}
    </div>
  )
}
