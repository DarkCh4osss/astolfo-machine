import React, {useEffect} from 'react';
import Slot from './components/Slot';
import TitleBar from './components/TitleBar';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/isLogged';
import { auth } from './Firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])

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