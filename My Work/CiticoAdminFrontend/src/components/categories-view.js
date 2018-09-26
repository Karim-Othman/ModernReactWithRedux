import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {EditCategories} from '../actions/index';
import { log } from 'util';
import ViewCategoryReducer from '../reducers/ViewCategory-reducer';
import CategoryCharView from './categories-char-view';

 class CategoriesView extends Component{


    constructor(props) {
        super(props);
        
        this.state={TechName:'',
                    ARCommName:'',
                    ENCommName:'',
                    subCategories:'',
                    characteristics:''
    
                    };

        // This binding is necessary to make `this` work in the callback
        this.RenderField = this.RenderField.bind(this);
      }


      componentWillReceiveProps(nextProps) {

        const categoryObject=nextProps.category;
        
        if(!isEmpty(categoryObject))
            this.setState({...categoryObject});
      }
      
    RenderField ({label, input, meta, valueKey})
    {
        
        const {touched,error} = meta;
        let category=this.props.category;
        const ClassNameVariable = `form-group ${touched && error ? 'has-danger':''} `;
        
        return (
                <div id= 'TopPadding' className = {ClassNameVariable}>
                    <label>{label}</label>
                    <input
                        
                        className='form-control'
                        type='text'
                        
                        {...input}

                        value={this.state[valueKey]}

                    />
                    <div className='text-help ValidationError'>
                    {touched && !this.state[valueKey] ? error:''}
                    </div>
                </div>
        );
    }


    onSubmit (values)
    {
        this.props.EditCategories(values,()=>
    {
        this.props.history.push('/');

    });
    }

    render(){

         const {handleSubmit} = this.props;
        return (

            <div>
                
    
                <div className='paddingTop'>
                      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div className="CtegoriesViewButtonsPadding">
                                <Link className = 'btn btn-danger'  to= '/' id="ButtonsFloat">Cancel</Link>
                                <button type="submit" className="btn btn-success" id="ButtonsFloat">Submit</button>
                            </div>
                            
                            <div className="CategoriesViewBackGround CategoriesViewPadding">
                                <Field
                                    onChange={event =>  this.setState({TechName : event.target.value})}
                                    name="TechName"
                                    valueKey="TechName"
                                    label="Technical Name"
                                    component={this.RenderField}
                                    
                                />
                                
                                <Field
                                    onChange={event =>  this.setState({ARCommName : event.target.value})}
                                    name="ARCommName"
                                    valueKey="ARCommName"
                                    label="Arabic Name"
                                    component={this.RenderField}
                                />

                                <Field
                                    onChange={event =>  this.setState({ENCommName : event.target.value})}
                                    name="ENCommName"
                                    valueKey="ENCommName"
                                    label="English Name"
                                    component={this.RenderField}
                                />

                                <Field
                                    onChange={event =>  this.setState({characteristics : event.target.value})}
                                    name="characteristics"
                                    valueKey="characteristics"
                                    label="Tags"
                                    component={this.RenderField}
                                />
                            </div>
                               <div className="SubCategoryWholedivStyle"> <CategoryCharView /> </div>
                            
                      </form>
                    </div>
    
            </div>
    
        );
    }
   
}




function validate (values)
{

    let errors = {};

    if (!values.TechName)
    {

        errors.TechName="No Technical name has been inserted";

    }

    if (!values.ARCommName)
    {
        errors.ARCommName="No Arabic name has been inserted";
    }


    if (!values.ENCommName)
    {
        errors.ENCommName="No English Name has been inserted";
    }

    
    return errors;
}


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function mapStateToProps({category})
{
    
    
    return {category};
}


export default reduxForm({
    validate,
    form: 'CategoryView'
})(
    
   connect (mapStateToProps,{EditCategories})(CategoriesView)

);