import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { UserProvider } from "@/hooks/use-user";

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import Logout from "@/pages/Logout";

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
