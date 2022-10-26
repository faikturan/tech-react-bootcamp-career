import ThemeProvider from '../contexts/ThemeContext';
import LanguageProvider from '../contexts/LanguageContext';

import PageContent from './PageContent';
import NavBar from './NavBar';
import Form from './Form';

import './App.css';
import ThemeContextProvider from '../contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <PageContent>
        <LanguageProvider>
          <NavBar />
          <Form />
        </LanguageProvider>
      </PageContent>
      </ThemeContextProvider>
  )
}

export default App;
