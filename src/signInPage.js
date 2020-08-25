import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GaussianBlur from 'react-gaussian-blur'

/* Component for the SignInPage page */
class SignInPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      ismounted: true,
      password: "",
      logged_in: false,
      admin: false,
      registered_user: []
    }
  }

  componentDidMount() {
    this.state.mounted = true
  }
  componentWillUnmount() {
    this.state.mounted = false
  }

  render() {
    return (
      <div>
        <GaussianBlur x='5' y='5'>
          <div className="background"></div>
        </GaussianBlur>
        {/* <div>
                <Link to={'./signUpPage'}>
                <Button variant="warning" className="SignUpButton">
                    <h4>Sign Up</h4>
                </Button>
                </Link>
            </div> */}
        <div id="login-form">
          <Form>
            <Form.Group>
              <h3><center className="White">Login to begin</center></h3>
            </Form.Group>
            <Form.Group>
              <Form.Label className="White">Student Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your email"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="White">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password"></Form.Control>
            </Form.Group>
            <center>
              <Button onMouseMove={this.check_user}>Submit</Button>
            </center>
          </Form>
        </div>
      </div>
    )
  }
}

export default SignInPage;
