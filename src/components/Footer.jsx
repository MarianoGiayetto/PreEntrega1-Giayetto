import React from "react";
import "../stylesheets/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img
        className="footer__logo"
        src="/Logo_Detail_Garage_invertido.png"
        alt="logo"
      />
      <img className="footer__imagen" src="/facebook.png" alt="Facebook" />
      <img className="footer__imagen" src="/whatsapp.png" alt="Whatsapp" />
      <img className="footer__imagen" src="/instagram.png" alt="Instagram" />
    </div>
  );
}
