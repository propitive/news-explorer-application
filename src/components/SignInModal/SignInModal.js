import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {
    SignInValidation,
    SignInEmailValidation,
    SignInPasswordValidation,
}
from "../../utils/validation"

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

    return (
        <PopupWithForm 
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        title="Sign in"
        buttonText="Sign in"
        isValid={isFormValid}
        >
            <label>Email</label>
            <input
                        
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        minLength={1}
                        maxLength={30}
            />
            <label>Password</label>
            <input
                    
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    minLength={4}
                    maxLength={35}
            />
            <p onClick={switchToRegister}>or Sign up</p>
        </PopupWithForm>
    )
}

export default SignInModal;