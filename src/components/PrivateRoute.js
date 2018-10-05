// outsource dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

function PrivateRoute( props ) {
    let { isAuthorized, component, ...rest } = props;
    return (
        <div>
            { isAuthorized
                ? <Route component={component} {...rest} />
                : <Redirect to="/login" />
            }
        </div>
    )
}

export default connect(
    ( state ) => ({ isAuthorized: state.auth.isAuthorized })
)(PrivateRoute);
