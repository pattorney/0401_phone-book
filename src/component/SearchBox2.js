import React from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';


const SearchBox = () => {
  return (
    <div>
      <Row>
        <Col lg={9}>
            <Form.Control type="text" placeholder="검색할 단어를 입력해주세요" />
        </Col>
        <Col lg={2}>
            <Button>검색</Button>
        </Col>
      </Row>
    </div>
  );
}

export default SearchBox;
