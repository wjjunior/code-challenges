import "./App.css";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h1>Cadastro</h1>
      <RegisterForm />
    </div>
  );
}

export default App;
