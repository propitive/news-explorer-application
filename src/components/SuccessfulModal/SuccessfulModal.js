function SuccessfulModal({ isOpen, onClose, switchToSignIn }) {
  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal__open" : ""}`}
      onClick={handleCloseOnOverlayClick}
    >
      <div className="success">
        <h2 className="success__text">Registration successfully completed!</h2>
        <h2 className="success__signin" onClick={switchToSignIn}>
          Sign in
        </h2>
        <button
          className="modal__button-close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default SuccessfulModal;
