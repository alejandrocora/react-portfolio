import BlScreenshot from '../images/bizleaker_screenshot.png';
import LegitFlip from '../images/legit_flip.png';
import GhostgramScreenshot from '../images/ghostgram_screenshot.png';
import { Trans } from 'react-i18next';

function Projects() {
  return (
    <div id="projects">
      <hr />
      <h1 className="main-title"><Trans i18nKey="projects.title" /></h1>

      <div className="project-grid">
        {/* Bizleaker */}
        <div className="project-card">
          <div
            className="project-img"
            style={{ backgroundImage: `url(${BlScreenshot})` }}
          ></div>
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

        {/* LegitFlip */}
        <div className="project-card">
          <div
            className="project-img"
            style={{ backgroundImage: `url(${LegitFlip})` }}
          ></div>
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

        {/* Ghostgram */}
        <div className="project-card">
          <div
            className="project-img"
            style={{ backgroundImage: `url(${GhostgramScreenshot})` }}
          ></div>
          <div className="project-text">
            <h3>Ghostgram</h3>
            <p><Trans i18nKey="projects.ghostgram" /></p>
          </div>
          <div className="project-buttons">
            <a
              aria-label="Ghostgram"
              href="https://github.com/alejandrocora/ghostgram"
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
