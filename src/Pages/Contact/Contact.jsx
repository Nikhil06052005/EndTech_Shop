import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className='contact'>
      <form action="https://formspree.io/f/xqeygenv" method="POST">
        <input type="name" placeholder="Enter Your Name" name='username'required/>
        <input type="email" placeholder="Enter Your Email" name='email' required/>
        <textarea name='message' placeholder='Enter Your Message' required></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
