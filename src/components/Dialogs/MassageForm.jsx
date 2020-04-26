import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddMassageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"newMassageBody"} placeholder={'Add new massage!!!'}/>
        <div>
            <button>Send massage</button>
        </div>
    </form>
}

const AddMassageReduxForm = reduxForm({form: 'newMassageBody'})(AddMassageForm)

export default AddMassageReduxForm;