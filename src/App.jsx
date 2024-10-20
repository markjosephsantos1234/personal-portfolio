import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header */}
      <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1>
                  <span>M</span>ark Joseph <span>S</span>antos
                </h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar" />
              </div>
              <ul>
                <li>
                  <a href="#hero" data-after="Home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" data-after="Service">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" data-after="Projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about" data-after="About">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" data-after="Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Header */}
      {/* Hero Section  */}
      <section id="hero">
        <div className="hero container">
          <div>
            <h1>
              Hello, <span />
            </h1>
            <h1>
              My Name is <span />
            </h1>
            <h1>
              Mj <span />
            </h1>
            <a href="#projects" type="button" className="cta">
              Portfolio
            </a>
          </div>
        </div>
      </section>
      {/* End Hero Section  */}
      {/* Service Section */}
      <section id="services">
        <div className="services container">
          <div className="service-top">
            <h1 className="section-title">
              Sk<span>i</span>lls
            </h1>
            <p>
              I have a solid foundation in web development, specializing in HTML and CSS to create 
              responsive and user-friendly websites. I'm a strong team player with excellent 
              collaboration skills, always contributing actively and listening attentively to ensure
              smooth teamwork. My problem-solving abilities help me navigate challenges in web development, 
              and I’m quick to adapt to new tools and technologies, allowing me to thrive in dynamic environments.
            </p>
          </div>
          <div className="service-bottom">
            <div className="service-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
              </div>
              <h2>HTML & CSS</h2>
              <p>
                Proficient in developing well-structured, responsive, and visually appealing websites. 
                Skilled in creating user-friendly designs that enhance user experience across various 
                devices
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
              </div>
              <h2>Team Collaboration</h2>
              <p>
                Experienced in working within diverse teams, fostering clear communication, and utilizing 
                active listening to ensure that all members contribute effectively to shared project goals
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
              </div>
              <h2>Problem-Solving</h2>
              <p>
                Adept at identifying and resolving technical challenges in web development, using analytical 
                thinking to implement efficient solutions while minimizing disruptions to project timelines
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/services.png" />
              </div>
              <h2>Adaptability</h2>
              <p>
                Quick to learn and integrate new technologies, continuously improving skills to stay current 
                in the fast-evolving web development landscape. Flexible in meeting project demands
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}
      {/* Projects Section */}
      <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title">
              Recent <span>Projects</span>
            </h1>
          </div>
          <div className="all-projects">
            <div className="project-item">
              <div className="project-info">
                <h1>Project 1</h1>
                <h2>Personal Porfolio</h2>
                <p>
                  "Designed and developed a personal portfolio website using html and css to showcase
                  my web development skills. The site is optimized for performance
                  and includes responsive design, ensuring a seamless user experience across devices."
                </p>
              </div>
              <div className="project-img">
                <img src="./img/profile.png" alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project 2</h1>
                <h2>Coffee Shop "Moon Cafe" project</h2>
                <p>
                  "Developed the Moon Café website with a focus on responsive web design, ensuring an 
                  optimal viewing experience across all devices. The site features a clean, modern layout,
                  intuitive navigation, and adaptive elements to enhance usability on both mobile and
                  desktop platforms."
                </p>
              </div>
              <div className="project-img">
                <img src="./img/mooncafe.png" alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project 3</h1>
                <h2>Website in Responsive Web Design</h2>
                <p>
                  "Simmons is a website I created that focuses on responsive web design. This means the 
                  site looks and works great on any device, whether it's a computer, tablet, or 
                  smartphone. I used flexible layouts and images, along with CSS media queries, to make 
                  sure everything fits nicely on different screens."
                </p>
              </div>
              <div className="project-img">
                <img src="./img/simmons.png" alt="img" />
              </div>
            </div>
            {/* <div className="project-item">
              <div className="project-info">
                <h1>Project 4</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum
                  quae mollitia ut, accusantium eius odio ducimus illo neque atque
                  libero non sunt harum? Ipsum repellat animi, fugit architecto
                  voluptatum odit et!
                </p>
              </div>
              <div className="project-img">
                <img src="./img/img-1.png" alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project 5</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum
                  quae mollitia ut, accusantium eius odio ducimus illo neque atque
                  libero non sunt harum? Ipsum repellat animi, fugit architecto
                  voluptatum odit et!
                </p>
              </div>
              <div className="project-img">
                <img src="./img/img-1.png" alt="img" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* End Projects Section */}
      {/* About Section */}
      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img">
              <img src="./img/img-2.jpg" alt="img" />
            </div>
            {/* ./img/img-2.png*/}
          </div>
          <div className="col-right">
            <h1 className="section-title">
              About <span>me</span>
            </h1>
            <h2>Front End Developer</h2>
            <p>
              I’m a recent graduate from La Verdad Christian College, where I earned my degree in
              Associate in Computer Technology (ACT). I have a strong foundation in web development,
              particularly in HTML and CSS, and I’m passionate about building clean and responsive websites.
              Collaboration is one of my key strengths—I thrive in team environments and am always ready to 
              contribute with my active listening skills. I believe that working closely with others leads to the best results.
              Outside of tech, I’m a huge fan of physical activities, especially basketball, and enjoy spending
              time outdoors. Whether I’m working on a project or playing a game, I’m all about giving my best 
              effort and staying active.
            </p>
            {/* <a href="" className="cta">
              Download Resume
            </a> */}
            <a href="./img/Resume.pdf" className="cta" download>
              Download Resume
            </a>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Contact Section */}
      <section id="contact">
        <div className="contact container">
          <div>
            <h1 className="section-title">
              Contact <span>info</span>
            </h1>
          </div>
          <div className="contact-items">
            <div className="contact-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
              </div>
              <div className="contact-info">
                <h1>Phone</h1>
                <h2>+63 961 740 0585</h2>
                {/* <h2>+1 234 123 1234</h2> */}
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
              </div>
              <div className="contact-info">
                <h1>Email</h1>
                <h2>josephmark.santos1234@gmail.com</h2>
                {/* <h2>abcd@gmail.com</h2> */}
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
              </div>
              <div className="contact-info">
                <h1>Address</h1>
                <h2>Palapat, Hagonoy, Bulacan</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
      {/* Footer */}
      <section id="footer">
        <div className="footer container">
          <div className="brand">
            <h1>
              <span>M</span>ark Joseph <span>S</span>antos
            </h1>
          </div>
          <h2>Your Complete Web Solution</h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="https://www.facebook.com/">
                <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.instagram.com/">
                <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" />
              </a>
            </div>
            {/* <div className="social-item">
              <a href="#">
                <img src="https://img.icons8.com/bubbles/100/000000/twitter.png" />
              </a>
            </div> */}
            {/* <div className="social-item">
              <a href="#">
                <img src="https://img.icons8.com/bubbles/100/000000/behance.png" />
              </a>
            </div> */}
          </div>
          <p>Copyright © 2020 Santos. All rights reserved</p>
        </div>
      </section>
      {/* End Footer */}
    </>

  )
}

export default App
