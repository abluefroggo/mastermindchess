// LandingPage.jsx
// src/index.js
import { useEffect, useState } from "react";
import './index.css';
import App from './App';
// ... rest of the file

import "./sections/LandingPage.css";
import chessGif from "./assets/chessgif.gif";
import mastermindsLogo from "./assets/mastermindslogo.png";

export default function LandingPage() {
  const [openDay, setOpenDay] = useState(null);
  const [openInstructor, setOpenInstructor] = useState(0);
  const earlyBirdDeadline = new Date("2026-05-25T23:59:59");

  const getTimeLeft = () => {
    const ms = earlyBirdDeadline.getTime() - Date.now();
    if (ms <= 0) return null;

    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const scheduleItems = [
    {
      day: "Day 1",
      theme: "Openings + Introductions",
      detail:
        "Check-in, getting to know everyone, lessons on opening principles and common opening mistakes, then pairings and a rated game.",
    },
    {
      day: "Day 2",
      theme: "Tactics Training",
      detail:
        "Forks, pins, skewers, discovered attacks, and double threats, plus puzzle practice and a rated game.",
    },
    {
      day: "Day 3",
      theme: "Middlegame Strategy",
      detail:
        "Pawn structure, piece activity, planning, positional play, plus practice and game review, followed by a rated game.",
    },
    {
      day: "Day 4",
      theme: "Endgame Mastery",
      detail:
        "King and pawn fundamentals, opposition, K+Q vs K and K+R vs K techniques, plus endgame practice and a rated game.",
    },
    {
      day: "Day 5",
      theme: "Final Tournament + Awards Ceremony",
      detail:
        "Final USCF-rated game, results calculation, pizza party, setup for parents, and a closing ceremony with awards, trophies, medals, recognitions (including champion and most improved), speeches, and photos.",
    },
  ];
  const instructorItems = [
    {
      day: "GM Mackenzie Molner",
      theme: "Lead Instructor",
      detail:
        "Grandmaster Mackenzie Molner is a highly respected professional chess player and coach known for his elite tournament experience and engaging teaching style.",
    },
    {
      day: "Anirv Yenugu",
      theme: "Founder & Director",
      detail:
        "The founder of the camp oversees all planning, organization, and tournament structure. Leads instruction and coordinates staff. Anirv is also the Tournament Director for the Livingston High School Chess Club.",
    },
    {
      day: "LHS Students",
      theme: "Instruction • Tournament Support • Operations",
      detail: (
        <div>
          <p>
            Chess club members from the Livingston High School Chess Team, which
            stands as a premier national powerhouse. As four-time repeat State
            Champions and a consistent fixture in the national Top 10, Livingston’s reputation is as one of the most formidable
            scholastic programs in the United States Chess Federation circuit.
          </p>

          <ul className="staff-bio-list">
            <li>
              <strong>Rishi Jain</strong><br />
              Helps with camp organization, supports instruction sessions, and assists with tournament operations and logistics.
            </li>

            <li>
              <strong>Meahul Muthukumar</strong><br />
              Assists with daily activities, game coordination, and helps manage materials and overall camp flow.
            </li>

            <li>
              <strong>Leo Xiao</strong><br />
              Assists with running the USCF-rated tournament and teaches lessons during the camp.
            </li>

            <li>
              <strong>Vivaan</strong><br />
              Plays a key role in the camp’s creative and instructional side. Designed the official camp flyer, helps promote the program, and teaches lessons to students during the camp.
            </li>

            <li>
              <strong>Elias Chen – Head of Digital Technology</strong><br />
              Manages the camp website and digital platforms, and helps with technical setup and design.
            </li>

            <li>
              <strong>Samay</strong><br />
              Supports general camp operations and manages finances and payments.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">
            <img src={mastermindsLogo} alt="Masterminds Chess Camp logo" />
          </div>
          <div className="nav-links">
            <a href="/about" className="nav-link">
              About the Organization
            </a>
            <a href="#register" className="nav-btn">
              Register Now
            </a>
          </div>
        </nav>

        <h1 className="hero-title" style={{ fontFamily: "Griche" }}>
          Masterminds Chess Camp 2026
        </h1>

        <div className="hero-content">
          <div className="hero-text">
            <p>
              Phone: (973)-885-2307 • Email: Mastermindschesscamp@gmail.com
              <br />
              July 13–17 • 6:00 PM – 9:00 PM
              <br />
              Fairway’s Apartment Clubhouse
            </p>
            <p className="hero-highlight">
              Under the guidance of Grandmaster <strong>Mackenzie Molner</strong>
            </p>
            <a href="#register" className="hero-btn">
              Jump to Registration ↓
            </a>
            <p className="hero-cta-note">This button scrolls down to the sign-up section.</p>
          </div>

          <div className="hero-gif">
            <img src={chessGif} alt="Chess animation" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <h2>About the Camp</h2>
        <p>
          Join us for a 5-day immersive chess experience featuring instruction,
          tactical training, daily USCF-rated tournament games, and prizes.
          Designed for players looking to sharpen their competitive skills in a
          fun and structured environment.
        </p>
      </section>

      {/* Instructor Section */}
      <section className="section instructor">
        <h2>Meet the Team</h2>
        <div className="schedule-grid">
          {instructorItems.map((item, index) => {
            const isOpen = openInstructor === index;
            const detailId = `instructor-detail-${index}`;

            return (
              <div
                key={item.day}
                className={`day-card ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="day-toggle"
                  onClick={() => setOpenInstructor(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={detailId}
                >
                  <span className="day-heading">{item.day}</span>
                  <span className="day-theme">{item.theme}</span>
                  <span className="day-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p id={detailId} className="day-detail">
                    {item.detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section schedule">
        <h2>Daily Themes</h2>
        <div className="schedule-grid">
          {scheduleItems.map((item, index) => {
            const isOpen = openDay === index;
            const detailId = `day-detail-${index}`;

            return (
              <div key={item.day} className={`day-card ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="day-toggle"
                  onClick={() => setOpenDay(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={detailId}
                >
                  <span className="day-heading">{item.day}</span>
                  <span className="day-theme">{item.theme}</span>
                  <span className="day-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p id={detailId} className="day-detail">
                    {item.detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="section pricing">
        <h2>Pricing</h2>
        <p>
          <strong>$180</strong> Early Bird (before May 25)
        </p>
        <div className="countdown-box">
          <strong>Early Bird ends in:</strong>{" "}
          {timeLeft ? (
            <span>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          ) : (
            <span>Expired</span>
          )}
        </div>
        <p>
          <strong>$200</strong> Regular Registration (before July 12)
        </p>
      </section>

      {/* Registration */}
      <section id="register" className="section register">
        <h2>Register Today</h2>
        <p>Spots are limited. Secure your place now!</p>
        <a
          href="https://pci.jotform.com/form/261043721148147"
          target="_blank"
          rel="noopener noreferrer"
          className="register-btn"
        >
          Register Here
        </a>
        <br/>
        <a
          href="https://form.jotform.com/261044735828057"
          target="_blank"
          rel="noopener noreferrer"
          className="register-btn"
        >
          USCF Tournament Registration Form
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Website designed and programmed by Elias Chen.  | © 2025-2026 Masterminds Chess Camp | Fairway’s Apartment Clubhouse</p>
      </footer>
    </div>
  );
}

