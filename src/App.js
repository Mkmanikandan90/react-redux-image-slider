import "./App.css";
import Counter from "./components/counter";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <div className="ceneter">
          <h2>Test-1</h2>
          <h3> Redux with hook </h3>
          <Counter />
        </div>
      <h1>Admin changes</h1>
      <h1>My local changes</h1>
      </Container>

    </>
  );
}

export default App;
