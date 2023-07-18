import { useState } from "react";
import { useAuth } from "../../hooks/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn, register } from "../../redux/auth/operations";
import css from './loginPage.module.css';

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { isAuthError } = useAuth();

    const handleSignupNavigate = () => {
        navigate('/signup');
    }
    
    const handleLogin = () => {
        dispatch(logIn({ email, password }));
    };

    return (
        <section>
            <div className={css.formBox}>
                <div className={css.formValue}>
                  <form>
                    <h2>Login</h2>
                    <div className={css.inputBox}>

                        <input type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required/>
                        <label for="">email</label>
                    </div>
                    <div className={css.inputBox}>
                          <input type="password" 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required/>
                          <label for="">password</label>
                      </div>
                    <div className={css.forget}>
                        <input type="checkbox" />Remember Me
                      <a href="https://www.google.com/"></a>
                    </div>
                    {isAuthError && <div>Error occurred while logging in</div>}
                    <button onClick={handleLogin} className={css.loginBtn}>Log in</button>
                    <div className={css.register}>
                      <p>Don't have a account <button onClick={handleSignupNavigate}>Register</button></p>
                    </div>
                  </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;