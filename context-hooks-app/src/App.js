import ThemeProvider from '../contexts/ThemeContext';
import LanguageProvider from './contexts/LanguageContext';

import PageContent from './components/PageContent';
import NavBar from './components/NavBar';
import Form from './components/Form';

import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';

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
