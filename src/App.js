import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

//1. 왼쪽에는 연락처 등록 폼, 오른쪽에는 검색창과 연락처 리스트
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇 개 있는지 보인다.
//4. 사용자가 유저를 이름 검색으로 찾을 수 있다.

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col lg={6}><ContactForm /></Col>
          <Col><ContactList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
