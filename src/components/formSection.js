import React from 'react';
import {Form,Container} from 'react-bootstrap';
function FormSection(){
    return(
            <section className="section bg-white p-3 mt-3">
                <Container>
                    <Form>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>
                                    Input Type Name
                                </Form.Label>
                                <Form.Control type="text" name="firstName" placeholder="Enter your First Name" />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Container>
            </section>
    );
}

export default FormSection;