import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row">
            <label htmlFor="pwd">Password</label>
            <input
              placeholder="Enter your password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .box {
          width: 100%;
          max-width: 400px;
          padding: 2rem;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
          background-color: #fff;
          border-radius: 8px;
        }
        .box form div {
            margin-bottom: 1rem;
        }
        h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
        }
        label {
          margin-bottom: 0.5rem;
          font-weight: bold;
          color: #555;
        }
        input {
          padding: 0.75rem;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          padding: 0.75rem 1.5rem;
          background-color: #333;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: rgb(115, 158, 122);
        }
      `}</style>
    </div>
  );
}

export default Login;
