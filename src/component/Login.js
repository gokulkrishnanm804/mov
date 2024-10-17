import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ mobileNumber: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can call an CAPI to log in the user
    console.log(credentials);
    navigate('/booking');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;