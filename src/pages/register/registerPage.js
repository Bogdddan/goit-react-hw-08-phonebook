import { useState } from "react";
import { useAuth } from "../../hooks/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
// import PasswordStrengthBar from 'react-password-strength-bar';
import css from '../login/loginPage.module.css';

function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isAuthError } = useAuth();

    const handleLoginNavigate = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        dispatch(register({ email, password, name }));
    };

    return (
      <section>
        <div className={css.formBox}>
            <div className={css.formValue}>
              <form>
                <h2>Register</h2>
                <div className={css.inputBox}>
                    <input type="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required/>
                    <label for="">Name</label>
                </div>
                <div className={css.inputBox}>
                    <input type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required/>
                    <label for="">Email</label>
                </div>
                <div className={css.inputBox}>
                      <input type="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required/>
                      <label for="">Password</label>
                  </div>
                <div className={css.forget}>
                    <input type="checkbox" />Remember Me
                </div>
                {isAuthError && <div>Error occurred while log in</div>}
                <button onClick={handleRegister} className={css.loginBtn}>Log in</button>
                <div className={css.register}>
                  <p>Allredy have account<button onClick={handleLoginNavigate}>Log in</button></p>
                </div>
              </form>
            </div>
        </div>
    </section>
    )
}

export default RegisterPage;