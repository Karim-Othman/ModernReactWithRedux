import React from 'react';
import CategoriesView from './categories-view';
import CategoriesList from './categories-list';

 export default function CategoriesContainer () {

            return (

            <div>
                <img src="../../theme/img/banner.jpg" alt="bg" className="bg opacity"/>
                <div className="CategoriesListBlock"> <CategoriesList/> </div>
                <div className="CategoriesViewBlock"> <CategoriesView/> </div>
                
            </div>
    
        );
    }
   





