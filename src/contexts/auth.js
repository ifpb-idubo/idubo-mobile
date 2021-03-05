import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function signIn() {
    setUser({ name: 'Temp User', id: 0 });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthContext, useAuth };
