import './App.css';
import ChangeBtn from './components/ChangeBtn';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import Container from './components/Container';

import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";



function App() {
  return (
  <ThemeProvider>
  <UserProvider>
    <Container />

    <ComponentA />

    <hr />

    <ComponentB />

    <br />
    <br />

    <ChangeBtn />

  </UserProvider>
  </ThemeProvider>
  );
}

export default App;
