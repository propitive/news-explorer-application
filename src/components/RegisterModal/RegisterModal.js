import { is } from "@babel/types";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { on } from "events";

function RegisterModal({ isOpen, onClose, onRegister, switchToSignIn }) {

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
            <label>Email</label>
            <input />
            <label>Password</label>
            <input />
            <label>Username</label>
            <input />
            <p onClick={switchToSignIn}>or Sign in</p>
        </PopupWithForm>
    )
}

export default RegisterModal;