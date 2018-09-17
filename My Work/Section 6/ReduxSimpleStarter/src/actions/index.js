
import axios from 'axios';

export const Fetch_Posts = 'Fetch_Posts';
export const Create_Posts = 'Create_Posts';
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

