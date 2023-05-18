import BlScreenshot from '../images/bizleaker_screenshot.png';
import BlLogo from '../images/bizleaker.png';
import BCMNLogo from '../images/BCMN.png'

function Projects() {
  return (
    <div id="projects">
      <hr />
      <div className="content-container project">
        <div>
          <h1 className="section_title">Algunos de mis proyectos</h1>
          <h2><img src={BlLogo} className="logo" />Bizleaker</h2>
          <p><a target="_blank" href="https://github.com/alejandrocora/bizleaker">Bizleaker</a> es una herramienta que extrae de manera automatizada nombres (normalmente nombre e iniciales de los apellidos) de números de teléfono,
          usando un <i>infoleak</i> de la herramienta "Bizum". Esto puede ser usado para automatizar y/o agilizar la detección de estafas, prevenir el acoso o tareas más simples como identificar a clientes o amigos.</p>
          <img className="screenshot" src={BlScreenshot} />
        </div>
        <div>
          <h2><img src={BCMNLogo} className="logo" />Better Call Me Now!</h2>
          <p><a target="_blank" href="https://github.com/alejandrocora/BetterCallMeNow">Better Call Me Now!</a> automatiza las peticiones de llamada, como las que se encuentran en sitios de seguros, clínicas o compañías de telefonía, a un número de teléfono. </p>
          <p>Puede ser usado para medir la calidad de sitios de atención al cliente, agilizar el contacto con varios clientes o servicios, o probar la viabilidad de una línea telefónica, entre otros usos.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;