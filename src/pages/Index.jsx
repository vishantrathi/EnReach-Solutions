import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
// import cyberVideo from "../assets/854322-hd_1280_720_25fps.mp4";

const services = [
  {
    title: "Audio Video Analysis",
    text: "Audio and video are digital sources of evidence that can be found at the scene of a crime or with the victim or the accused.",
  },
  {
    title: "Cloud Forensics",
    text: "Cloud forensics allows users to conveniently access fully featured applications and development environments for forensic analysis.",
  },
  {
    title: "Computer / MAC Forensic",
    text: "Computer forensics is a scientific method of investigation and examination to gather evidence from digital devices or computer networks.",
  },
  {
    title: "Cyber Fraud Investigation",
    text: "Cybercrime refers to crimes committed using the internet or other types of computer networks, including hacking, identity theft, and more.",
  },
  {
    title: "Database Forensics",
    text: "Database forensics is concerned with the forensic examination of databases and their metadata.",
  },
  {
    title: "Digital Forensic",
    text: "Digital forensics involves the preservation, identification, extraction, and documentation of digital data.",
  },
  {
    title: "Disk Forensic",
    text: "Disk forensics is the process of recovering data and other important artifacts from storage devices.",
  },
  {
    title: "Email Forensics",
    text: "Email forensics involves the analysis and investigation of email communications for evidence.",
  },
  {
    title: "Email Fraud Investigation",
    text: "Includes forensic analysis of email hacking, phishing attacks, and fund recovery.",
  },
  {
    title: "Malware Forensics",
    text: "Helps in the investigation, identification, and mitigation of potential threats.",
  },
  {
    title: "Memory Forensics",
    text: "Examines volatile data in a computer's memory dump.",
  },
  {
    title: "Mobile Forensic",
    text: "Concerned with recovering data from electronic mobile devices.",
  },
  {
    title: "Network Forensics",
    text: "Examines network traffic and data across a network.",
  },
  {
    title: "Social Media Analysis",
    text: "Collects and analyzes content from social media platforms.",
  },
  {
    title: "Wireless Forensics",
    text: "Provides tools and techniques to collect data in a wireless traffic environment.",
  },
];

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("hamburger");
    const nav = document.getElementById("nav-menu");
    const toggle = () => nav.classList.toggle("open");
    if (btn && nav) {
      btn.addEventListener("click", toggle);
      return () => btn.removeEventListener("click", toggle);
    }
  }, []);

  const visibleServices = showAllServices ? services : services.slice(0, 4);

  return (
    <>
      <header>
        <div className="container header-flex">
          <div className="logo-area">
            <div className="logo-area-row">
              <img src={logo} alt="Logo" className="logo" />
              <span className="brand-title">ENREACH SOLUTION</span>
            </div>
          </div>
          <nav>
            <button id="hamburger" className="hamburger" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
            <ul className="nav-links" id="nav-menu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="www.example.com">Article</a></li>
              {/* <li><a href="/login">Admin LogIn</a></li> */}
            </ul>
          </nav>
        </div>
      </header>
        // Development underway, uncomment the section when ready
<section className="hero">
  <div className="container hero-flex hero-overlay">
    <div className="hero-content">
      <h2>Uncover the Truth with Expert Digital Forensics</h2>
      <p>We specialize in digital forensics and cyber fraud investigation. Our team uses cutting-edge technology and innovative methods to uncover the truth in complex cases.</p>
      <a href="#contact" className="btn">Free Consultation</a>
    </div>
  </div>
</section>

      <section id="about" className="about">
        <div className="container about-flex" style={{ display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap" }}>
          <div className="about-photo" style={{ flex: "1 1 300px", minWidth: 0 }}>
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&w=600&q=80"
              alt="Team Meeting"
              style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
            />
          </div>
          <div className="about-card" style={{ flex: "2 1 400px", minWidth: 0 }}>
            {/* <h2>About Us</h2> */}
            <p>
  At our cyber forensics firm, we specialize in investigating complex digital crimes such as <mark>cybercrime</mark>, <mark>intellectual property theft</mark>, and <mark>financial fraud</mark>. Our team of certified experts utilizes cutting-edge tools and methodologies to uncover hidden evidence, trace digital footprints, and provide court-admissible reports. We also handle cases involving <mark>data breaches</mark>, <mark>malware analysis</mark>, <mark>insider threats</mark>, and <mark>digital espionage</mark>. Whether working with corporations, law enforcement, or legal professionals, we deliver <mark>reliable</mark>, <mark>discreet</mark>, and <mark>timely</mark> results, ensuring <mark>accuracy</mark>, <mark>integrity</mark>, and <mark>professionalism</mark> in every investigation. Trust us to safeguard your digital interests and uncover the truth behind any cyber incident. 
  <mark>Client confidentiality</mark> is our top priority, and we maintain the highest standards of data security throughout the process. With a proven track record of successful investigations, we are your trusted partner in navigating today’s complex digital landscape.
</p>

          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className={`services-grid ${showAllServices ? "show-more" : ""}`}>
            {visibleServices.map((item, index) => (
              <div className="service-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="view-more">View More</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="view-more" onClick={() => setShowAllServices(!showAllServices)}>
              {showAllServices ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="why-choose-us">
  <div className="container why-choose-us-content">
    <h2>Why Choose Us</h2>
    <ul>
      <li>Expertise in handling complex cyber incidents</li>
      <li>Certified and experienced professionals</li>
      <li>Proven track record of successful investigations</li>
      <li>Comprehensive services from data recovery to legal support</li>
      <li>Confidentiality and timely delivery guaranteed</li>
      <li>24/7 support for urgent cases</li>
    </ul>
  </div>
</section>

      <section id="team" className="team-section">
        <h2>Our Team</h2>
        <br />
        <div className="team-grid">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="team-photo" />
            <h3>Rajesh Kumar</h3>
            <p>Sr. Forensic Examiner</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="team-photo" />
            <h3>Priya Sharma</h3>
            <p>Cyber Fraud Investigator</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Team Member" className="team-photo" />
            <h3>Amit Singh</h3>
            <p>Digital Forensics Analyst</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member" className="team-photo" />
            <h3>Neha Verma</h3>
            <p>Network Forensics Specialist</p>
          </div>
          {/* <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Team Member" className="team-photo" />
            <h3>Swati Patel</h3>
            <p>Mobile Forensics Expert</p>
          </div> */}
          {/* <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Team Member" className="team-photo" />
            <h3>Vikram Joshi</h3>
            <p>Incident Response Manager</p>
          </div> */}
          {/* Add team members here */}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>If you are facing a cyber incident, our team is ready to help you.</p>
          <br />
          <a href="mailto:contact.enreachsolution@gmail.com" className="btn">Email Us</a>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col logo-about">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-about">ENREACH SOLUTION</p>
          </div>
          <div className="footer-col contact-info">
            <h3>Contact Info</h3>
            <ul>
              <li>📍 Astralis Supernova, Noida</li>
              <li>📞 +91 8218848146</li>
              <li>✉️ contact.enreachsolution@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 ENREACH SOLUTION. All Rights Reserved. <br />
          Developed by <a href="https://vishantrathi.github.io/QuberaSystems/">QuberaSystems</a>
        </div>
      </footer>
    </>
  );
};

export default Index;
