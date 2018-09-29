import {Fetch_Categories, Fetch_Packages_Of_Subcategory} from '../actions';
import {SearchBarParserFunction, SearchBarPackagesParserFunction} from '../parsers/SearchBar-parser';

export default function CategoriesSearchBarReducer(state={},action){

    
    switch(action.type){


        case Fetch_Categories:
            const ParsedData=SearchBarParserFunction(action.payload.data);
            return ParsedData;


        default:
            return state;

    }
}