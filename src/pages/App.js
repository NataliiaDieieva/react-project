// outsource dependencies
import React from 'react';
import ReduxToastr from 'react-redux-toastr'
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'

// local dependencies
import Home from './Home'
import Login from './Login'
import Secret from './Secret'
import UserSettings from './UserSettings'
import Header from '../components/Header'
import PrivateRoute from '../components/PrivateRoute'

function App ( props ) {
    return (
        <div>
            <ReduxToastr />
            <Header />
            <Container>
                <Row id="main" className="align-items-center">
                    <Col xs={12}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <PrivateRoute path='/secret' component={Secret}/>
                            <PrivateRoute path='/user-settings' component={UserSettings}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;


