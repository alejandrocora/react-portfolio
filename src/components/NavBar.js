import spain_flag from '../images/spain_flag.png';
import uk_flag from '../images/uk_flag.png';
import { useState } from 'react';
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { Trans } from 'react-i18next';
import i18next from 'i18next';

function NavBar() {

  const [classes, setClasses] = useState('NavBar');

  function showLinks() {
    if (classes == 'NavBar') {
      setClasses('NavBar responsive');
    } else {
      setClasses('NavBar');
    }
  }

  function changeLanguage() {
    if (i18next.language == 'es') {
      i18next.init({lng: 'en'});
    } else {
      i18next.init({lng: 'es'});
    }
  }

  return (
    <nav className={classes}>
      <a href="#home">Alejandro Zapico Lara</a>
      <a href="javascript:void(0);" className="Button" onClick={() => showLinks()}><FiMenu /></a>
      <a href="#about"><BsPerson /><Trans i18nKey="navbar.about" /></a>
      <a href="#projects"><FaLaptopCode /><Trans i18nKey="navbar.projects" /></a>
      <a href="#contact"><AiOutlineMail /><Trans i18nKey="navbar.contact" /></a>
      <a href="https://github.com/alejandrocora" target="_blank"><AiFillGithub />GitHub</a>
      <a href="javascript:void(0);" onClick={() => changeLanguage()}><Trans i18nKey="navbar.changeLanguage" components={{ spain: <img src={spain_flag} />, uk: <img src={uk_flag} /> }} /></a>
    </nav>
  );
}

export default NavBar;