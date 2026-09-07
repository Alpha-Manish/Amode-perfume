import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);
const USERS_KEY = 'amode_users';
const SESSION_KEY = 'amode_user';

const readStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => readStorage(SESSION_KEY, null));

  const login = (email, password) => {
    const users = readStorage(USERS_KEY, []);
    const foundUser = users.find((storedUser) => storedUser.email === email && storedUser.password === password);

    if (!foundUser) {
      return { success: false, message: 'Incorrect email or password.' };
    }

    const sessionUser = { name: foundUser.name, email: foundUser.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return { success: true };
  };

  const register = (name, email, password) => {
    const users = readStorage(USERS_KEY, []);

    if (users.some((storedUser) => storedUser.email === email)) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser = { name, email, password };
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    localStorage.setItem(SESSION_KEY, JSON.stringify({ name, email }));
    setUser({ name, email });
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);