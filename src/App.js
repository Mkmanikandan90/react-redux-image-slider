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
          <h3>This is test 4 merge Conflict purpose</h3>
          <h3> Follow fetch and merge and checkout file after compare and push</h3>
          <Counter />
          <h1>Hello world</h1>
        </div>
      </Container>
      <p>Bye world</p>
      <h1>test-v1</h1>
      <h2>Test-v2</h2>
      <h4>test v-3</h4>
      <h3>test-v4</h3>
    </>
  );
}

export default App;
