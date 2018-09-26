import {Edit_Categories,    Fetch_Categories} from '../actions/index';
import _ from 'lodash';


export default function CategoriesReducer (state={}, action)
{

    switch (action.type)
    {
        case Fetch_Categories:
            
           const categories = _.mapKeys(action.payload.data,'TechName');
            return categories ; 


        default:
            return state ;
    }   

  


}