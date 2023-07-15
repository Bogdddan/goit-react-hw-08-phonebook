import { useState } from "react";
import { useAuth } from "hooks/index";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

function RegisterPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { isAuthError } = useAuth();

  const handleSignup = () => {
    dispatch(register({name, email, password}))
  }

    return (
        <div style={{margin: 50}}>
        <div>Register</div>
          <input ref={registerNameRef}
            type="text" 
            placeholder="Enter your name" 
          /> <br/>
          <input 
            type="email" 
            placeholder="Enter your email" 
          /> <br/>
          <input 
            type="password" 
            placeholder="Enter your password" 
          /> <br/>
        {isAuthError && <h2>Error while register</h2>}
        <button onClick={handleSignup}>Sign up</button> <br/> <br/>
        <button>Go to login!</button>
      </div>
    )
}

export default RegisterPage;