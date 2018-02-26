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
            dispatch(create(username, email, password))
        }
    });

export default connect(null,mapDispatchToProps)(CreateUser);
