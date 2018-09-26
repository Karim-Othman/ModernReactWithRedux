import React, {Component} from 'react';
import {Field, reduxForm, blur} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

        let SubcategoriesArray=nextProps.category.subCategories;
        
        if(!isEmpty(SubcategoriesArray) && this.props.category !== nextProps.category)
            {
            //setState is Async and the blur lines return empty.. and there is something goes wrong when map over SubcategoriesArray, it gives un defined
            // I think it is a memory refrencing issue
            //We will make blur as a call back
            this.setState({subCategories : SubcategoriesArray},
             // setState Callback   
            ()=>{

            // those lines will update redux form with application state values.. dependancy (import blur and map it to mapActionToProps)

                this.state.subCategories.map((element,index)=>{
                        
                        this.props.blur('CategoryView',`subCatTechName(${index})`,element.subCatTechName);
                        this.props.blur('CategoryView',`subCatARCommName(${index})`,element.subCatARCommName);
                        this.props.blur('CategoryView',`subCatENCommName(${index})`,element.subCatENCommName);
                })}
            );
            }

      }

    RenderField ({label, input, meta, valueKey,CategoryIndexinArray})
    {
        
        const {touched,error} = meta;
        // let category=this.props.category;
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
                                        //give diffrent names to field elements in order to blur them separately    
                                        name={`subCatTechName(${index})`}
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
                                        name={`subCatARCommName(${index})`}
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
                                        name={`subCatENCommName(${index})`}
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

function mapDispatchToProps (dispatch)
{
    return bindActionCreators ({EditCategories, blur}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps) (CategoryCharView);