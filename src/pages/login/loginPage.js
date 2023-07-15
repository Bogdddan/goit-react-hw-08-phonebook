import { useState } from "react";
import { useAuth } from "hooks/index";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

function LoginPage() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    comst [email, setEmail] = useState('');

    const { isAuthError } = useAuth();

    const handleLogin = () => {
      dispatch(logIn({email, password}))
    }
    

  return(
    <>
      <div style={{margin: 50}}>
        <div>Login</div>
          <input 
            type="email"
            placeholder="Enter your email" 
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            /> <br/>
          <input 
            type="password" 
            placeholder="Enter your password" 
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          /> <br/>
        {/* <PasswordStrengthBar password={password} /> */}
        {isAuthError && <h2>Error while loggin in</h2>}
        <button onClick={handleLogin}>Login</button> <br/> <br/>
        <button>Go to register!</button>
      </div>
    </>
  )

}

export default LoginPage;