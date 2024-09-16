import { User } from '@/lib/type';
import React, { useContext, createContext, useState } from 'react';

// Define the context interface
interface AuthContextType {
  user: User | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create the AuthContext with a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook for using the AuthContext
export const useAuth = () =>  useContext(AuthContext)

// AuthProvider component to wrap around the app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signup = async (email: string, password: string) => {
    // Implement signup logic
  };

  const login = async (email: string, password: string) => {
    // Implement login logic
  };

  const logout = async () => {
    // Implement logout logic
  };

  const value: AuthContextType = {
    user,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};