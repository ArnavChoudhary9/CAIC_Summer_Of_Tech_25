import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//  Hooks
import { UserProvider } from '@/hooks/use-user';
import { ThemeProvider } from '@/hooks/use-theme';

//  Pages
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';  
import Logout from '@/pages/Logout';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
