import React, {use, useEffect,useState}from "react";
import { ImCross } from "react-icons/im";
const Resume = () => {

let [image]=useState('/Resume.png')


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
  return (
    <div className="resume">
      <h1>Resume</h1>
      <span id="r-span"></span>
      <section className="hidden-content">
    <div style={{ fontFamily: "'Times New Roman', Times, serif", maxWidth: 800, margin: "20px auto", color: "#000" }}>
      {/* Header */}
      <h1 style={{ textAlign: "center", fontWeight: "normal" }}>
        Vivek Topale
      </h1>
      <hr style={{ borderTop: "2px solid black", margin: "0 0 15px 0" }} />

      {/* Contact Information */}
      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1.5px solid black", paddingBottom: 8, fontSize: 14 }}>
        <a href="mailto:topalevivek1206@gmail.com" style={{ color: "#0056b3", textDecoration: "none" }}>
          <span role="img" aria-label="email">✉️</span> topalevivek1206@gmail.com
        </a>
        <div><span role="img" aria-label="phone">📞</span> 7035830303</div>
        <a href="https://linkedin.com/in/vivek-topale-1754a5349" style={{ color: "#0a66c2", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="linkedin">🔗</span> vivek-topale-1754a5349
        </a>
      </div>

      {/* Summary */}
      <div style={{ borderBottom: "1.5px solid black", padding: "12px 0", fontSize: "15px" }}>
        I'm driven to leverage my technical expertise in innovative environments. Through collaboration and creativity, I aim to develop solutions that make a lasting impact. I'm excited to join a dynamic team that shares my passion for excellence and growth.
      </div>

      {/* Internship Section */}
      <section style={{ borderBottom: "1.5px solid black", paddingBottom: 12 }}>
        <h3 style={{ color: "#003366", marginBottom: 0 }}>INTERNSHIP</h3>
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
          <span>JSpiders: Java Training Institute</span>
          <span>Jan 2025 – July 2025</span>
        </div>
        <div style={{ fontWeight: "bold", marginTop: 4, marginBottom: 6 }}>Software Developer Trainee</div>
        <ul style={{ marginLeft: 20, fontSize: 14 }}>
          <li>Developed efficient, maintainable Java code for web and enterprise applications.</li>
          <li>Built backend services using Java.</li>
          <li>Gained Knowledge on OOPs concepts and ready to reduce code with the help of Collection framework.</li>
          <li>Develop efficient Knowledge on SQL CURD Operations.</li>
          <li>Gained hands-on experience in web technologies (HTML, CSS and JavaScript) and integrated Java-based backend services with front-end functionality.</li>
        </ul>
      </section>

      {/* Certificates Section */}
      <section style={{ borderBottom: "1.5px solid black", paddingBottom: 12 }}>
        <h3 style={{ color: "#003366", marginBottom: 2 }}>CERTIFICATES</h3>
        <ul style={{ marginLeft: 20, fontSize: 14 }}>
          <li>Introduction to JAVA <strong>by</strong> solo learn </li>
          <li>Webpack Encore by SymfonyCasts.</li>
          <li>TCSION Career Edge by TCS. </li>
        </ul>
      </section>

      {/* Education Section */}
      <section style={{ borderBottom: "1.5px solid black", paddingBottom: 12 }}>
        <h3 style={{ color: "#003366", marginBottom: 0 }}>EDUCATION</h3>
        <div style={{ fontSize: 14, display:"flex", justifyContent: "space-between", marginBottom: 4 }}>
          <span>Shivaji University’s Balasaheb Desai Collage, Patan</span>
          <span >Aug 2022 – July 2025</span>
        </div>
        <div style={{ fontWeight: "bold", fontSize: 15 }}>Bachelor of Computer Application - 9.3 CGPA</div>
      </section>

      {/* Projects Section */}
      <section style={{ borderBottom: "1.5px solid black", paddingBottom: 12 }}>
        <h3 style={{ color: "#003366", marginBottom: 8 }}>PROJECTS</h3>

        <div style={{ marginBottom: 10 }}>
          <strong>Jarvis AI</strong>
          <ul style={{ marginLeft: 20, fontSize: 14 }}>
            <li>A smart chatbot named Jarvis AI, designed to interact with users through both text and voice commands, capable of answering questions, processing image inputs, and generating descriptive responses.</li>
            <li>Offers features like user login/registration, voice recognition, and image description, all wrapped in a clean and responsive UI for a smooth user experience.</li>
          </ul>
        </div>

        <div style={{ marginBottom: 10 }}>
          <strong>Guest Enquiry Management System</strong>
          <ul style={{ marginLeft: 20, fontSize: 14 }}>
            <li>A web-based system designed to manage and streamline the process of guest registration, including capturing guest details, managing entries, and maintaining records in an organized manner.</li>
            <li>Includes guest data entry forms, real-time validation, record management, and a user-friendly interface for easy navigation and efficient guest handling. Technology Stack – Developed using HTML, CSS, JavaScript, Bootstrap, and Node.js, ensuring a responsive front-end design and reliable server-side data handling.</li>
          </ul>
        </div>

        <div>
          <strong>BookMyShow clone</strong>
          <ul style={{ marginLeft: 20, fontSize: 14 }}>
            <li>Created a web application replicating the functionality of a popular movie ticketing platform, showcasing skills in Front-end and back-end development.</li>
            <li>Technology Stack- HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL to design and implement a responsive and user-friendly interface, demonstrating proficiency in multiple technologies.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h3 style={{ color: "#003366", marginBottom: 8 }}>SKILLS</h3>
        <ul style={{ marginLeft: 20, fontSize: 14 }}>
          <li><strong>Languages:</strong> Core Java, SQL, C++, C, Dot Net</li>
          <li><strong>Database:</strong> MySQL.</li>
          <li><strong>Developer Tools:</strong> Visual studio Code, Eclipse, Git/Github</li>
          <li><strong>Web Technologies:</strong> HTML5, CSS3, JavaScript, React.js</li>
          <li><strong>Frameworks:</strong> Tailwind CSS, Bootstrap CSS</li>
        </ul>
      </section>
    </div>
    </section>
    <button className="R-btn" onClick={()=>{
                    document.querySelector(".display-certificate").style.display="flex";
                }}>view</button>
      <div className="display-certificate" >
                <img id="display-image" src={image} alt="img" />
                <h1 onClick={()=>{
                    document.querySelector(".display-certificate").style.display="none";
                }}><ImCross /></h1>
              </div>
    </div>
  );
};

export default Resume;
