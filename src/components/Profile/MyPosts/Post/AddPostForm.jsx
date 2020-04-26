import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"newPostBody"} placeholder={'Add new post!'}/>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({form: 'newPostBody'})(AddPostForm)

export default AddPostReduxForm;