import React, { Component } from 'react';
import LoginButton from '../../components/Login/LoginButton';
import LoginWindow from '../../components/Login/LoginWindow';
import './About.css'
import Logo from '../../components/Logo/Logo.js';
import StepButtons from '../../components/Step-Buttons/Step-Buttons.js';
import loginImg from './login-background.png'

class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showLogin: false
        }
    }
    renderLogin = () => {
        console.log("show modal");
        this.setState({
            showLogin: true
        });
    }

// turnary
// var eval = (condition) ? ifTrue : ifFalse
    render() {
        const modal = this.state.showLogin ? (
                    <LoginWindow />
                ) : (
                 null
                )

        return (
            <div className="entire-container">

                <div className="parallax-container">

                    <div className="parallax one">
                        <h1 className="slogan">Find Your</h1>
                            <Logo />
                        <h1 className="slogan-2">Party People</h1>
                    </div>

                    <div className="divider top"></div>

                    <div className="parallax two">
                            <div className="parallax-two-content header">
                                <h1 className="header-text">Upcoming Festival?</h1>
                            </div>
                            <div className="info-grid-container">
                                <div className="info-div one">
                                    <h1 className="three-dots">...</h1>
                                </div>
                                <div className="info-div two">
                                <StepButtons />
                                </div>
                                <div className="info-div three">
                                    <h1 className="three-dots">...</h1>
                                </div>
                            </div>
                            <div className="parallax-two-content footer">
                                <h1 className="footer-text">Don't Go Alone!</h1>
                            </div>
                    </div>

                    <div className="divider bottom"></div>

                    <div className="parallax three">
                        <h1 className="parallax-three-header">Find Your Festies!</h1>
                        <LoginButton handleClick={() => this.renderLogin()} />
                        { modal }
                    </div>
                </div>
        
            </div>
        );
    }
}

/* About.propTypes = {

}; */

export default About;