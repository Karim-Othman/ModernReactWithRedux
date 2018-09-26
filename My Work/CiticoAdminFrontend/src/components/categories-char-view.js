import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {EditCategories} from '../actions/index';
import { log } from 'util';
import ViewCategoryReducer from '../reducers/ViewCategory-reducer';

class CategoryCharView extends Component{

    constructor(props) {
        super(props);
        
        this.state={subCategories:[],

                    };

        // This binding is necessary to make `this` work in the callback
        this.RenderField = this.RenderField.bind(this);
        this.MapOverSubCategories = this.MapOverSubCategories.bind(this);
        
      }


      componentWillReceiveProps(nextProps) {

        const SubcategoriesArray=nextProps.category.subCategories;
        
        if(!isEmpty(SubcategoriesArray))
            {
            this.setState({subCategories : SubcategoriesArray});
            }

      }

    RenderField ({label, input, meta, valueKey,CategoryIndexinArray})
    {
        
        const {touched,error} = meta;
        let category=this.props.category;
        const ClassNameVariable = `form-group ${touched && error ? 'has-danger':''} `;
        const SubCategoryObject = this.state.subCategories[CategoryIndexinArray];
        
        return (
                <div id= 'TopPadding' className = {ClassNameVariable}>
                    <label>{label}</label>
                    <input
                        
                        className='form-control'
                        type='text'
                        
                        {...input}

                        value={SubCategoryObject[valueKey]}

                    />
                    <div className='text-help ValidationError'>
                    {touched ? error:''}
                    </div>
                </div>
        );
    }


    MapOverSubCategories({subCatTechName,subCatARCommName,subCatENCommName},index){

       
        
        return(
              <div className="SubCategorydivStyle" key={this.state.subCategories[index]._id}>
                    <label className="SubCategoryLabel">Sub-category</label>
                    <Field
                                        onChange={(event) =>{
                                            const NewState= AssignState(this.state,event,index,'subCatTechName');
                                            this.setState({subCategories:NewState.subCategories});

                                        }}
                                            
                                        name="subCatTechName"
                                        valueKey="subCatTechName"
                                        label="Technical Name"
                                        CategoryIndexinArray={index}
                                        component={this.RenderField}
                                        
                                    />
                    <Field

                                        onChange={(event) =>{
                                            const NewState= AssignState(this.state,event,index,'subCatARCommName');
                                            this.setState({subCategories:NewState.subCategories});

                                        }}
                                        name="subCatARCommName"
                                        valueKey="subCatARCommName"
                                        label="Arabic Name"
                                        CategoryIndexinArray={index}
                                        component={this.RenderField}
                                        
                                    />
                    <Field
                                        onChange={(event) =>{
                                            const NewState= AssignState(this.state,event,index,'subCatENCommName');
                                            this.setState({subCategories:NewState.subCategories});
 
                                        }}
                                        name="subCatENCommName"
                                        valueKey="subCatENCommName"
                                        label="English Name"
                                        CategoryIndexinArray={index}
                                        component={this.RenderField}
                                        
                                    />
                </div>
            
        );

    }


    render(){

       
        let SubCategoriesArray=this.state.subCategories;
        if(SubCategoriesArray.length==0)
            return <div></div>;
        return(

            
            <div> 
            
            
                {SubCategoriesArray.map(this.MapOverSubCategories)}
            
            
            </div>
            

        );
    }
}



function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function AssignState(state,event,index,key){


    let stateCopy = Object.assign({}, state);
    let singleCategory=stateCopy.subCategories[index];
    stateCopy.subCategories = stateCopy.subCategories.slice();
    singleCategory = Object.assign({}, singleCategory);
    singleCategory[key] = event.target.value;
    stateCopy.subCategories[index]=singleCategory;
    return stateCopy;

}
function mapStateToProps({category})
{
    return {category};
}

export default connect (mapStateToProps, {EditCategories}) (CategoryCharView);