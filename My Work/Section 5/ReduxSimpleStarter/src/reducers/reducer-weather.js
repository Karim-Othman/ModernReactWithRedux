
import {Fetch_Weather} from '../actions/index';
export default function (state=[], action)
{
    //console.log ('ReceivedAction',action);

    switch(action.type)
        {
            case Fetch_Weather:

           // return state.concat([action.payload.data]);
           return [action.payload.data, ...state];
            
        }
    return state;
}