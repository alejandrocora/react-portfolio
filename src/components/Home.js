import profile_picture from '../images/foto_perfil.jpg';
import { AiFillGithub } from "react-icons/ai"
import { Trans } from 'react-i18next';

function Home() {
  return (
    <div id="home" className="content-container intro">
      <img className='profile-image' src={profile_picture} />
      <h1>
        <Trans i18nKey="home.title" />
      </h1>
      <p>
        <Trans i18nKey="home.p1" />
      </p>
      <p>
        <Trans i18nKey="home.p2" />
      </p>
      <p>
        <Trans i18nKey="home.p3" components={{ image: <AiFillGithub />, O: <a href="https://github.com/alejandrocora" target="_blank" rel="noopener noreferrer" /> }} />
      </p>
    </div>
  );
}

export default Home;