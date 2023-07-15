import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { register } from '../../redux/auth/operations';
import { useAuth } from 'hooks/index'; 
// import PasswordStrengthBar from 'react-password-strength-bar';

import css from './AuthPages.module.css';

function AuthPage() {
    const [pageType, setPageType] = useState('login');
    const [password, setPassword] = useState('');

    console.log(password);

    const { isAuthError } = useAuth();

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
  return <div style={{margin: 50}}>
      <div>Login</div>
      <input ref={loginEmailRef} type="email" placeholder="Enter your email" /> <br/>
      <input 
          ref={loginPasswordRef} 
          type="password" 
          placeholder="Enter your password" 
          onChange={(event) => {setPassword(event.target.value)}}
          value={password}
      /> <br/>
      {/* <PasswordStrengthBar password={password} /> */}
      {isAuthError && <h2>Error while loggin in</h2>}
      <button onClick={handleLogin}>Login</button> <br/> <br/>
      <button onClick={() => setPageType('register')}>Go to register!</button>
  </div>
}

if (pageType === 'register') {
  return <div style={{margin: 50}}>
      <div>Register</div>
      <input ref={registerNameRef} type="text" placeholder="Enter your name" /> <br/>
      <input ref={registerEmailRef} type="email" placeholder="Enter your email" /> <br/>
      <input ref={registerPasswordRef} type="password" placeholder="Enter your password" /> <br/>
      {isAuthError && <h2>Error while register</h2>}
      <button onClick={handleSignup}>Sign up</button> <br/> <br/>
      <button onClick={() => setPageType('login')}>Go to login!</button>
  </div>
}
  
  
}

export default AuthPage;


// const handleSignup = () => {
//   const email = registerEmailRef.current.value;
//   const password = registerPasswordRef.current.value;
//   const name = registerNameRef.current.value;
//   dispatch(register({ email, password, name }));
// }

// if (pageType === 'login') {
//   return <section>
//     <div className={css.formBox}>
//       <div className={css.formValue}>
//           <form action="">
//             <h2>Login</h2>
//             <div className={css.inputBox}>
//               <input 
//                 ref={loginEmailRef} 
//                 type="email" 
//                 autoComplete='off'
//                 />
//               <label for="">Email</label>
//             </div>
//             <div className={css.inputBox}>
//               <input 
//                   ref={loginPasswordRef} 
//                   type="password" 
//                   onChange={(event) => {
//                     setPassword(event.target.value)}}
//                   value={password}
//                   autoComplete='off'
//               />
//               {/* <PasswordStrengthBar password={password} /> */}
//                <label for="">Password</label>
//            </div>
//             <div className={css.remember}>
//               <label for=''><input type="checkbox" />Remember Me</label>
//               <a href='#'>Forget Password</a>
//             </div>
//             <button className={css.loginButton} onClick={handleLogin}>Login</button><br/>
//           </form>
//           <div>I dont have account<button className={css.registerButton} onClick={() => setPageType('register')}><p>register</p></button></div>
//       </div>    
//     </div>
    
// </section>

// }

// if (pageType === 'register') {
//   return <section>
//       <div className={css.formBox}>
//         <div className={css.formValue}>
//             <form>
//                 <h2>Register</h2>
//                 <div className={css.inputBox}>
//                   <input
//                    ref={registerNameRef} 
//                    type="text"
//                    autoComplete='off'
//                    />
//                   <label fro="">Name</label>
//                 </div>
//                 <div className={css.inputBox}>
//                   <input ref={registerEmailRef} type="email"  autoComplete='off'/>
//                   <label fro="">Email</label>
//                 </div>
//                 <div className={css.inputBox}>
//                   <input ref={registerPasswordRef} type="password"  autoComplete='off'/>
//                   <label fro="">Name</label>
//                 </div>
//                 <button className={css.loginButton} onClick={handleSignup}>Sign up</button>
//             </form>
//              <div>Alredy have account <button className={css.registerButton} onClick={() => setPageType('login')}><p>Go to login!</p></button></div>
//           </div>
//     </div>
//   </section>
// }


// if (pageType === 'login') {
//   return <div style={{margin: 50}}>
//       <div>Login</div>
//       <input ref={loginEmailRef} type="email" placeholder="Enter your email" /> <br/>
//       <input 
//           ref={loginPasswordRef} 
//           type="password" 
//           placeholder="Enter your password" 
//           onChange={(event) => {setPassword(event.target.value)}}
//           value={password}
//       /> <br/>
//       {/* <PasswordStrengthBar password={password} /> */}
//       <button onClick={handleLogin}>Login</button> <br/> <br/>
//       <button onClick={() => setPageType('register')}>Go to register!</button>
//   </div>
// }

// if (pageType === 'register') {
//   return <div style={{margin: 50}}>
//       <div>Register</div>
//       <input ref={registerNameRef} type="text" placeholder="Enter your name" /> <br/>
//       <input ref={registerEmailRef} type="email" placeholder="Enter your email" /> <br/>
//       <input ref={registerPasswordRef} type="password" placeholder="Enter your password" /> <br/>
//       <button onClick={handleSignup}>Sign up</button> <br/> <br/>
//       <button onClick={() => setPageType('login')}>Go to login!</button>
//   </div>
// }