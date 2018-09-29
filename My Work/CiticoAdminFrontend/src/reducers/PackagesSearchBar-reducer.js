import {Fetch_Categories, Fetch_Packages_Of_Subcategory} from '../actions';
import {SearchBarParserFunction, SearchBarPackagesParserFunction} from '../parsers/SearchBar-parser';

export default function PackagesSearchBarReducer(state={},action){

    
    switch(action.type){


        case Fetch_Packages_Of_Subcategory:
            const ParsedData=SearchBarPackagesParserFunction(action.payload.data);
            return ParsedData;

        default:
            return state;

    }
}