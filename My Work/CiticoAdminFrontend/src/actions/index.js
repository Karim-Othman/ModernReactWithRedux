import axios from 'axios';
import {parsePostData} from '../parsers/postCategories';


export const Edit_Categories = 'Edit_Categories';
export const Fetch_Categories = 'Fetch_Categories';
export const Map_Category='Map_Category';

const RootUrl='http://localhost:5000/api';


export function EditCategories (PostDataBeforeParse,callback)
{

    console.log(PostDataBeforeParse);

    const parsedPostData = parsePostData(PostDataBeforeParse);
    
    // const Request= axios.post(`${RootUrl}/categories`,PostData)
    // .then(()=>callback());
    

    return {

        type: Edit_Categories,

        payload: Request


    };

}


export function FetchCategories(){

    const Request= axios.get(`${RootUrl}/categories`);

    return {

        type: Fetch_Categories,
        payload: Request
    }
}

export function MapCategoryToAppProps (Category)
{
    

    return {

        type: Map_Category,
        payload: Category
    }

}