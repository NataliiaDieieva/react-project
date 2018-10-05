// outsource dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

function Home() {
    return (
        <Row>
            <Col xs={12}>
                <div className="text-center">
                    <h1 className="mb-3" style={{textShadow: '3px 3px 8px #a6a6a6'}}>Welcome to React Project site!</h1>
                    <p>PLease, login, to see more pages</p>
                    <Link to="/login" className="btn btn-outline-dark text-uppercase">Go to login</Link>
                </div>
            </Col>
        </Row>
    )
}

export default Home;

