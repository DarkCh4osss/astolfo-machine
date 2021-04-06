import React from 'react';
import Slot from './components/Slot';
import TitleBar from './components/TitleBar';
import Login from './pages/Login';
import { auth } from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <TitleBar />
      {user ? (
        <Slot />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;