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
          <h2>Test-2 Checking..</h2>
          <ul>
            <li>a. Git checkout from test-1 branch to test-2 branch</li>
            <li>b. Git fetch</li>
            <li>c. Git merge origin/test-1 branch</li>
          </ul>
          <Counter />
        </div>
      </Container>

    </>
  );
}

export default App;
