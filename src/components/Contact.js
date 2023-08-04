import { AiFillLinkedin, AiOutlinePhone, AiOutlineMail, AiOutlineCopy, AiOutlineWhatsApp } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { Trans } from 'react-i18next';
import { useState, useEffect } from 'react';

function Contact() {

  //<AiOutlineCopy className="copyLogo" onClick={() => copyToClipboard('+34 663 300 476', 0)} />, <AiOutlineCopy className="copyLogo" onClick={() => copyToClipboard('alzapicolara@gmail.com', 1)}/>

  const [copyData, setCopyData] = useState([false, false]);

  function copyToClipboard(text, index) {
    navigator.clipboard.writeText(text);
    setCopyData((prevState) => {
      const newState = [...prevState]; // workaround shallow comparison
      newState[index] = true;
      return newState;
    });
    setTimeout(() => {
      setCopyData((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }, 750)
  }

  return (
    <div>
      <hr />
      <h1 className="section_title"><Trans i18nKey="contact" /></h1>
      <div id="contact" className="contact-container">
          <div>
            <AiOutlinePhone className="logo" />
            <p>
              <a href="tel:+34663300476">+34 663 300 476</a>
              {copyData[0] ? (
                  <TiTickOutline />
                ) : (
                  <AiOutlineCopy className="copyLogo" onClick={() => copyToClipboard('+34 663 300 476', 0)} />
                )
              }
              <a target="_blank" href="https://wa.me/+34663300476">
              <AiOutlineWhatsApp className="copyLogo" /></a>
            </p>
          </div>
          <div>
            <AiOutlineMail className="logo" />
            <p>
              <a target="_blank" href="mailto:alzapicolara@gmail.com">alzapicolara@gmail.com</a>
              {copyData[1] ? (
                  <TiTickOutline />
                ) : (
                  <AiOutlineCopy className="copyLogo" onClick={() => copyToClipboard('alzapicolara@gmail.com', 1)} />
                )
              }
            </p>
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