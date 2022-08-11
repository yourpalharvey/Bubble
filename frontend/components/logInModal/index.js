import styles from "./logInModal.module.css";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";

import { InputForms } from "../../objects/inputForms";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { handleLogin } from "../../logic/auth/index";

export const LogInModal = (props) => {
  // handling form functions
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler, shows password as text.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Modal show={props.showLogin} onHide={props.handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputForms
            passwordShown={passwordShown}
            togglePassword={togglePassword}
            setUsername={setUsername}
            setPassword={setPassword}
            logInForm={true}
          />
          <a href="/404" className={styles.formLink}>
            Forgotten your password?
          </a>
          <div className="d-grid gap-2 mt-4 mb-2">
            <ButtonBootstrap
              primaryWide={true}
              text="Log In"
              onClick={
                (() => handleLogin(username, password), props.handleCloseLogin)
              }
              type="submit"
            ></ButtonBootstrap>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
