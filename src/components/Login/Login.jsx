import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} type={"text"} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} type={"text"} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (FormData) => {
        console.log(FormData)
    }

    return <div>
        <h3>LOGIN</h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;