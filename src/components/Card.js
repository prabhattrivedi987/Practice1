import React from "react"
import '../styles/Card.css'

export default function Card({ title = "", value = "", titleColor = "black", valueColor = "blue" }) {
    return (
        <div className="card">
          <div className="center-content">
            <h1
              style={{
                fontFamily: "Roboto",
                fontSize: "28px",
                color: titleColor,
              }}
            >
              {title}
            </h1>
            <h2
              style={{
                fontFamily: "Roboto",
                fontSize: "20px",
                color: valueColor,
              }}
            >
              {value}
            </h2>
          </div>
        </div>
    );
  }