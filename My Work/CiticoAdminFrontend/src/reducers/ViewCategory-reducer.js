import {Map_Category} from '../actions/index';


export default function ViewCategoryReducer (state={}, action)
{

    switch (action.type)
    {


        case Map_Category:

            return action.payload;

        default:
            return state ;
    }   

  


}