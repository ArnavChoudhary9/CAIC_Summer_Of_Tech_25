import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Try deleting the 'token' cookie with various attributes
    Cookie.remove('token', { path: '/', sameSite: 'Strict' });

    // Redirect to /login
    navigate('/login', { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
