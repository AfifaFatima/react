import React from "react";
import logo from '../images/logo.png';
import image from '../images/doodle.png'
import '../components/Login.css';
import { Card } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";


function Login() {
    return (

        <div className="Login-body" style={{ backgroundImage: `url(${image})` }} >
            <div className="Img-class">
                <img src={logo} className="Logo-img" alt="" />
            </div>


            <div className="card-body" >
                <Form.Group className="Input-element">
                    <Form.Label htmlFor="">Email Address</Form.Label>
                    <FormControl type="email" />
                </Form.Group>
                <Form.Group className="Input-element">
                    <Form.Label htmlFor="">Password</Form.Label>
                    <FormControl type="email" />
                </Form.Group>
            </div>
        </div>
    );
}
export default Login;