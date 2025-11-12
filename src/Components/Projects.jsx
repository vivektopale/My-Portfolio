import React,{useEffect} from 'react'

function Projects() {

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
    <>
    <section className="project" id="projects">
        <h1>Projects</h1>
        <span>.</span>
        <div className="pro_para">
         Some of my works here talks itself about my quality of work. Hope it'll give you a better understanding of my services.
          I have hands-on experience in building responsive and visually appealing websites. My work emphasizes clean design, and user-centric interfaces.
          I can create websites from scratch like a pro.
        </div>
      <div className='hidden-content'>
        <div className="pro_container">
          <div className="p_con">
            <div className="head">
              <h2>Jarvis AI Chat Bot</h2>
            </div>
            <div className="btn">
              <a href="https://github.com/vivektopale/Jarvis-AI">View Project</a>
            </div>
          </div>
          
          <div className="p_con">
            <div className="head">
              <h2>Counselor Portal</h2>
            </div>
            <div className="btn">
              <a href="https://github.com/vivektopale/Counselor_Portal">View Project</a>
            </div>
            </div>

          <div className="p_con"><div className="head">
              <h2>Ecommerce Website</h2>
            </div>
            <div className="btn">
              <a href="https://github.com/vivektopale/E-commerce-Application-">View Project</a>
            </div></div>
          <div className="p_con"><div className="head">
              <h2>Online Food Ordering System</h2>
            </div>
            <div className="btn">
              <a href="https://github.com/vivektopale/Food-Ordering-System">View Project</a>
            </div></div>
          <div className="p_con"><div className="head">
              <h2>Library Management System</h2>
            </div>
            <div className="btn">
              <a href="https://github.com/vivektopale/Library_Mgt_System">View Project</a>
            </div></div>

            <div className="p_con">
            <div className="head">
              <h2>JavaScript Projects</h2>
            </div>
            <div className="btn">
              <a href="https://github.com/vivektopale/My-JS-Projects">View Project</a>
            </div>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Projects