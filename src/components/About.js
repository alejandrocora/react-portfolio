import { SiCplusplus, SiNodedotjs, SiJavascript, SiReact, SiSelenium, SiGnubash, SiArchlinux, SiCentos, SiDebian, SiGentoo, SiKalilinux, SiPython, SiMacos, SiUbuntu, SiWindows } from "react-icons/si";
import { FaJava } from "react-icons/fa";

function About() {
  return (
    <div id="about">
      <div className="content-container">
        <p>
          Nací el 6 de Febrero de 2002 en Sevilla.
        </p>
        <p>
          Desde que era niño siempre me ha gustado ingeniar y entender los sistemas en los que diferentes elementos interaccionan entre sí de manera dinámica o automática.
          Me podía pasar horas observando y analizando este tipo de sistemas, ya sean en la naturaleza, la arquitectura, la maquinaria o en los seres humanos.
        </p>
        <p>
          A los 11 años, en 2013, empecé a <i>surfear</i> foros empezando a familiarizarme con el Internet más allá de las plataformas <i>mainstream</i> (Instagram, Facebook, Youtube).
        </p>
        <p>
          A los 13 años, empecé a tener curiosidad sobre los protocolos web, el enrutador TOR y HTML, y con esto empecé a adentrarme más profundo en el mundo de la <b>Programación</b>, <b>las Redes</b>, los <b>Sistemas Operativos</b>, y por inercia, la <b>Ciberseguridad</b>.
        </p>
        <p>
          Trás esto tuve claro que estos cuatro paradigmas estaban hechos para ser mi vocación.
        </p>
        <p>
          La gran mayoría de lo que he aprendido ha sido por mi cuenta, como autodidácta.
        </p>
      </div>
      <p className="quote">
        “Todas las respuestas están ahí fuera, simplemente tenemos que hacer las preguntas adecuadas.”
      </p>
      <h1 className="section_title"><hr />Habilidades</h1>
      <div className="skill_list">
        <div>
          <SiPython/>
          <p>Python</p>
        </div>
        <div>
          <SiNodedotjs />
          <p>Node.js</p>
        </div>
        <div>
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div>
          <SiReact />
          <p>React</p>
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
          <SiGnubash />
          <p>Bash Scripting</p>
        </div>
      </div>
      <h1 className="section_title">Sistemas Operativos</h1>
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