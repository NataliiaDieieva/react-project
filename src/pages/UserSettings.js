// outsource dependencies
import React from 'react';
import { Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { Row, Col } from 'reactstrap';
// local dependencies
import ComplexField from '../components/ComplexField'

function UserSettings( props ) {
    return (
        <Row className="justify-content-center">
            <Col xs={12} md={8}>
                <form>
                    <h1 className="text-center mb-3">User settings</h1>
                    <Field name="name" component={ComplexField} type="text" label="Name" placeholder="Name" />
                    <Field name="age" component={ComplexField} type="number" label="Age" placeholder="Age" />
                    <div className="text-center pt-3">
                        <Button className="btn btn-outline-dark" disabled={true}>Save changes</Button>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

export default reduxForm({
    form: 'user-settings',
    initialValues: {
        name: 'User',
        age: 46
    }
})(UserSettings);
