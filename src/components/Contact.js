import { AiFillLinkedin, AiOutlinePhone, AiOutlineMail, AiOutlineCopy, AiOutlineWhatsApp } from "react-icons/ai";
import { Trans } from 'react-i18next';

function Contact() {
  function copyToClipboard(t, a) {
    navigator.clipboard.writeText(t);
    alert(a);
  }

  return (
    <div>
      <hr />
      <h1 className="section_title"><Trans i18nKey="contact" /></h1>
      <div id="contact" className="contact-container">
          <div>
            <AiOutlinePhone className="logo" />
            <p><a href="tel:+34663300476">+34 663 300 476</a> <AiOutlineCopy className="copyLogo" onClick={() => copyToClipboard('+34 663 300 476', 'Número copiado.')} /><a target="_blank" href="https://wa.me/+34663300476"><AiOutlineWhatsApp className="copyLogo" /></a></p>
          </div>
          <div>
            <AiOutlineMail className="logo" />
            <p><a target="_blank" href="mailto:alzapicolara@gmail.com">alzapicolara@gmail.com</a> <AiOutlineCopy className="copyLogo" onClick={() => copyToClipboard('alzapicolara@gmail.com', 'Correo copiado.')}/></p>
          </div>
          <div>
            <AiFillLinkedin className="logo" />
            <p><a target="_blank" href="https://www.linkedin.com/in/alejandro-zapico-lara-597716229/">alejandro-zapico...</a></p>
          </div>
      </div>
    </div>
  )
}

export default Contact;