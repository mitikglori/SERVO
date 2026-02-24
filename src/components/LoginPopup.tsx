import React, { useState } from 'react';
import users from '../db.json';

interface LoginPopupProps {
  onClose: () => void;
  isClosing: boolean;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose, isClosing }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.users.find(u => u.username === username && u.password === password);
    if (user) {
      console.log('Login successful');
      onClose();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={`login-popup ${isClosing ? 'slide-out' : 'slide-in'}`}>
      <div className="login-popup-content">
        <form onSubmit={handleLogin}>
          {error && <p className="text-danger">{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
