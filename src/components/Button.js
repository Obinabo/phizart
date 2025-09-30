import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Button = ({text, btnclass, to}) => {
    const navigate = useNavigate()
     const handleClick = () => {
        if(to){
            navigate(to)
        }
     }
  return (
    <button onClick={handleClick} className={btnclass}>
        {text}
    </button>
  )
}
