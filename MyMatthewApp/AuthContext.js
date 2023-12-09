import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    // Replace this with your actual authentication logic, e.g., calling a backend API
    // For demo purposes, let's assume a simple username/password check
    if (username === 'user' && password === 'password') {
      setUser({ username });
      return true; // Login successful
    }

    return false; // Login failed
  };

  const register = async (username, email, password) => {
    // Replace this with your actual registration logic, e.g., calling a backend API
    // For demo purposes, let's assume registration is successful
    setUser({ username });
    return true; // Registration successful
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
