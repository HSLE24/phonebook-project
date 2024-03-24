import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'

const SearchBox = ({ setKeyword }) => {

  const sendKeyword=(event)=>{
    event.preventDefault();
    setKeyword(event.target.value);
  }


  return (
    <div>
      <Form.Control type="text" placeholder="이름이나 전화번호로 검색하세요" onChange={sendKeyword} />
    </div>
  )
}

export default SearchBox