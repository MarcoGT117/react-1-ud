import "./App.css";
import { Button, Accordion } from "react-bootstrap";
import {ReactComponent as ReactIcon} from "./assets/react.svg"

function App() {
  return (
    <div className="App">
      <h1>React bootstrap</h1>
      <Button
        variant="outline-secondary"
        size="lg"
        onClick={() => alert("Has hecho click")}
      >
        Click
      </Button>{" "}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Abreme</Accordion.Header>
          <Accordion.Body>Hola</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Abreme x2</Accordion.Header>
          <Accordion.Body>Mundo
            <ReactIcon/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
