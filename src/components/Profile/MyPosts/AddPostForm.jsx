import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../../utils/validators/validator';
import { Textarea } from './../../common/FieldControl/FormControl';

const maxLength25 = maxLengthCreator(25);

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field  component={Textarea} name={"newPostBody"} placeholder={'Add new post!'}
                validate={[required, maxLength25]}/>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({form: 'newPostBody'})(AddPostForm)

export default AddPostReduxForm;