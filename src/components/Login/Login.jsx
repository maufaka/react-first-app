import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from './../../utils/validators/validator';
import { Input } from './../common/FieldControl/FormControl';
import { connect } from 'react-redux';
import { getAuthUserLogin } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import classes from './../common/FieldControl/FormControl.module.css';

const LoginForm = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={Input} name={"email"} placeholder={'Email'}
                        validate={[required]}/>
            </div>
            <div>
                <Field  component={Input} name={"password"} placeholder={'Password'} type={"password"}
                        validate={[required]}/>
            </div>
            <div>
                <Field  component={Input} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            { props.error &&
                <div className={classes.formError}>
                    { props.error }
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.getAuthUserLogin(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h3>LOGIN</h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getAuthUserLogin })(Login);