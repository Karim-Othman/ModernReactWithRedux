import React, {Component} from 'react';
import {Field, reduxForm, blur} from 'redux-form';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {EditCategories, DeleteCategoryAction} from '../actions/index';
import {bindActionCreators} from 'redux';
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
        this.DeleteCategory = this.DeleteCategory.bind(this);
      }


      componentWillReceiveProps(nextProps) {

        
        const categoryObject=nextProps.category;
       
        
        if(!isEmpty(categoryObject) && this.props.category !== nextProps.category){

            // this line will map the recived application state to component state to update component state
            this.setState({...categoryObject});
            
            // those lines will update redux form with application state values.. dependancy (import blur and map it to mapActionToProps)
            this.props.blur('CategoryView','TechName',categoryObject.TechName);
            this.props.blur('CategoryView','ARCommName',categoryObject.ARCommName);
            this.props.blur('CategoryView','ENCommName',categoryObject.ENCommName);
            this.props.blur('CategoryView','characteristics',categoryObject.characteristics);
        }
      }


    RenderField ({label, input, meta, valueKey})
    {
        
        const {touched,error} = meta;
        // let category=this.props.category;
        // const NewValue= this.state[valueKey];
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




    DeleteCategory()
    {
        if(this.state.TechName)
            this.props.DeleteCategoryAction(this.state.TechName,()=>
            {
                window.location.reload();

            });

    }

    onSubmit (values)
    {

        //if Technical Name Doesn't change then "edit" which is delete and add new

        if (this.props.category.TechName==this.state.TechName){
            //delete first

            if(this.state.TechName)
            this.props.DeleteCategoryAction(this.state.TechName,()=>
            {
                this.props.EditCategories(values,()=>
                    {
                        window.location.reload();

                    });

            });
        }

        //else add new as normal
        //this line will call action creator to submit values
        this.props.EditCategories(values,()=>
    {
        window.location.reload();

    });
    }

    render(){

         const {handleSubmit} = this.props;
        return (

            <div>
                
    
                <div><button className="btn btn-danger" id="ButtonsFloat" onClick={this.DeleteCategory}>Delete</button></div>
                <div className='paddingTop'>
                      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div className="CtegoriesViewButtonsPadding">
                                <Link className = 'btn btn-dark'  to= '/' id="ButtonsFloat">Cancel</Link>
                                <button type="submit" className="btn btn-success" id="ButtonsFloat">Submit</button>
                            </div>
                            
                            <div className="CategoriesViewBackGround CategoriesViewPadding">
                                <Field
                                    onChange={event => this.setState({TechName : event.target.value})}
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

function mapDispatchToProps (dispatch)
{
    return bindActionCreators ({EditCategories, blur, DeleteCategoryAction}, dispatch);
}

//withRouter here because this component is not defined as a router comonent so it should be conected like this
//ex: not defined as following in src/index.js <Route component={SomeConnectedThing}/>

export default withRouter(reduxForm({
    validate,
    form: 'CategoryView'
})(
    
   connect (mapStateToProps, mapDispatchToProps)(CategoriesView)

));