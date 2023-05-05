import "./App.css";
import { Button, Accordion, Card } from "react-bootstrap";

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
      return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Abreme</Accordion.Header>
          <Accordion.Body>Hola</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Abreme x2</Accordion.Header>
          <Accordion.Body>Mundo</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
