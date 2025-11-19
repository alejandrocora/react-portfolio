import { AiFillLinkedin, AiOutlineMail, AiOutlineCopy } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { Trans } from 'react-i18next';
import { useState } from 'react';

function Contact() {

  const [copyData, setCopyData] = useState([false]);

  function copyToClipboard(text, index) {
    navigator.clipboard.writeText(text);
    setCopyData((prevState) => {
      const newState = [...prevState]; 
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
      <h1 className="main-title"><Trans i18nKey="contact" /></h1>
      <div id="contact" className="contact-container">
        <div>
          <AiOutlineMail className="logo" />
          <p>
            <a target="_blank" href="mailto:alzapicolara@gmail.com">alzapicolara@gmail.com</a>
            {copyData[0] ? (
                <TiTickOutline />
              ) : (
                <AiOutlineCopy className="copyLogo" onClick={() => copyToClipboard('alzapicolara@gmail.com', 0)} />
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
