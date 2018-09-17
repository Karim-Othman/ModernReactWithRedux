import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {CreatePosts} from '../actions/index';
import {connect} from 'react-redux';
class NewPost extends Component {


    RenderField ({label, input, meta})
    {

        const {touched,error} = meta;
        const ClassNameVariable = `form-group ${touched && error ? 'has-danger':''} `;
        return (
                <div id= 'TopPadding' className = {ClassNameVariable}>
                    <label>{label}</label>
                    <input
                        className='form-control'
                        type='text'
                        {...input}

                    />
                    <div className='text-help'>
                    {touched ? error:''}
                    </div>
                </div>
        );
    }


    onSubmit (values)
    {
        this.props.CreatePosts(values,()=>
    {
        this.props.history.push('/');

    });
    }

    render (){

        const {handleSubmit} = this.props;

        return (
                <div className='paddingTop'>
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                             name="title"
                             label="Title"
                             component={this.RenderField}
                        />

                        <Field
                             name="categories"
                             label="Categories"
                             component={this.RenderField}
                        />
                        <Field
                             name="contents"
                             label="Contents"
                             component={this.RenderField}
                        />

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link className = 'btn btn-danger' to= '/'>Cancel</Link>
                  </form>
                </div>
            );

    }
}


function validate (values)
{

    let errors = {};

    if (!values.title || values.title.length < 4)
    {

        errors.title="Enter title that is longer than three characters";

    }

    if (!values.categories)
    {
        errors.categories="No category has been inserted";
    }


    if (!values.contents)
    {
        errors.contents="No content has been inserted";
    }

    return errors;
}


export default reduxForm({
    validate,
    form: 'NewPostForm'
})(
    
   connect (null,{CreatePosts})(NewPost)

);