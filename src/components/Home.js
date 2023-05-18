import profile_picture from '../images/foto_perfil.jpg';
import { AiFillGithub } from "react-icons/ai"

function Home() {
  return (
    <div id="home" className="content-container intro">
      <img className='profile-image' src={profile_picture} />
      <h1>Soy Alejandro Zapico,</h1>
      <p>
        y soy <b>autodidácta</b>. Con 13 años descubrí la programación, y desde entonces no he parado de aprender.
      </p>
      <p>
        Además de la programación, tengo conocimientos en Ciberseguridad, Redes y Sistemas Operativos, pero mi mayor virtud es la perseverancia y habilidad para aprender lo que tenga por delante.
      </p>
      <p>
        ¡Pásate por mi cuenta de <a href="https://github.com/alejandrocora" target="_blank">GitHub</a> <AiFillGithub /> para ver mis proyectos!
      </p>
    </div>
  );
}

export default Home;