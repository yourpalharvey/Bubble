import styles from "./signUpCard.module.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React, { useState } from "react";

import { ButtonCustom } from "../../objects/buttonCustom";
import { Shadow } from "../../objects/shadow";
import { InputForms } from "../../objects/inputForms";
import { handleSignup } from "../../logic/auth";

export const SignUpCard = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler, shows password as text.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Container className={styles.signUpCardContainer}>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card>
              <Card.Header closeButton>
                <Card.Title>Sign up</Card.Title>
              </Card.Header>

              <Card.Body>
                <InputForms
                  setUsername={setUsername}
                  setPassword={setPassword}
                  setDateOfBirth={setDateOfBirth}
                  setEmail={setEmail}
                  passwordShown={passwordShown}
                  togglePassword={togglePassword}
                  signUpForm={true}
                />
              </Card.Body>

              <Card.Body className="">
                <p>
                  By clicking Sign up, you are agreeing to Bubble’s -
                  <a href="/404" className={styles.formLink}>
                    Terms of service
                  </a>
                  - and are acknowledging our -
                  <a href="/404" className={styles.formLink}>
                    Privacy Notice.
                  </a>
                </p>
              </Card.Body>

              <Card.Body>
                <ButtonCustom
                  text="Sign up"
                  colourWide={true}
                  onClick={handleSignup(username, password, dateOfBirth, email)}
                  type="submit"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
