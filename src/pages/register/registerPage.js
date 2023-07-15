import { useState } from "react";
import { useAuth } from "hooks/index";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const { isAuthError } = useAuth();

  const handleSignup = () => {
    dispatch(register({name, email, password}))
  }

  const handleRegNav = () => {
    navigate('/login')
  }

    return (
        <div style={{margin: 50}}>
        <div>Register</div>
          <input
            type="text" 
            placeholder="Enter your name"
            value={name} 
            onChange={(event) => setName(event.target.value)}
          /> <br/>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          /> <br/>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          /> <br/>
        {isAuthError && <h2>Error while register</h2>}
        <button onClick={handleSignup}>Sign up</button> <br/> <br/>
        <button onClick={handleRegNav}>Go to login!</button>
      </div>
    )
}

export default RegisterPage;