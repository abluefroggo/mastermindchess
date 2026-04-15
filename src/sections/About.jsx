export default function About() {
  const headingColor = "#ffd54a";
  const cardColor = "rgba(0, 0, 0, 0.35)";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0338d6, #bf9932)",
        color: "white",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: cardColor,
          borderRadius: "16px",
          padding: "32px",
        }}
      >
        <a
          href="/"
          style={{
            color: "gold",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          ← Back to Home
        </a>

        <h1
          style={{
            marginTop: "18px",
            marginBottom: "14px",
            fontSize: "2.4rem",
            color: headingColor,
          }}
        >
          About the Organization
        </h1>

        <p style={{ lineHeight: 1.7, fontSize: "1.08rem", marginBottom: "18px" }}>
          Masterminds Chess Camp helps students build competitive chess skills
          in a focused, encouraging environment. We combine strong coaching,
          tactical training, and practical tournament play so each student can
          improve with confidence.
        </p>

        <h2 style={{ marginTop: "20px", marginBottom: "10px", color: headingColor }}>
          Our Mission
        </h2>
        <p style={{ lineHeight: 1.7, marginBottom: "18px" }}>
          We aim to make high-level chess education accessible to ambitious
          young players by providing quality coaching, disciplined practice, and
          a community that values growth and sportsmanship.
          In our camp, we are more than just players; we are a community of chess enthusiasts united by a passion for the game. Our mission is to foster a vibrant and inclusive environment where students can sharpen their minds, form lasting connections, and share the joy of chess.
        </p>

        <h2 style={{ marginTop: "20px", marginBottom: "10px", color: headingColor }}>
          Why We Are Unique
        </h2>
        <ul style={{ lineHeight: 1.8, paddingLeft: "20px", marginBottom: "18px" }}>
          <li>
            <strong>Diverse Skill Levels:</strong> Beginners and advanced players
            both get instruction matched to their level. Whether you're a beginner curious about the rules or a seasoned player seeking a worthy opponent, our club welcomes all skill levels. Our diverse membership ensures an engaging and supportive atmosphere for everyone.
          </li>
          <li>
            <strong>Strategic Excellence:</strong> Students train opening plans,
            tactics, middlegame ideas, and practical endgames. Expect to elevate your game with us. We have a grandmaster coming that will teach the kids for 2 days preparing them for the USCF rated games at the end of each day.
          </li>
          <li>
            <strong>Community Engagement:</strong> We use chess to build
            friendships, confidence, and lasting motivation. Chess is a universal language, and we use it to connect with the wider community. Through outreach programs, simultaneous exhibitions, and chess-in-the-park events, we strive to share the intellectual beauty of chess with the world. We are hosting this in the community center!
          </li>
          <li>
            <strong>Friendly Competition:</strong> From local tournaments to inter-university matches, our club provides opportunities for friendly competition and spirited camaraderie. Join us on the chessboard to test your skills and forge unforgettable memories. We have a leaderboard keeping track of how the kids are behaving each day and will report this back to the parents. Our tournaments and fun games come with prizes! We are giving out trophies and T-shirts!
          </li>
        </ul>

        <h2 style={{ marginTop: "20px", marginBottom: "10px", color: headingColor }}>
          What We Offer
        </h2>
        <ul style={{ lineHeight: 1.8, paddingLeft: "20px" }}>
          <li>Structured daily lessons from strong coaches</li>
          <li>Guided tactical and strategic training sessions</li>
          <li>USCF-rated game opportunities and review</li>
          <li>A fun, challenging environment for serious improvement</li>
        </ul>
      </div>
    </main>
  );
}