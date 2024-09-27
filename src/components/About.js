import { SiCplusplus, SiNodedotjs, SiJavascript, SiReact, SiSelenium, SiMongodb, SiPostman, SiGithub, SiVisualstudio, SiArchlinux, SiCentos, SiDebian, SiGentoo, SiKalilinux, SiPython, SiMacos, SiUbuntu, SiWindows } from 'react-icons/si';
import { AiFillSecurityScan } from 'react-icons/ai';
import { FaJava } from 'react-icons/fa';
import { Trans } from 'react-i18next';

function About() {

  return (
    <div id="about">
      <div className="content-container">
        {Array(6).fill(true).map((_, i) => <p><Trans i18nKey={'about.p'+(i+1)} /></p>)}
      </div>
      <p className="quote">“<Trans i18nKey="about.quote" />”</p>
      <h1 className="section_title"><hr /><Trans i18nKey="about.title1" /></h1>
      <div className="skill_list">
        <div>
          <SiPython/>
          <p>Python</p>
        </div>
        <div>
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div>
          <SiNodedotjs />
          <p>Node.js</p>
        </div>
        <div>
          <SiCplusplus />
          <p>C++</p>
        </div>
        <div>
          <FaJava />
          <p>Java</p>
        </div>
        <div>
          <SiSelenium />
          <p>Selenium</p>
        </div>
        <div>
          <SiReact />
          <p>React</p>
        </div>
        <div>
          <AiFillSecurityScan />
          <p><a href="https://certs.ine.com/f2e4cdc3-14ab-4ffb-b17b-36f874f2591f" target="_blank">INE eJPT</a></p>
        </div>
      </div>
      <h1 className="section_title"><Trans i18nKey="about.title2" /></h1>
      <div className="skill_list">
        <div>
          <SiPostman />
          <p>Postman</p>
        </div>
        <div>
          <SiVisualstudio />
          <p>Visual Studio</p>
        </div>
        <div>
          <SiGithub />
          <p>GitHub</p>
        </div>
      </div>
      <h1 className="section_title"><Trans i18nKey="about.title3" /></h1>
      <div className="skill_list">
        <div>
          <SiArchlinux />
          <p>Arch</p>
        </div>
        <div>
          <SiDebian />
          <p>Debian</p>
        </div>
        <div>
          <SiUbuntu />
          <p>Ubuntu</p>
        </div>
        <div>
          <SiCentos />
          <p>CentOS</p>
        </div>
        <div>
          <SiKalilinux />
          <p>Kali</p>
        </div>
        <div>
          <SiGentoo />
          <p>Gentoo</p>
        </div>
        <div>
          <SiMacos />
          <p>MacOS</p>
        </div>       
        <div>
          <SiWindows />
          <p>Windows</p>
        </div>
      </div>
    </div>
  );
}

export default About;