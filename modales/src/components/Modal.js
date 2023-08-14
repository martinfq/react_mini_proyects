import { useRef } from "react";

import styles from "./modal.module.scss";

export default function Modal({ children, title, root }) {
  const ref = useRef(null);

  function callback(e) {
    
    root.unmount();
    document.querySelector('#modal').remove();
    //ref.current.removeEventListener("animationend",callback);
  }
  function handleClick() {
    ref.current.classList.add(styles.fadeOut);
    ref.current.addEventListener("animationend", callback, { once: true });
  }
  return (
    <div ref={ref} className={styles.modalContainer}>
      <div className={styles.modalView}>
        <div className={styles.modalHeader}>
          <div>{title}</div>
          <div>
            <button onClick={handleClick} className={styles.closeButton}>
              X
            </button>
          </div>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}
