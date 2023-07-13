import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { register } from '../../redux/auth/operations';
// import PasswordStrengthBar from 'react-password-strength-bar';

import css from './AuthPages.module.css';

function AuthPage() {
    const [pageType, setPageType] = useState('login');
    const [password, setPassword] = useState('');

    console.log(password);

    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();
    const registerEmailRef = useRef();
    const registerPasswordRef = useRef();
    const registerNameRef = useRef();

    const dispatch = useDispatch();

    const handleLogin = () => {
        const email = loginEmailRef.current.value;
        const password = loginPasswordRef.current.value;
        dispatch(logIn({ email, password }));
    }

    const handleSignup = () => {
        const email = registerEmailRef.current.value;
        const password = registerPasswordRef.current.value;
        const name = registerNameRef.current.value;
        dispatch(register({ email, password, name }));
    }

    if (pageType === 'login') {
        return <section>
          <div className={css.formBox}>
            <div className={css.formValue}>
                <form action="">
                  <h2>Login</h2>
                  <div className={css.inputBox}>
                    <input 
                      ref={loginEmailRef} 
                      type="email" 
                      autoComplete='off'
                      />
                    <label for="">Email</label>
                  </div>
                  <div className={css.inputBox}>
                    <input 
                        ref={loginPasswordRef} 
                        type="password" 
                        onChange={(event) => {
                          setPassword(event.target.value)}}
                        value={password}
                        autoComplete='off'
                    />
                    {/* <PasswordStrengthBar password={password} /> */}
                     <label for="">Password</label>
                 </div>
                  <div className={css.remember}>
                    <label for=''><input type="checkbox" />Remember Me</label>
                    <a href='#'>Forget Password</a>
                  </div>
                  <button className={css.loginButton} onClick={handleLogin}>Login</button><br/>
                </form>
                <div>I dont have account<button className={css.registerButton} onClick={() => setPageType('register')}><p>register</p></button></div>
            </div>    
          </div>
          
      </section>
      
    }

    if (pageType === 'register') {
        return <div style={{margin: 50}}>
            <div>Register</div>
            <input ref={registerNameRef} type="text" placeholder="Enter your name" /> <br/>
            <input ref={registerEmailRef} type="email" placeholder="Enter your email" /> <br/>
            <input ref={registerPasswordRef} type="password" placeholder="Enter your password" /> <br/>
            <button onClick={handleSignup}>Sign up</button> <br/> <br/>
            <button onClick={() => setPageType('login')}>Go to login!</button>
        </div>
    }
}

export default AuthPage;


{/* <div>Login</div>
                <div>
  
                    <input 
                        ref={loginEmailRef} 
                        type="email" 
                        placeholder="Enter your email" 
                    />
                    <label for="">Email</label>
  
                </div>


                <div>
                  <input 
                      ref={loginPasswordRef} 
                      type="password" 
                      placeholder="Enter your password" 
                      onChange={(event) => {setPassword(event.target.value)}}
                      value={password}
                  />
                  {/* <PasswordStrengthBar password={password} /> */}
              //     <label for="">Password</label>
              //   </div>

              
                // <div>
                //   <label for=''><input type="checkbox" />Remember Me</label>
                //   <a href='#'>Forget Password</a>
                // </div>
              // <button onClick={handleLogin}>Login</button><br/>
              // I dont have account<button onClick={() => setPageType('register')}>register!</button> */}