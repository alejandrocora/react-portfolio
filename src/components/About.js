import { SiCplusplus, SiNodedotjs, SiJavascript, SiReact, SiSelenium, SiMongodb, SiPostman, SiGithub, SiVisualstudio, SiArchlinux, SiCentos, SiDebian, SiGentoo, SiKalilinux, SiPython, SiMacos, SiUbuntu, SiWindows } from 'react-icons/si';
import { AiFillSecurityScan } from 'react-icons/ai';
import { FaJava } from 'react-icons/fa';
import { Trans } from 'react-i18next';

function About() {
  const skills = [
    { icon: <SiPython />, label: 'Python' },
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <SiNodedotjs />, label: 'Node.js' },
    { icon: <SiCplusplus />, label: 'C++' },
    { icon: <FaJava />, label: 'Java' },
    { icon: <SiSelenium />, label: 'Selenium' },
    { icon: <SiReact />, label: 'React' },
    { icon: <AiFillSecurityScan />, label: <a href="https://certs.ine.com/f2e4cdc3-14ab-4ffb-b17b-36f874f2591f" target="_blank" rel="noreferrer">INE eJPT</a> },
  ];

  const tools = [
    { icon: <SiPostman />, label: 'Postman' },
    { icon: <SiVisualstudio />, label: 'Visual Studio' },
    { icon: <SiGithub />, label: 'GitHub' },
  ];

  const operatingSystems = [
    { icon: <SiArchlinux />, label: 'Arch' },
    { icon: <SiDebian />, label: 'Debian' },
    { icon: <SiUbuntu />, label: 'Ubuntu' },
    { icon: <SiCentos />, label: 'CentOS' },
    { icon: <SiKalilinux />, label: 'Kali' },
    { icon: <SiGentoo />, label: 'Gentoo' },
    { icon: <SiMacos />, label: 'MacOS' },
    { icon: <SiWindows />, label: 'Windows' },
  ];

  return (
    <div id="about">
      <h1 className="main-title">
        <Trans i18nKey="about.main_title" />
      </h1>
      <div className="content-container">
        <p><Trans i18nKey="about.p1" /></p>
      </div>
      <p className="quote">“<Trans i18nKey="about.quote" />”</p>
      <h1 className="section-title"><hr /><Trans i18nKey="about.title1" /></h1>
      <div className="skill-list">
        {skills.map((skill, i) => (
          <div key={i}>
            {skill.icon}
            <p>{skill.label}</p>
          </div>
        ))}
      </div>

      <h1 className="section-title"><Trans i18nKey="about.title2" /></h1>
      <div className="skill-list">
        {tools.map((tool, i) => (
          <div key={i}>
            {tool.icon}
            <p>{tool.label}</p>
          </div>
        ))}
      </div>

      <h1 className="section-title"><Trans i18nKey="about.title3" /></h1>
      <div className="skill-list">
        {operatingSystems.map((os, i) => (
          <div key={i}>
            {os.icon}
            <p>{os.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
