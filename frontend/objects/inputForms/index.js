import styles from "./inputForms.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "next/image";

export const InputForms = (props) => {
  if (props.logInForm) {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="logInForm.Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
            isInvalid={props.invalid}
          />
        </Form.Group>

        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-3" controlId="logInForm.Password">
          <Form.Control
            type={props.passwordShown ? "text" : "password"}
            placeholder=""
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
            isInvalid={props.invalid}
          />
          <InputGroup.Text>
            <Image
              src="/passwordView.png"
              alt=""
              height="15px"
              width="20px"
              onClick={props.togglePassword}
            />
          </InputGroup.Text>
        </InputGroup>
      </Form>
    );
  } else if (props.signUpForm) {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="signUpForm.Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
            isValid={props.usernameValid}
            
          />
        </Form.Group>

        <div>
        <Form.Label>Password</Form.Label>
        <lable className={styles.passwordDetails}>Your password must contain a capital letter, a number and a symbol.</lable>
        </div>
        <InputGroup className="mb-3" controlId="signUpForm.Password">
          <Form.Control
            type={props.passwordShown ? "text" : "password"}
            placeholder=""
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
            isValid={props.passwordValid}
            
          />
          
          <InputGroup.Text>
            <Image
              src="/passwordView.png"
              alt=""
              height="15px"
              width="20px"
              onClick={props.togglePassword}
            />
          </InputGroup.Text>
        </InputGroup>

        <Form.Group className="mb-3" controlId="signUpForm.DateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder=""
            value={props.dateOfBirth}
            onChange={(e) => props.setDateOfBirth(e.target.value)}
            isValid={props.ageValid}
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signUpForm.Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            isValid={props.emailValid}
            
          />
        </Form.Group>
      </Form>
    );
  }
};
