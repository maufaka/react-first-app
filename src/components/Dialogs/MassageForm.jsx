import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../utils/validators/validator';
import { Textarea } from './../common/FieldControl/FormControl';

const maxLength50 = maxLengthCreator(50)

const AddMassageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field  component={ Textarea } name={"newMassageBody"} placeholder={'Add new massage!!!'}
                validate={[required, maxLength50]}/>
        <div>
            <button>Send massage</button>
        </div>
    </form>
}

const AddMassageReduxForm = reduxForm({form: 'newMassageBody'})(AddMassageForm)

export default AddMassageReduxForm;