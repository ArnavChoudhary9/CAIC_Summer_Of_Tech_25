import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/hooks/use-user'; // Adjust the import path as necessary

export default function Logout() {
  const { updateUser } = useUser(); // Fetch user profile to update state after logout
  const navigate = useNavigate();
  
  // Clear user data and redirect to login page
  useEffect(() => {
    const logout = async () => {
      try {
        const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`;
        const response = await fetch(backendUrl, {
          method: 'POST',
          credentials: 'include', // Include cookies for session management
        });
        if (!response.ok) {
          console.error('Logout failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error logging out:', error);
      } finally {
        updateUser();
        // Redirect to login page after logout
        navigate('/login', { replace: true });
      }
    }
    logout();
  }, [navigate, updateUser]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-muted-foreground">Logging out...</div>
    </div>
  );
}
