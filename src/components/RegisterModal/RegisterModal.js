import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useForm } from "../../hooks/useForm";
import {
  RegisterValidation,
  RegisterEmailValidation,
  RegisterPasswordValidation,
  RegisterNameValidation,
} from "../../utils/validation";

function RegisterModal({
  isOpen,
  onClose,
  switchToSignIn,
  isActive,
  handleRegister,
}) {
  const {
    values,
    handleChange,
    setValues,
    isFormValid,
    setIsFormValid,
    isInvalid,
  } = useForm({
    email: "",
    password: "",
    name: "",
  });

  React.useEffect(() => {
    if (isActive) {
      setValues({
        email: "",
        password: "",
        name: "",
      });
    }
  }, [isActive, setValues]);

  React.useEffect(() => {
    if (Object.values(isInvalid).every((item) => item === false)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isInvalid, setIsFormValid]);

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
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
      <label className="register__email-label" htmlFor="email">
        Email
      </label>
      <input
        className="register__email-input"
        id="email"
        value={values.email}
        name="email"
        pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
        autoComplete="off"
        placeholder="Enter email"
        onChange={handleChange}
        minLength={1}
        maxLength={30}
        required
      />
      {isInvalid.email && (
        <ErrorMessage
          errorMessage={"Invalid email address"}
          className={"error-message error-message__register-email"}
        />
      )}
      <label className="register__password-label">Password</label>
      <input
        className="register__password-input"
        id="password"
        value={values.password}
        name="password"
        autoComplete="off"
        placeholder="Enter password"
        onChange={handleChange}
        minLength={4}
        maxLength={35}
        required
      />
      {isInvalid.password && (
        <ErrorMessage
          errorMessage={"Invalid password"}
          className={"error-message error-message__register-password"}
        />
      )}
      <label className="register__name-label">Username</label>
      <input
        className="register__name-input"
        type="text"
        id="name"
        name="name"
        value={values.name}
        autoComplete="off"
        placeholder="Enter your username"
        onChange={handleChange}
        minLength={1}
        maxLength={30}
        required
      />
      {isInvalid.name && (
        <ErrorMessage
          errorMessage={"Invalid username"}
          className={"error-message error-message__register-username"}
        />
      )}
      <p className="register__switch" onClick={switchToSignIn}>
        or <span className="register__switch-signup">Sign in</span>
      </p>
    </PopupWithForm>
  );
}

export default RegisterModal;
