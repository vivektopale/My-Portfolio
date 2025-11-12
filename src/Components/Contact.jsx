import React, { useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() {

useEffect(()=>{
  emailjs.init({
        publicKey: "WlSylQEhItxjaR8SC",
      });
},[]);

const useIntersectionObserver = (selector) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector]);
};
useIntersectionObserver('.hidden-content')

let handleSubmit=(e)=>{
  e.preventDefault();

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_60v1a9g", "template_jey41sm", parms)
    .then(alert("Email sent😊"));
  console.log(name, email, message);
  e.target.reset();
}
  return (
   
    <section className="contact" id="contact">
        <h1>Contact Me</h1>
        <span>.</span>
        <div className="s_para">
          <p>If you'd like to get in touch, feel free to reach out via email or connect with me on social media!</p>
        </div>
         <div className="hidden-content">
        <div className="contact_con">
          <aside className="c_left">
           <div className="contact_item1">
            <h1><span><FaLocationDot/></span>Location:</h1>
            <p>Mumbai, Maharashtra</p>
            <h1><span><MdEmail /></span>Email:</h1>
            <p><a href="#">topalevivek1206@gmail.com</a></p>
            <h1><span><FaPhoneAlt/></span>Call:</h1>
            <p>+91 7035830303</p>
           </div>
           <div className="contact_item2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.678486581002!2d72.85064579748483
            !3d19.133100663329348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b76f3de9b%3A0x1e1d1cd27f00b1
            f8!2sJogeshwari%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1754834293608!5m2!1sen!2sin" width="100%" 
            height="300px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
           </div>
          </aside>
          <aside className="c_right">
            
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows="10"  cols="50" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </aside>
         </div>
          
        </div>
      </section>
      
  )
}

export default Contact;