import React, {useState} from 'react'
import { Button } from '../components/Button'
export const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    const handleInput = (e) => {
      const {name, value} = e.target
      setFormData((prev)=>
        (
          {...prev, [name]: value}
        )
      )} 

  return (
    <div className="contact-form">
        <form>
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInput} />
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInput} />
            <label>Subject</label>
            <input type="email" name="subject" value={formData.subject} onChange={handleInput} />
            <label>Message</label>
            <textarea type="email" name="message" value={formData.message} onChange={handleInput}></textarea>
            <button type="submit" className="click-button" style={{marginTop: "15px"}}>Submit</button>
        </form>
    </div>
  ) 
}
