import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './createUser.css';

const CreateUser = ({username,email,onChange,onCreate}) => {
    return (
        <div className='createName'>
            <Form className='form'>
                <Row className='row'>
                    <Col className='col'>
                        <Form.Control type="text" 
                            name='username' 
                            placeholder='이름' 
                            onChange={onChange} 
                            value={username} 
                            className='input'
                        />
                    </Col>
                    <Col>
                        <Form.Control type="text" 
                            name='email'
                            placeholder='이메일' 
                            onChange={onChange}
                            value={email} 
                            className='input'
                        />
                    </Col>
                </Row>
            </Form>
            <button onClick={onCreate} className='btnSub'>등록</button>
        </div>
    );
};

export default CreateUser;