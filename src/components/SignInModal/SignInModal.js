import { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {
  SignInValidation,
  SignInEmailValidation,
  SignInPasswordValidation,
} from "../../utils/validation";

function SignInModal({ isOpen, onClose, onSignIn, switchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email);

    setIsFormValid(SignInValidation(email, password));
  }, [email, password]);

  useEffect(() => {
    setIsPasswordValid(SignInPasswordValidation(password));
  }, [password]);

  useEffect(() => {
    setIsEmailValid(SignInEmailValidation(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(false);
    setIsEmailValid(true);
  }, []);

  const emailInputClassName = isEmailValid
    ? "signin__email-input"
    : "signin__email-input-invalid";

  const emailValidationClassName = isEmailValid
    ? "signin__email-validation-valid"
    : "signin__email-validation-invalid";

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Sign in"
      buttonText="Sign in"
      isValid={isFormValid}
    >
      <label className="signin__email-label">Email</label>
      <input
        className={emailInputClassName}
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
        minLength={1}
        maxLength={30}
      />
      <h2 className={emailValidationClassName}>Invalid email address</h2>
      <label className="signin__password-label">Password</label>
      <input
        className="signin__password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        required
        minLength={4}
        maxLength={35}
      />
      <p className="signin__switch" onClick={switchToRegister}>
        or <span className="signin__switch-signup">Sign up</span>
      </p>
    </PopupWithForm>
  );
}

export default SignInModal;
