import {Fetch_Posts} from '../actions/index';
import _ from 'lodash';


export default function PostsReducer (state={}, action)
{

    switch (action.type)
    {
        case Fetch_Posts:
           const Posts = _.mapKeys(action.payload.data,'id');
            return Posts ; 

        default:
            return state ;
    }   

  


}