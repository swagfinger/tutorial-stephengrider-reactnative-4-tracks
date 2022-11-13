import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

// helps show nothing until we know where to navigate
const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
