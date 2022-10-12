import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const APIKEY = "f825344b0cf0672c689378549f9868db";

export default function App() {
  const [ville, setVille] = useState("");
  const [resultat, setResultat] = useState({});

  const gettemperature = async (e) => {
    e.preventDefault();
    if (!ville) {
      return;
    }
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${APIKEY}`
    );
    const { main } = await res.json();

    setResultat(main);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "30%",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <form onSubmit={gettemperature}>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Form.Control
            type="search"
            placeholder="Nom de la ville"
            className="me-2"
            aria-label="Search"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          />
        </div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Button variant="primary" type="submit">
            Verifier la temperature
          </Button>{" "}
        </div>
      </form>
      {resultat && (
        <div>
          <p>la temperature est de {parseInt(resultat.temp - 273.15)} °C</p>
        </div>
      )}
    </div>
  );
}
