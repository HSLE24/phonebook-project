import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactForm from './component/ContactForm'
import ContactList from './component/ContactList'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col className="border-right">
            <ContactForm></ContactForm>
          </Col>
          <Col>
            <ContactList></ContactList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
