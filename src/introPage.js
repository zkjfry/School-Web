import React from 'react'
import './introPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GaussianBlur from 'react-gaussian-blur'

class IntroPage extends React.Component {
    render() {
        return(
            <div data-f1="home" class="home">
                <div id="home-page">
                    <div class="home-card-left" data-f1="home-left">
                        <div class="home-card" style={{backgroundColor: "red"}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default IntroPage;