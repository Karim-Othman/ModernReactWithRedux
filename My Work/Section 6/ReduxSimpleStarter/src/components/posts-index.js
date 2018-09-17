import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FetchPosts} from '../actions/index';
import _ from 'lodash';
import {Link} from 'react-router-dom';

 class PostsIndex extends Component {


    componentDidMount(){
        this.props.FetchPosts();
    }


    RenderPosts()
    {
       return _.map(this.props.posts, post=>{

        return (    
                <li key={post.id} className='list-group-item'>
                     {post.title}
                 </li>
        );

       });
    }
    render ()
    {
        return (
                    <div>
                        <div className='text-xs-right paddingTop'>
                            <Link className="btn btn-primary" to='/NewPost'>New post</Link>
                        </div>
                        <h3 className='paddingTop'>Posts</h3>
                        <ul className="list-group">
                            {this.RenderPosts()}
                        </ul>
                    </div>
                );
    }
}


function mapStateToProps({posts})
{
    return {posts};
}

export default connect (mapStateToProps, {FetchPosts}) (PostsIndex);