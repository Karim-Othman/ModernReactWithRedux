import {Fetch_Posts, Fetch_Current_Post} from '../actions/index';

import _ from 'lodash';


export default function PostsReducer (state={}, action)
{

    switch (action.type)
    {
        case Fetch_Posts:
           const Posts = _.mapKeys(action.payload.data,'id');
            return Posts ; 

        case Fetch_Current_Post:
            const post = action.payload.data;
            return {...state, [post.id]:post};
            
        default:
            return state ;
    }   

  


}