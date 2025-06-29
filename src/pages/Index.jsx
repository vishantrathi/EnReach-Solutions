import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import LetterGlitch from "../components/LetterGlitch";

const services = [
  { title: "Audio Video Analysis", text: "Audio and video are digital sources of evidence that can be found at the scene of a crime or with the victim or the accused." },
  { title: "Cloud Forensics", text: "Cloud forensics allows users to conveniently access fully featured applications and development environments for forensic analysis." },
  { title: "Computer / MAC Forensic", text: "Computer forensics is a scientific method of investigation and examination to gather evidence from digital devices or computer networks." },
  { title: "Cyber Fraud Investigation", text: "Cybercrime refers to crimes committed using the internet or other types of computer networks, including hacking, identity theft, and more." },
  { title: "Database Forensics", text: "Database forensics is concerned with the forensic examination of databases and their metadata." },
  { title: "Digital Forensic", text: "Digital forensics involves the preservation, identification, extraction, and documentation of digital data." },
  { title: "Disk Forensic", text: "Disk forensics is the process of recovering data and other important artifacts from storage devices." },
  { title: "Email Forensics", text: "Email forensics involves the analysis and investigation of email communications for evidence." },
  { title: "Email Fraud Investigation", text: "Includes forensic analysis of email hacking, phishing attacks, and fund recovery." },
  { title: "Malware Forensics", text: "Helps in the investigation, identification, and mitigation of potential threats." },
  { title: "Memory Forensics", text: "Examines volatile data in a computer's memory dump." },
  { title: "Mobile Forensic", text: "Concerned with recovering data from electronic mobile devices." },
  { title: "Network Forensics", text: "Examines network traffic and data across a network." },
  { title: "Social Media Analysis", text: "Collects and analyzes content from social media platforms." },
  { title: "Wireless Forensics", text: "Provides tools and techniques to collect data in a wireless traffic environment." },
];

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const btn = document.getElementById("hamburger");
    const nav = document.getElementById("nav-menu");
    const toggle = () => nav.classList.toggle("open");
    if (btn && nav) {
      btn.addEventListener("click", toggle);
      return () => btn.removeEventListener("click", toggle);
    }
  }, []);

  useEffect(() => {
    fetch('/data/articles.json')
      .then(res => res.json())
      .then(data => setArticles(data.slice(0, 3)));
  }, []);

  const visibleServices = showAllServices ? services : services.slice(0, 4);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container header-flex">
          <div className="logo-area">
            <div className="logo-area-row">
              <img src={logo} alt="Enreach Solution Logo" className="logo" />
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
              <li><Link to="/articles">Articles</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <LetterGlitch glitchSpeed={50} centerVignette outerVignette={false} smooth />
        </div>
        <div className="container hero-flex hero-overlay" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <h2>Uncover the Truth with Expert Digital Forensics</h2>
            <p>
              We specialize in digital forensics and cyber fraud investigation. Our team uses cutting-edge technology and innovative methods to uncover the truth in complex cases.
            </p>
            <a href="#contact" className="btn">Free Consultation</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-flex" style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div className="about-photo" style={{ flex: "1 1 300px", minWidth: 0 }}>
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&w=600&q=80"
              alt="Team Meeting"
              style={{ width: "100%", borderRadius: 12, objectFit: "cover" }}
            />
          </div>
          <div className="about-card" style={{ flex: "2 1 400px", minWidth: 0 }}>
            <p><mark>cybercrime</mark>, <mark>intellectual property theft</mark>, and At our cyber forensics firm, we specialize in investigating complex digital crimes such as <mark>financial fraud</mark>. Our team of certified experts utilizes cutting-edge tools and methodologies to uncover hidden evidence, trace digital footprints, and provide court-admissible reports. We also handle cases involving <mark>data breaches</mark>, <mark>malware analysis</mark>, <mark>insider threats</mark>, and <mark>digital espionage</mark>. Whether working with corporations, law enforcement, or legal professionals, we deliver <mark>reliable</mark>, <mark>discreet</mark>, and <mark>timely</mark> results, ensuring <mark>accuracy</mark>, <mark>integrity</mark>, and <mark>professionalism</mark> in every investigation. Trust us to safeguard your digital interests and uncover the truth behind any cyber incident.<mark>Client confidentiality</mark> is our top priority, and we maintain the highest standards of data security throughout the process. With a proven track record of successful investigations, we are your trusted partner in navigating today’s complex digital landscape.</p>
          </div>
        </div>
      </section>

      {/* Services S</ul>ection */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className={`services-grid${showAllServices ? " show-more" : ""}`}>
            {visibleServices.map((item, idx) => (
              <div className="service-card" key={idx}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="view-more" tabIndex={0}>View More</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button className="view-more" onClick={() => setShowAllServices(s => !s)}>
              {showAllServices ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section id="latest-articles" className="latest-articles">
        <div className="container">
          <h2 className="section-heading">Latest Articles from Enreach Solution</h2>
          <div className="article-grid">
            {articles.map(article => (
              <div key={article.id} className="article-card">
                <img src={article.image} alt={article.title} className="article-img" />
                <div className="article-body">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <Link to={`/article/${article.id}`} className="article-link">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/articles" className="view-all-btn">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2>Our Team</h2>
        <br />
        <div className="team-grid">
          {[
            {
              name: "Varun Saini",
              role: "CEO & Cyber Forensics Expert",
              // img: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              name: "Priya Sharma",
              role: "Cyber Fraud Investigator",
              // img: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
              name: "Amit Singh",
              role: "Digital Forensics Analyst",
              // img: "https://randomuser.me/api/portraits/men/65.jpg"
            },
            {
              name: "Neha Verma",
              role: "Network Forensics Specialist",
              // img: "https://randomuser.me/api/portraits/women/68.jpg"
            }
          ].map(member => (
            <div className="team-card" key={member.name}>
              <img src={member.img} alt={member.name} className="team-photo" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>If you are facing a cyber incident, our team is ready to help you.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", margin: "16px 0" }}>
            <a href="mailto:contact.enreachsolution@gmail.com" className="btn">Email Us</a>
            <span style={{ fontWeight: 700, color: "#555" }}>OR</span>
            <a href="tel:+9182xxxxx146" className="btn">Call Us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col logo-about">
            <img src={logo} alt="Enreach Solution Logo" className="footer-logo" />
            <p className="footer-about">ENREACH SOLUTION</p>
          </div>
          <div className="footer-col contact-info">
            <h3>Contact Info</h3>
            <ul>
              <li>📍 Astralis Supernova, Noida</li>
              <li>📞 +91 82xxxxx146</li>
              <li>✉️ contact.enreachsolution@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 ENREACH SOLUTION. All Rights Reserved. <br />
          Developed & Managed by EnReach Solution Research & Development Team
        </div>
      </footer>
    </>
  );
};

export default Index;
