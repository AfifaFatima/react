import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import image from '../images/doodle.png';
import logo from '../images/logo.png';
import ProgressBar from "react-bootstrap/ProgressBar";
import '../components/Home.css';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="Login-body" style={{ backgroundImage: `url(${image})` }} >
            <div className="row pt-5 mt-5">
                <div className="mb-5">
                    <h1>Infection and Symptoms</h1>
                    <ProgressBar style={{ color: "white" }} className="m-3"/>
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
                    <Link to={'about'} ><Button type="submit" className="btn mt-5 p-2">LOGIN</Button></Link>
                </Form>
            </div>
        </div>
    )
};
export default Home;
