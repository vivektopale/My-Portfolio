import React, { useState, useEffect } from 'react'
import { ImCross } from "react-icons/im";
function Skills() {

    let[image,setImage]=useState("/cer1.png");
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
      <section className="skills" id="skills">
        <h1>Skills</h1>
        <span>..</span>
        <div className="s_para">
          <p>Here's some set of skills of my work basis. I stay updated with tools and methods perfectly. 
            My skill set spans across multiple domains in technology, enabling me to adapt quickly and
            contribute meaningfully to diverse projects. I’ve gained hands-on experience through coursework,
             certifications, and practical applications, and I’m always eager to explore new tools and frameworks.<br />
           </p>
        </div>
        <div className="hidden-content">
         <div className="skill_con">
          <div className="sec">
           <div className="sub_sec">
              <div className="s1">
               <span>HTML</span>
                <span>100%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar1"></div>
              </div>
           </div>

           <div className="sub_sec">
              <div className="s1">
               <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar2"></div>
              </div>
           </div>
           <div className="sub_sec">
              <div className="s1">
               <span>JAVASCRIPT</span>
                <span>75%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar3"></div>
              </div>
           </div>
           <div className="sub_sec">
              <div className="s1">
               <span>React JS</span>
                <span>95%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar10"></div>
              </div>
           </div>
            <div className="sub_sec">
              <div className="s1">
               <span>GIT/GITHUB</span>
                <span>70%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar9"></div>
              </div>
           </div>
          
          </div>

         
          <div className="sec">
             <div className="sub_sec">
              <div className="s1">
               <span>CORE JAVA</span>
                <span>85%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar4"></div>
              </div>
           </div>
           
           <div className="sub_sec">
              <div className="s1">
               <span>C++</span>
                <span>60%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar5"></div>
              </div>
           </div>
           <div className="sub_sec">
              <div className="s1">
                <span>DOT NET</span>
                <span>40%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar6"></div>
              </div>
           </div>
                      <div className="sub_sec">
              <div className="s1">
               <span>SQL</span>
                <span>80%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar7"></div>
              </div>
           </div>
           <div className="sub_sec">
              <div className="s1">
               <span>MYSQL</span>
                <span>75%</span>
              </div>
              <div className="s2">
                <div className="s2_1" id="bar8"></div>
              </div>
           </div>
          
          </div>
            </div>
      

        <h1 id="crt">Certificates</h1>
        <span id="sp">..</span>
        <div className="s_para">
          <p>Here are some of the certificates I’ve earned through various courses and by exploring new technologies.</p>
        </div>

           <div className="certificat_con">
          <div className="cr" id="cr1"><img src="/cer1.png" alt="" />
          <button onClick={()=>{
            document.querySelector(".display-certificate").style.display="flex";
            setImage('/cer1.png')
            
          }}>check out</button>
          </div>

          <div className="cr" id="cr2"><img src="/cer2.png" alt="" />
          <button onClick={()=>{
            document.querySelector(".display-certificate").style.display="flex";
            setImage('/cer2.png')
            
          }}>check out</button></div>
          <div className="cr" id ="cr3"><img src="/cer3.png" alt="" />
          <button onClick={()=>{
            document.querySelector(".display-certificate").style.display="flex";
            setImage('/cer3.png')
            
          }}>check out</button>
          </div>
         </div>
          
        
       </div>

       <div className="display-certificate" >
            <img id="display-image" src={image} alt="img" />
            <h1 onClick={()=>{
                document.querySelector(".display-certificate").style.display="none";
            }}><ImCross /></h1>
          </div>
      </section>
  )
}

export default Skills