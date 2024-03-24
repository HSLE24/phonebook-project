import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const ContactForm = () => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const dispatch = useDispatch();

    const addContact=(event)=>{
        event.preventDefault();
        dispatch({type:'ADD_CONTACT' , payload: {name, phoneNumber, id: Math.random().toString(36).substr(2, 16)}})
    }
    
    const oninputPhone=(event)=>{
        event.target.value = event.target.value
            .replace(/[^0-9]/g, '')
            .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
    }

  return (
    <div>
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event)=>{setName(event.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="tel" placeholder="전화번호를 입력해주세요" onInput={oninputPhone} onChange={(event)=>{setPhoneNumber(event.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                추가
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm