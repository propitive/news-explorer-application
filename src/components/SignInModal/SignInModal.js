import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useForm } from "../../hooks/useForm";

function SignInModal({
  handleLogin,
  isActive,
  isIncorrectCredentials,
  isLoading,
  isOpen,
  onClose,
  switchToRegister,
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
  });

  React.useEffect(() => {
    if (Object.values(isInvalid).every((item) => item === false)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isInvalid, setIsFormValid]);

  React.useEffect(() => {
    if (isActive) {
      setValues({
        email: "",
        password: "",
      });
    }
  }, [isActive, setValues]);

  function handleSubmit(e) {
    handleLogin(values);
    e.preventDefault();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Sign in"
      buttonText={isLoading ? "Signing in..." : "Sign in"}
      isValid={isFormValid}
    >
      <label className="signin__email-label">Email</label>
      <input
        className="signin__email-input"
        type="email"
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
          className={"error-message error-message__signin-email"}
        />
      )}
      <label className="signin__password-label">Password</label>
      <input
        className="signin__password-input"
        type="password"
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
          className={`error-message error-message__signin-password`}
        />
      )}
      {isIncorrectCredentials && (
        <ErrorMessage
          errorMessage={"Incorrect username and/or password"}
          className={`error-message error-message__signin-incorrect-credentials`}
        />
      )}
      <p className="signin__switch" onClick={switchToRegister}>
        or <span className="signin__switch-signup">Sign up</span>
      </p>
    </PopupWithForm>
  );
}

export default SignInModal;
