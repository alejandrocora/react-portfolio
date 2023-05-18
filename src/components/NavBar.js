import { useState } from 'react';
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FiMenu } from "react-icons/fi"
import { FaLaptopCode } from "react-icons/fa"

function NavBar() {

  const [classes, setClasses] = useState('NavBar');

  function showLinks() {
    if (classes == 'NavBar') {
      setClasses('NavBar responsive');
    } else {
      setClasses('NavBar');
    }
  }

  return (
    <nav className={classes}>
      <a href="#home">Alejandro Zapico Lara</a>
      <a href="javascript:void(0);" className="Button" onClick={() => showLinks()}><FiMenu /></a>
      <a href="#about"><BsPerson />Sobre mí</a>
      <a href="#projects"><FaLaptopCode />Proyectos</a>
      <a href="#contact"><AiOutlineMail />Contacto</a>
      <a href="https://github.com/alejandrocora" target="_blank"><AiFillGithub />GitHub</a>
    </nav>
  );
}

export default NavBar;