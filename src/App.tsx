import './App.scss';
import Home from './Home';
import { UserProvider } from './userContext';






const App = () => {

  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
};

export default App;