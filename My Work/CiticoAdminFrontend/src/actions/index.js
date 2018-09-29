import axios from 'axios';
import {parsePostData} from '../parsers/postCategories';


export const Edit_Categories = 'Edit_Categories';
export const Fetch_Categories = 'Fetch_Categories';
export const Map_Category='Map_Category';
export const Delete_Category='Delete_Category';
export const Fetch_Packages_Of_Subcategory='Fetch_Packages_Of_Subcategory';

const RootUrl='http://localhost:5000/api';


export function EditCategories (PostDataBeforeParse,callback)
{

    

    const parsedPostData = parsePostData(PostDataBeforeParse);
    
    
    const Request= axios.post(`${RootUrl}/categories`,parsedPostData)
    .then(()=>callback());
    

    return {

        type: Edit_Categories,

        payload: Request


    };

}


export function DeleteCategoryAction (TechNameToBeDeleted,callback){

    const Request= axios.delete(`${RootUrl}/categories/${TechNameToBeDeleted}`)
    .then(()=>callback());
    

    return {

        type: Delete_Category,

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

export function GetSubCategoriesRelativePackages(SubCategoryName){


    const Packages= axios.get(`${RootUrl}/packages?RelativeTo=${SubCategoryName}`);

    return{

        type: Fetch_Packages_Of_Subcategory,
        payload: Packages
    }
}