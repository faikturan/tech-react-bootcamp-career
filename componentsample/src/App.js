import './App.css';
import Counter from './components/Counter';
//import Form from './components/Form';
//import FormUsers from './components/FormUsers';
//import User from './components/User';
//import Container from './components/Container';
// import Person from './components/Person';

function App() {
  return (
    <div className="App">
     {/* <h1>App Container</h1>
     <Container /> */}

     {/* <User name="Fatih" surname="Yılmaz" age={28} /> */}
     {/* <Person /> */}
     {/* <User /> */}
     {/* <FormUsers /> */}
     {/* <Form /> */}

     <Counter startWith={10}/>
    </div>
  );
}

export default App;
