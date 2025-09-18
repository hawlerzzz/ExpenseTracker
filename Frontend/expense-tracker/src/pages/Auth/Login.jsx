import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Login form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <AuthLayout>
      <div className='lgtw-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          please enter your details to log in
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email"
            type="text"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <button type="submit" className="mt-4 btn btn-primary">Login</button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;