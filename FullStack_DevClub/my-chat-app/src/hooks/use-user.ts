import {
  createContext,
  createElement,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export interface User {
  username: string;
  email: string;
}
export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const fetchProfile = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/profile`, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      return {
        username: data.user.username,
        email: data.user.email,
      };
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setUser(await fetchProfile());
      setLoading(false);
    })();
  }, []);

  return createElement(
    UserContext.Provider,
    { value: { user, setUser, loading } },
    children
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
