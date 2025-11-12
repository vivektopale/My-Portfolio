import React ,{useState,useEffect} from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaChevronRight } from "react-icons/fa6";
function Home() {
    const texts = [
    "Welcome to my portfolio! 👋",
    "I am a web developer, Software developer.",
    "passionate about coding and creating beautiful web experiences.",
    "Let's build something amazing together!"
  ];

  const speed = 100;       // Typing speed
  const eraseSpeed = 50;   // Erasing speed
  const delay = 1000;      // Delay before erasing

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout;

    if (!isDeleting) {
      setDisplayText(currentText.substring(0, charIndex));
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      setDisplayText(currentText.substring(0, charIndex));
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(charIndex - 1), eraseSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        timeout = setTimeout(() => setCharIndex(1), speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);



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
  useIntersectionObserver('.hidden-achievements')
  useIntersectionObserver('.hidden-content')

  return (
    <div className='Home'>
        <div className="hidden-content">
          <div className="heading" id="home">
        <header>
         <h1>Vivek Topale</h1>
            <span id="typedText">{displayText}</span>
        </header>
        </div>
        </div>
       <div className="hidden-achievements">

       <div className="about" id="about">

       <div className="up">
        <h1>About Me</h1>
        <span></span>
        <p>👋 Hello! I'm Vivek Topale, A passionate <b>Java Full Stack Developer </b>
           and web enthusiast dedicated to building powerful, user-friendly applications.
          
        </p>
      </div>
      <div className="down">
        <div className="left">
          <img src="/myPic.jpg" alt=""  width="170px"/>
        </div>
        <div className="right">
            <h1>Vivek Topale</h1>
          <p>I'm a computer Application graduate with a passion for problem-solving and coding. 
            I've worked with Java fullstack web development, Forntend development with techonologies like HTML, CSS, JavaScript and created
            various projects.Also learning new technologies, and collaborating with others to create innovative solutions.
            Seeking exciting opportunities in Software developing companies.
          </p>
             <div className="pinfo">
              <p> <FaChevronRight /> <b>Email</b> : <span><a href="#">topalevivek1206@gmail.com</a></span></p>
              <p> <FaChevronRight /> <b>Degree </b>: <span>Computer Application</span></p>
              <p> <FaChevronRight /> <b>Instagram </b>: <span><a href="#">Instagram Profile</a></span></p>
              <p> <FaChevronRight /> <b>City </b>: <span>Mumbai, Maharashtra;</span></p>
              <p> <FaChevronRight /> <b>Github </b>: <span><a href="https://github.com/vivektopale">Github Reposetory</a></span></p>
              <p> <FaChevronRight /> <b>Phone </b>: <span>+91 7035830303</span></p>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home;