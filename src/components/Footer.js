import { Trans } from 'react-i18next';

function Footer() {
  return (
    <div className="footer">
      <p><Trans i18nKey="footer.p1" /></p>
      <p><Trans i18nKey="footer.p2" components={ { O: <a href="https://github.com/alejandrocora/react-portfolio.git" target="_blank" /> } } /></p>
    </div>
  )
}

export default Footer;