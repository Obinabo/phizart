import React, {useState} from 'react'
import axios from "axios"
//import { Button } from '../components/Button'
export const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    const [error, setError] = useState("")
    const handleInput = (e) => {
      //const {name, value} = e.target
      setFormData(
        {...formData, [e.target.name]: e.target.value}
        // (
        //   {...prev, [name]: value}
        // )
      )} 

      const handleSubmit = async(e) => {
        try{
          const res = await axios.post("http://localhost:4000/api/contact", formData)
          
        }catch(err){
          setError(err.response?.error || "Login Failed")
        }
      }
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
