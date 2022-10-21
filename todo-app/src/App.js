import './App.css';
import { TodoProvider } from './context/TodoContext';

import Header from "./components/Header";
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
