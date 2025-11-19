import { Trans } from 'react-i18next';

function Home() {
  return (
    <div id="home" className="intro">
      <div>
        <h1>
          <Trans i18nKey="home.title" />
        </h1>
        <p>
          <Trans i18nKey="home.p1" />
        </p>
        <a href="#about" className="view-work-btn">
          <Trans i18nKey="home.viewWork" />
        </a>
      </div>
    </div>
  );
}

export default Home;
