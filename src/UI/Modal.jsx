import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import inImage from "../assets/linkedin.svg";
import gitImage from "../assets/github.svg";
import gmailImage from "../assets/gmail.svg";
import whatsappImage from "../assets/whatsapp.svg";

import { useEffect, useRef } from "react";

const Modal = ({ open }) => {
  const dialog = useRef();
  useEffect(() => {
    dialog.current.showModal();
  }, [dialog]);
  return createPortal(
    <dialog className={classes.modal} ref={dialog} onClose={() => open(false)}>
      <div className={classes.item}>
        <h1>Do check out my works and connect me through these platforms</h1>
      </div>
      <div className={classes.item}>
        <img src={inImage} alt="nothing" />

        <h2>
          <a
            className={classes.link}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ankit-mishra-a0874619a"
          >
            Click to find
          </a>
        </h2>
      </div>
      <div className={classes.item}>
        <img src={gitImage} alt="nothing" />
        <h2>
          <a
            className={classes.link}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ankit0698"
          >
            Click to find
          </a>
        </h2>
      </div>
      <div className={classes.item}>
        <img src={gmailImage} alt="nothing" />
        <h2>ankit0698@gmail.com</h2>
      </div>
      <div className={classes.item}>
        <img src={whatsappImage} alt="nothing" />
        <h2>9873407058</h2>
      </div>

      <button onClick={() => open(false)}>Close</button>
    </dialog>,
    document.getElementById("modal")
  );
};
export default Modal;
