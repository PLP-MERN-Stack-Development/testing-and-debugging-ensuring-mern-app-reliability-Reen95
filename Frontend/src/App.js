import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const api = process.env.REACT_APP_API_URL || "";
    fetch(`${api}/api/message`)
      .then(res => res.json())
      .then(data => setMessage(data.message || JSON.stringify(data)))
      .catch(err => {
        console.error(err);
        setMessage("Unable to reach backend");
      });
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "Inter, Arial, sans-serif" }}>
      <header style={{ marginBottom: 16 }}>
        <h1>MERN Assignment — Production-ready</h1>
        <p style={{ color: "#555" }}>Frontend deployed to GitHub Pages • Backend deployed to Heroku</p>
      </header>

      <section>
        <h2>Backend message</h2>
        <div style={{ background: "#f7f7f9", padding: 12, borderRadius: 8 }}>
          {message}
        </div>
        <p style={{ marginTop: 12, color: "#666" }}>
          Set <code>REACT_APP_API_URL</code> to your Heroku backend URL (no trailing slash) in GitHub Actions.
        </p>
      </section>
    </div>
  );
}

export default App;
