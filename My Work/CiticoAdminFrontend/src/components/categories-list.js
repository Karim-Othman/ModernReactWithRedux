import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FetchCategories, MapCategoryToAppProps} from '../actions/index';
import _ from 'lodash';

class CategoriesList extends Component
{

    componentDidMount(){
        this.props.FetchCategories();
    }

    RenderCategories()
    {
       return _.map(this.props.categories, category=>{

        return (    
                <li onClick={this.onCategoryClickHandler.bind(this)} data-id={category.TechName} key={category.TechName} className='list-group-item' id="CategoryListAlignText">
                     
                     {category.ENCommName}/{category.ARCommName}
                     
                 </li>
        );

       });
    }
    

    onCategoryClickHandler(event){

        const TechName= event.currentTarget.dataset.id;
        this.props.MapCategoryToAppProps(this.props.categories[TechName]);
    }

    render()
    {
        return (

            <div>

                <ul className="list-group paddingTop" id="CategoriesList">
                     {this.RenderCategories()}
                </ul>

            </div>
        );
    }

}

function mapStateToProps({categories})
{
    return {categories};
}

export default connect (mapStateToProps, {FetchCategories, MapCategoryToAppProps}) (CategoriesList);