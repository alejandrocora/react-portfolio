import BlScreenshot from '../images/bizleaker_screenshot.png';
import BlLogo from '../images/bizleaker.png';
import BCMNLogo from '../images/BCMN.png'
import { Trans } from 'react-i18next';

function Projects() {
  return (
    <div id="projects">
      <hr />
      <div className="content-container project">
        <div>
          <h1 className="section_title"><Trans i18nKey="projects.title" /></h1>
          <h2><img src={BlLogo} className="logo" />Bizleaker</h2>
          <p><Trans i18nKey="projects.bizleaker" components={ { O: <a target="_blank" href="https://github.com/alejandrocora/bizleaker" />} } /></p>
          <img className="screenshot" src={BlScreenshot} />
        </div>
        <div>
          <h2><img src={BCMNLogo} className="logo" />Better Call Me Now!</h2>
          <p><Trans i18nKey="projects.bcmn1" components={ { O: <a target="_blank" href="https://github.com/alejandrocora/bizleaker" />} } /></p>
          <p><Trans i18nKey="projects.bcmn2" /></p>
        </div>
      </div>
    </div>
  )
}

export default Projects;