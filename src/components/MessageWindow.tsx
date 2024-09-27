import React from "react";
import styles from "../style/MessageWindow.module.css";

export const MessageWindow: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="container-window">
        <div className={styles.containerWindow__message}>Test Testああ</div>
        <div className="container-window__action"></div>
      </div>

      <div>test</div>
    </div>
  );
};
