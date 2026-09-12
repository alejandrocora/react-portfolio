import { FaWhatsapp, FaSearch } from 'react-icons/fa';
import { TbCoinFilled } from 'react-icons/tb';
import { Trans } from 'react-i18next';

function Projects() {
  return (
    <div id="projects">
      <hr />
      <h1 className="main-title"><Trans i18nKey="projects.title" /></h1>

      <div className="project-grid">
        <div className="project-card">
          <div className="project-img placeholder">
            <FaWhatsapp />
          </div>
          <div className="project-text">
            <h3>WhatsApp Media Enumeration</h3>
            <p><Trans i18nKey="projects.wame" /></p>
          </div>
          <div className="project-buttons">
            <a
              aria-label="WhatsApp Media Enumeration"
              href="https://github.com/alejandrocora/WhatsAppMediaEnumeration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img placeholder">
            <FaSearch />
          </div>
          <div className="project-text">
            <h3>Bizleaker</h3>
            <p><Trans i18nKey="projects.bizleaker" /></p>
          </div>
          <div className="project-buttons">
            <a
              aria-label="Bizleaker"
              href="https://github.com/alejandrocora/bizleaker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img placeholder">
            <TbCoinFilled />
          </div>
          <div className="project-text">
            <h3>Legit-Flip.io</h3>
            <p><Trans i18nKey="projects.legitflip" /></p>
          </div>
          <div className="project-buttons">
            <a
              aria-label="Legit-Flip.io"
              href="https://legit-flip.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
