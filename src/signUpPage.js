import React, { Component } from 'react';
import './signUp.css';
import Form from 'react-bootstrap/Form';
import { Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import GaussianBlur from 'react-gaussian-blur'

const header = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
};


const log = console.log
class SignUpPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            new_user: "",
            new_password: "",
            new_name: "",
            img_src: [],
        }
    }

    render() {
        return (
            <div>
                <GaussianBlur x='5' y='5'>
                    <div className="signupbackground"></div>
                </GaussianBlur>
                <div id="signup-form">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Form.Row>
                        <center>
                            <Button variant="primary">
                                Submit
                            </Button>
                        </center>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SignUpPage;