import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* 1 column - Logo and phrase */}
        <div className="footer-logo-section">
          <div className="footer-logo">IPCA</div>
          <p className="footer-slogan">
            <strong>Partilha.</strong> <em>Solidariedade.</em>
          </p>
        </div>

        {/* 2nd column - Company */}
        <div className="footer-column">
          <h4>IPCA</h4>
          <ul>
            <li>
              <a
                href="https://ipca.pt/historia-do-ipca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="https://ipca.pt/historia-do-ipca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Values
              </a>
            </li>
            <li>
              <a
                href="https://knowledge.ipca.pt/research-management"
                target="_blank"
                rel="noopener noreferrer"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="https://ipca.pt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Principal
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd column - Follow us */}
        <div className="footer-column">
          <h4>Media</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/ipca.politecnico/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCFbcUEN9As7gJZVoeXgZouQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/school/politecnico-do-cavado-e-do-ave/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/IPCA.Politecnico"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.flickr.com/photos/ipcabarcelos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flickr
              </a>
            </li>
          </ul>
        </div>

        {/* 4th column - Help */}
        <div className="footer-column">
          <h4>Ajuda</h4>
          <ul>
            <li>
              <a
                href="https://ipca.pt/apresentacao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="https://ipca.pt/informacao-institucional/politica-de-privacidade-e-protecao-de-dados/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom line */}
      <div className="footer-bottom">
        <p>© 2025 Loja Social IPCA — All rights reserved.</p>
        <a
          href="https://ipca.pt/informacao-institucional/politica-de-privacidade-e-protecao-de-dados/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy and cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
