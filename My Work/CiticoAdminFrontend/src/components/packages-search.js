import React, { Component } from 'react';
import createFilterOptions from 'react-select-fast-filter-options';
import Select from 'react-virtualized-select';
import {FetchCategories, GetSubCategoriesRelativePackages} from '../actions/index';
import {connect} from 'react-redux';




let options = [];
let subcategoryoptions= [];
let PackagesOptions= [];




class PackagesSearchBar extends Component{


    constructor(props) {
        super(props);
        
        this.state={SelectedCategory:'',

                    SelectedSubCategory:'',

                    SelectedPackge:''

                    };

       
        
      }

    

    componentDidMount(){

        //action creator to fetch all categories for PackagesSearchBar
        this.props.FetchCategories();
    }

    componentWillReceiveProps(nextProps) {

        let categoriesSearchBarArray=nextProps.searchBarCategories;
        let PackagesSearchBarArray= nextProps.searchBarPackages;
        
        if(categoriesSearchBarArray.length > 0 && this.props.searchBarCategories !== nextProps.searchBarCategories)
            {

                options= categoriesSearchBarArray;
                this.forceUpdate();

            }

        if(PackagesSearchBarArray.length > 0 && this.props.searchBarPackages !== nextProps.searchBarPackages)
        {

            PackagesOptions= PackagesSearchBarArray;
            this.forceUpdate();

        }


    }

render(){



    
    
    const filterOptions = createFilterOptions({ options });
    

    return(

        <div>
            
                <Select
                    name="category"
                    value={this.state.SelectedCategory}
                    options={options}
                    filterOptions={filterOptions}
                    onChange={val => {
                        
                        if (val){
                            subcategoryoptions=val.relativeSubCatArray;
                    
                            this.setState({SelectedCategory:val.value});
                        }
                        
                        }}
                    placeholder="Category"
                    isMulti="true"
                    className="PackagesSearchBar"
                />
            
            
                <Select
                    name="subCategory"
                    value={this.state.SelectedSubCategory}
                    options={subcategoryoptions}
                    filterOptions={filterOptions}
                    onChange={val => {
                        if (val){
                            this.props.GetSubCategoriesRelativePackages(val.value);
                            this.setState({SelectedSubCategory:val.value});
                        }
                        
                        }}
                    placeholder="SubCategory"
                    className="PackagesSearchBar"
                />
            
            
                <Select
                    name="package"
                    value={this.state.SelectedPackge}
                    options={PackagesOptions}
                    filterOptions={filterOptions}
                    onChange={val => {
                        if (val){

                            this.setState({SelectedPackge:val.value});
                        }
                    }}
                    placeholder="Package"
                    className="PackagesSearchBar"
                />
            
        </div>
    );
}

}

function mapStateToProps({searchBarCategories, searchBarPackages})
{
    return {searchBarCategories, searchBarPackages};
}

export default connect (mapStateToProps, {FetchCategories, GetSubCategoriesRelativePackages}) (PackagesSearchBar);