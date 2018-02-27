import React from 'react'
import { connect } from 'react-redux'
import CreateUserForm from '../components/CreateUserForm'
import {create} from  '../actions/create'
const CreateUser = (props) => {
        return (
            <div className="login-page">
                <CreateUserForm {...props}/>
            </div>
        )
};

    const mapDispatchToProps = (dispatch) => ({
        onSubmit: (username, email, password) => {
            const log = JSON.stringify({username, email, password})
            console.log(log);
            dispatch(create(username, email, password))
        }
    });

export default connect(null,mapDispatchToProps)(CreateUser);
