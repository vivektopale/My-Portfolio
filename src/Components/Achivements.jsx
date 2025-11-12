import { useEffect } from "react";


function Achivements() {
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

  useIntersectionObserver('.hidden-achievements');

  return (
    
    <section className="achievements" id="achievements">
        <h1>Achievements</h1>
        <span></span>
        <div className="s_para">
          <p>In my academic journey, I’ve earned recognition through achievements that reflect my dedication and growth. From receiving 
            the Best Coordinator Award for a coding event to consistently excelling in coursework and projects, these milestones showcase
             my leadership, problem-solving skills, and passion for learning—each contributing to my personal and professional development.</p>
        </div>
        <div className="hidden-achievements">
        <div className="achievement_con">
          <div className="ach" id="ach1"><img src="/achiv1 (2).jpg" alt="" /> <h1>First Rank In 2<sup>nd</sup> Year </h1> <p>In my 
            second year of college, I proudly secured the first rank in my class. This accomplishment reflects my dedication, consistent
             hard work, and academic excellence. It strengthened my confidence, motivated me to aim higher, and reinforced my commitment 
             to learning, growth, and making meaningful contributions in my field.</p></div>

            <div className="ach" id ="ach3"><img src="/achiv1 (1).jpg" alt="" /><h1>Best Event Organizers</h1><p>In my second year of college, I 
              collaborated with my friends to organize one of the most successful events on campus. Our teamwork, planning, and execution
               were highly appreciated, earning us recognition as the best event organizers.</p></div>

          <div className="ach" id="ach2"><img src="/achiv1 (3).jpg" alt=""  /><h1>Best Coordinator Award</h1><p>In my 
            third year of college, I co-organized a coding event with my peers, where I was honored with the Best Coordinator Award. This 
            recognition reflected my ability to lead, collaborate, and manage responsibilities effectively, while fostering a dynamic and 
            engaging environment for participants to showcase their technical skills.
          </p></div>
        </div>
        </div>
       </section>
    
  )
}

export default Achivements;