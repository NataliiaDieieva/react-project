// outsource dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

function Secret() {
    return (
        <Row>
            <Col xs={12}>
                <div className="text-center">
                    <h1 className="mb-3">Hi, user!</h1>
                    <Link to="/user-settings" className="btn btn-outline-dark">Go to settings</Link>
                </div>
            </Col>
        </Row>
    )
}

export default Secret;
