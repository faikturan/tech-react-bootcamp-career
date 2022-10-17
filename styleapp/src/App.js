import styles from "./App.module.css";

import Users from "./components/Users/Users";
import Form from "./components/Form/Form";


function App() {
  return (
    <div className={styles.App}>
    <h2 className={styles.title}>Title</h2>
    <Users />
    <Form />
    </div>
  );
}

export default App;
