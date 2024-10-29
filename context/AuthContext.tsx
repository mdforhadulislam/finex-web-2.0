"use client"
import { createContext, useContext, useEffect, useState } from "react";

interface AuthDataType {
  isUserLoggedIn: boolean;
  userRole: string;
  token: string;
  user: UserDataType | null;
  loginHandler: (token: string, user: UserDataType) => void;
  logoutHandler: () => void;
}

interface UserDataType {
  name: string;
  phone: string;
  email: string;
  role: string;
  status: string;
}

export const AuthContext = createContext<AuthDataType>({
  isUserLoggedIn: false,
  userRole: "",
  token: "",
  user: null,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<UserDataType | null>(null);

  useEffect(() => {
    const storedToken = window?.localStorage?.getItem("finex-token") || "";
    const storedUser = JSON.parse(window?.localStorage?.getItem("finex-user") || "{}")

    setToken(storedToken);
    setUser(storedUser);
  }, []);

  const isUserLoggedIn = !!token;
  const userRole = user?.role || "";

  const logoutHandler = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("finex-token");
    localStorage.removeItem("finex-user");
  };

  const loginHandler = (newToken: string, newUser: UserDataType) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem("finex-token", newToken);
    localStorage.setItem("finex-user", JSON.stringify(newUser));
  };

  const authContext: AuthDataType = {
    isUserLoggedIn,
    userRole,
    user,
    token,
    loginHandler,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;