import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { TodoProvider } from "./context/TodoContextProvider";

function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <h1>To-Do List (Context API)</h1>
        <Form />
        <List />
      </div>
    </TodoProvider>
  );
}

export default App;
