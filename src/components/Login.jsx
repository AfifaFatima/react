import React from "react";
import logo from '../images/logo.png';
import image from '../images/doodle.png'
import '../components/Login.css';
import {Link} from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";


function Login() {
    return (

        <div className="Login-body" style={{ backgroundImage: `url(${image})` }} >
            <div className="Img-class">
                <img src={logo} className="Logo-img" alt="" />
            </div>
            <Form className="card p-4" >
                <Form.Group className="Input-element pt-2">
                    <Form.Label htmlFor="" className="px-4">Email Address</Form.Label>
                    <FormControl type="email" />
                </Form.Group>
                <Form.Group className="Input-element pt-4">
                    <Form.Label htmlFor="" className="px-4">Password</Form.Label>
                    <FormControl type="password" />
                </Form.Group>
                <Link to={'home'} ><Button type="submit" className="btn mt-5 p-2">LOGIN</Button></Link>
                
                
            </Form>
            
            </div>
    );
}
export default Login;