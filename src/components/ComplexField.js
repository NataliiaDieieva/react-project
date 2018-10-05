// outsource dependencies
import React from 'react';
import { Row, Col } from 'reactstrap';

function ComplexField ({input, meta, label, ckeckValidation = false, ...props}) {
    return (
        <Row className="mb-3">
            <Col>
                <label>{ label }</label>
                <input {...input} {...props} className={"form-control " + (ckeckValidation && (meta.touched && meta.valid) ? 'is-valid' : ((meta.touched && meta.invalid) && 'is-invalid'))}/>
                <div className="invalid-tooltip">{ meta.touched && meta.error && <div>{ meta.error }</div> }</div>
            </Col>
        </Row>
    )
}

export default ComplexField;
