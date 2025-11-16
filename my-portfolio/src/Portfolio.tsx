import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

import styles from "./PortfolioNew.module.css";

import DeekshaImg from "./assets/Deeksha_Kotian.jpg";
import ResumePDF from "./assets/DEEKSHA_Resume.pdf";
import Hackathon from "./assets/Hackathon.jpg";
import GoogleAi from "./assets/GoogleAi.png";
import Wordpress from "./assets/Wordpress.png";
import Datascience from "./assets/Datascience.jpg";
import MachineLearning from "./assets/ml.png";
import Flutter from "./assets/Flutter.png";
import Dsa from "./assets/dsa.jpg";

const SECTIONS = [
  "home",
  "about",
  "projects",
  "skills",
  "certificates",
  "contact",
];

const skillsList = [
  "Java",
  "HTML",
  "SQL",
  "CSS",
  "Python",
  "C++",
  "Git",
  "GitHub",
  "Flutter",
];

const certificates = [
  { title: "HackNocturne 2025", img: Hackathon },
  { title: "Google AI Essentials", img: GoogleAi },
  { title: "Create a website using Wordpress: Free hosting and Sub-domain", img: Wordpress },
  { title: "Data Science for Engineers", img: Datascience },
  { title: "Mobile-App Development Using Flutter", img: Flutter },
  { title: "Unlocking the Basics of Machine Learning", img: MachineLearning },
  { title: "DSA December 2024", img: Dsa },
];

const projects = [
  {
    title: "FinVault: Database-Driven Banking System",
    description:
      "Developed a banking system allowing users to register, log in, and manage accounts. Integrated Java with MySQL using JDBC for account creation, deposit, withdrawal, and balance checks. Designed a dynamic JSP interface for seamless frontend-backend interaction.",
  },
  {
    title: "KINEXUS - Smart Contact Manager",
    description:
      "Built a web-based contact management system with secure OAuth login and user-friendly interface. Used Spring Boot for backend development and Thymeleaf for dynamic content rendering.",
  },
  {
    title: "CHAT APPLICATION",
    description:
      "Developed a real-time chat application with secure user authentication. Used Flutter for cross-platform mobile app development and Firebase for backend services.",
  },
  {
    title: "SAFEHOOD",
    description:
      "SafeHood is a smart community and safety app for apartment complexes, enabling real-time alerts, emergency support, and local services. Developed using Flutter and Firebase for backend, database, and authentication.",
  },
  {
    title: "HOUSE PRICE PREDICTION SYSTEM",
    description:
      "Built a predictive machine learning model to estimate real estate prices in Bengaluru. Developed using Python and trained on Kaggle dataset (Bengaluru-house-data.csv).",
  },
  {
    title: "Cryptography Based Online Voting System for College Election",
    description:
      "Designed a secure online voting system ensuring privacy and integrity of votes using cryptography. Developed using C++ with HElib (BGV scheme) for encryption, React for frontend, and Flask for backend integration.",
  },
];

const PortfolioNew = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id:string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => scrollTo("home")}>
  Deeksha's<span className={styles.highlight}> Portfolio</span>
</div>
        <nav className={styles.nav}>
          {SECTIONS.map((sec) => (
            <button
              key={sec}
              className={`${styles.navButton} ${
                activeSection === sec ? styles.active : ""
              }`}
              onClick={() => scrollTo(sec)}
              aria-label={`Go to ${sec}`}
            >
              {sec.toUpperCase()}
            </button>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        {/* Home */}
        <section id="home" className={styles.homeSection}>
          <div className={styles.homeText}>
            <h1>
              Hi, I'm <span className={styles.highlight}>Deeksha!</span>
            </h1>
            <h2>Backend Developer</h2>
            <p>
              A passionate and curious learner who blends creativity,
              problem-solving, and technology to build meaningful, impactful,
              and simple yet innovative projects.
            </p>
            <div className={styles.homeButtons}>
              <button
                className={styles.primaryBtn}
                onClick={() => scrollTo("projects")}
              >
                View My Work
              </button>
              <button
                className={styles.secondaryBtn}
                onClick={() => scrollTo("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className={styles.homeImage}>
            <img src={DeekshaImg} alt="Deeksha Portrait" />
          </div>
        </section>

        {/* About */}
        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <p>Learn more about my background, skills, and journey.</p>
          <div className={styles.aboutContent}>
            <p>
              I’m Deeksha, a curious and driven individual who loves exploring
              new ideas and challenges. I blend creativity with logical
              thinking, enjoying both problem-solving and building meaningful
              projects. Learning is a passion, and I’m always eager to pick up
              new skills and apply them uniquely. Technology excites me as it
              turns simple ideas into impactful solutions. I value simplicity,
              clarity, and teamwork, believing the best results come from
              collaboration and openness. Constantly growing, adapting, and
              striving to make a difference through what I do.
            </p>
            <a
              href={ResumePDF}
              download
              className={styles.primaryBtn}
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={styles.section}>
          <h2>My Projects</h2>
          <p>Some of my recent work and personal projects.</p>
          <div className={styles.projectsGrid}>
            {projects.map(({ title, description }) => (
              <article key={title} className={styles.projectCard}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={styles.section}>
          <h2>Skills</h2>
          <p>Technologies I use frequently.</p>
          <div className={styles.skillsList}>
            {skillsList.map((skill) => (
              <span key={skill} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className={styles.section}>
          <h2>Certificates</h2>
          <div className={styles.certificatesGrid}>
            {certificates.map(({ title, img }) => (
              <div key={title} className={styles.certificateCard}>
                <h3>{title}</h3>
                <img
                  src={img}
                  alt={`${title} certificate`}
                  loading="lazy"
                  className={styles.certificateImage}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={styles.section}>
          <h2>Contact Me</h2>
          <p>Get in touch With me!</p>
          <div className={styles.contactButtons}>
            <a
              href="mailto:deekshakotian928@gmail.com"
              className={styles.primaryBtn}
              aria-label="Email Deeksha"
            >
              <Mail size={18} style={{ marginRight: 6 }} />
              Email Me
            </a>
            <a
              href="https://github.com/deekshaa03"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              aria-label="GitHub Profile"
            >
              <Github size={18} style={{ marginRight: 6 }} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/deekshaa03"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} style={{ marginRight: 6 }} />
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Deeksha. All Rights Reserved.
      </footer>
    </div>
  );
};

export default PortfolioNew;