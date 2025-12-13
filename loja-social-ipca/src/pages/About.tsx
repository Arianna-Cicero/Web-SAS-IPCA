import React from "react";
import "../styles/pages/About.css";
import aboutimage from "../assets/png/aboutimage.png";

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="About-hero">
        <h1 className="subtitle-about h1">Sobre</h1>
        <img src={aboutimage} alt="solidarity" className="About-image"/>
      </div>
      <div className="About-content" >
        <p className="About-content p" style={{ padding: "1rem" }}>
          A Loja Social IPCA é uma iniciativa solidária do Instituto Politécnico do Cávado e do Áve (IPCA) que visa apoiar estudantes e membros da comunidade académica em situação de vulnerabilidade económica.
        </p>
        <h2 className="subtitle-about h2">Nossa Missão</h2>
        <p className="About-content p">
          Temos como missão apoiar estudantes e membros da
          comunidade académica que enfrentam dificuldades económicas, através da
          disponibilização de bens essenciais.
        </p>

        <h2 className="subtitle-about h2">O que oferecemos</h2>
        <ul>
          <li>Bens Alimentares</li>
          <li>Produtos de Higiene Pessoal</li>
          <li>Produtos de Higiene Habitacional</li>
        </ul>

        <h2 className="subtitle-about h2">Como ajudar</h2>
        <p className="About-content p">
          Você pode contribuir com doações de bens ou voluntariando seu tempo
          para ajudar na organização e distribuição dos produtos.
        </p>
        </div>
    </div>
  );
};

export default About;
