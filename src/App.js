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
      </Container>

    </>
  );
}

export default App;
