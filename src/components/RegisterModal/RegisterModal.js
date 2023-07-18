import { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {
  RegisterValidation,
  RegisterEmailValidation,
  RegisterPasswordValidation,
  RegisterNameValidation,
} from "../../utils/validation";

function RegisterModal({ isOpen, onClose, onRegister, switchToSignIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  useEffect(() => {
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email);

    setIsFormValid(RegisterValidation(email, password, name));
  }, [email, password, name]);

  useEffect(() => {
    setIsEmailValid(RegisterEmailValidation(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(RegisterPasswordValidation(password));
  }, [password]);

  useEffect(() => {
    setIsNameValid(RegisterNameValidation(name));
  }, [name]);

  useEffect(() => {
    setIsPasswordValid(true);
    setIsEmailValid(true);
    setIsNameValid(true);
  }, []);

  //   const emailValidationClassName = isEmailValid
  //     ? "register__email-validation-valid"
  //     : "register__email-validation-invalid"

  const emailValidationClassName = "register__email-validation-invalid";

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Sign up"
      buttonText="Sign up"
      isValid={isFormValid}
    >
      <label className="register__email-label">Email</label>
      <input
        className="register__email-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <label className="register__password-label">Password</label>
      <input
        className="register__password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <label className="register__name-label">Username</label>
      <input
        className="register__name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Username"
      />
      <h2 className={emailValidationClassName}>This email is not available</h2>
      <p className="signin__switch" onClick={switchToSignIn}>
        or <span className="signin__switch-signup">Sign in</span>
      </p>
    </PopupWithForm>
  );
}

export default RegisterModal;
