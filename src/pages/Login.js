// outsource dependencies
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { Row, Col } from 'reactstrap';

// local dependencies
import ComplexField from '../components/ComplexField'
import {AUTH} from '../actions/types'

function Login( props ) {
    let { invalid, submitted, handleSubmit, expectAnswer } = props;
    return (
        <Row className="justify-content-center">
            <Col xs={12} md={8}>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-uppercase text-center mb-5">
                        Login { expectAnswer ? <span className="fas fa-spinner"></span> : null}
                    </h2>
                    <Field name="email" component={ComplexField} type="email" label="Email" placeholder="Email" ckeckValidation={true}/>
                    <Field name="password" component={ComplexField} type="password" label="Password" placeholder="Password" ckeckValidation={true}/>
                    <div className="text-center pt-3">
                        <Button
                            type="submit"
                            disabled={ invalid || submitted }
                            className="btn btn-outline-dark text-uppercase"
                                >
                            Login
                        </Button>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

export default connect(
    ( state ) => ({ expectAnswer: state.auth.expectAnswer })
)(reduxForm({
    form: 'login',
    validate,
    onSubmit
})(Login));


function onSubmit ( values, dispatch ) {
    dispatch({type: AUTH.MAKE_LOGIN, ...values});
}

function validate( values ) {
    const errors = {};
    const pattern=/^.{2,}[@]{1}[\w\\.\S]{2,}[\\.]{1}[A-Za-z]{2,}$/;
    if ( !values.email ) {
        errors.email = 'Required field';
    } else if ( !pattern.test( values.email ) ) {
        errors.email = 'Your email address is invalid. Email example: example@some.com';
    }
    if ( !values.password ) {
        errors.password = 'Required field';
    } else if ( values.password.length < 6 ) {
        errors.password = 'Password must be at least 6 characters long';
    }
    if ( !values.test ) {
        errors.test = 'Required field';
    }
    return errors;
}



