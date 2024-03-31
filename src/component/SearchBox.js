import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';

const SearchBox = () => {
  let [searchValue, setSearchValue] = useState("");
  let dispatch = useDispatch();
//  let { contact } = useSelector((state)=>state);

  const getSearchValue = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_VALUE", payload: { keyword: searchValue } });
    setSearchValue("");    
  };
  
  return (
    <Form onSubmit={getSearchValue}>
        <Row>
            <Col lg={9}>
                <Form.Control type="text" placeholder="이름으로 검색" value={searchValue}
                onChange={(event)=>setSearchValue(event.target.value)} />
            </Col>
            <Col lg={2}>
                <Button type="submit">검색</Button>
            </Col>
        </Row>
    </Form>    
  );
};

export default SearchBox;
