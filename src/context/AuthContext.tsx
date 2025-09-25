import React, { createContext, useContext, useEffect, useState } from "react";
import { Magic } from "magic-sdk";

type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  loginWithEmail: (email: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ✅ Create Magic instance once
const magic = new Magic(import.meta.env.VITE_MAGIC_PUBLIC_KEY as string);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Check if user is logged in OR handle redirect callback
  useEffect(() => {
    (async () => {
      try {
        // 1. Handle redirect after clicking email link
        if (window.location.search.includes("magic_credential")) {
          const didToken = await magic.auth.loginWithCredential();
          console.log("Magic login callback token:", didToken);
        }

        // 2. Always check login status
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) {
          const info = await magic.user.getInfo();
          setUser({ email: info.email! });
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // ✅ Login with Magic Link (sends email)
  const loginWithEmail = async (email: string) => {
    setLoading(true);
    try {
      await magic.auth.loginWithMagicLink({
        email,
        redirectURI: window.location.origin, // important for redirect flow
      });
    } catch (err) {
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout
  const logout = async () => {
    setLoading(true);
    try {
      await magic.user.logout();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
