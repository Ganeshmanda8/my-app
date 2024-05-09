import React from "react";
import { Form } from "react-bootstrap";

function FormComponent() {
    const colorComponent = {
        backgroundColor: "black",
        color: "white"
    };

    return (
        <form style={colorComponent}>
            <h3 style={{ textAlign: "center" }}>Form</h3>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Select Present Position</Form.Label>
                <Form.Select aria-label="Select Present Position">
                    <option>Select Present Position</option>
                    <option value="1">Student</option>
                    <option value="2">Job-Seeker</option>
                    <option value="3">Employee</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Control type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled readOnly /><br />
            <Form.Control type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" readOnly /><br />
        </form>
    );
}

export default FormComponent;
