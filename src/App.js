import "./App.css";
import Counter from "./components/counter";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <div className="ceneter">
          <h3> Redux with hook </h3>
          <Counter />
        </div>
      </Container>

    </>
  );
}

export default App;
