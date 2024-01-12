import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Card = ({ name, desc, socials, interests }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const cardStyle = {
    maxWidth: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px",
    width: "120px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const iconStyle = {
    marginRight: "5px",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <div>
        <strong>Interests</strong>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {interests.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
      </div>
      <button
        style={buttonStyle}
        onClick={() => openInNewTab(socials.Linkedin)}
      >
        <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
        Linkedin
      </button>
      <button style={buttonStyle} onClick={() => openInNewTab(socials.Github)}>
        <FontAwesomeIcon icon={faGithub} style={iconStyle} />
        Github
      </button>
    </div>
  );
};

export default Card;
