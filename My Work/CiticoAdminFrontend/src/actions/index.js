import axios from 'axios';



export const Edit_Categories = 'Edit_Categories';
export const Fetch_Categories = 'Fetch_Categories';
export const Map_Category='Map_Category';

const RootUrl='http://localhost:5000/api';


export function EditCategories (PostData,callback)
{

    console.log(PostData);
    const Request= axios.post(`${RootUrl}/categories`,PostData)
    .then(()=>callback());
    

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