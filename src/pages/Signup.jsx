import React, { useState } from "react";
import "../scss/Signup.scss";
import { useSignup } from "../hooks/useSignup";
import { RxDotFilled } from 'react-icons/rx';
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup, isLoading, error} =  useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password)
      if(!error){
        setEmail('')
        setPassword('')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth_form">
      <div className="form_container">
        <div className="form_card">
          <form onSubmit={handleSubmit}>
            {error&&
            <div className="error">
              <p><span><RxDotFilled/></span>{error}</p>
            </div>
            }
            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button disabled={isLoading} className="btn-button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
