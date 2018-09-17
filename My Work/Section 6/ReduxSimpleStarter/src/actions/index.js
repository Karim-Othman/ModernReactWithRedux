
import axios from 'axios';

export const Fetch_Posts = 'Fetch_Posts';
export const Create_Posts = 'Create_Posts';
export const Fetch_Current_Post='Fetch_Current_Post';
export const Delte_Post='Delte_Post';


const ApiKey='KarimOthman';
const RootUrl='http://reduxblog.herokuapp.com/api';


export function FetchPosts ()
{

    const Request= axios.get(`${RootUrl}/posts?key=${ApiKey}`);

    return {

        type: Fetch_Posts,

        payload: Request


    };

}

export function CreatePosts (PostData,callback)
{

    const Request= axios.post(`${RootUrl}/posts?key=${ApiKey}`,PostData)
    .then(()=>callback());
    

    return {

        type: Create_Posts,

        payload: Request


    };

}



export function FetchCurrentPost(id)
{

    const Request= axios.get(`${RootUrl}/posts/${id}?key=${ApiKey}`);

    return {

        type: Fetch_Current_Post,
        payload: Request

    };
}

export function DeletePost (id, callback)
{

    const Request = axios.delete(`${RootUrl}/posts/${id}?key=${ApiKey}`)
            .then (()=>callback());
    return{

        type: Delte_Post,
        payload: Request

    };
}