import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FetchCurrentPost, DeletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class ShowPost extends Component{


    componentDidMount()
    {
        const {id} = this.props.match.params;
        this.props.FetchCurrentPost(id);
    }

    DeletePostHelper ()
    {
        const {id} = this.props.match.params;
        this.props.DeletePost(id,()=>
        {
            this.props.history.push('/');
    
        });
    }
    render(){

        const {post}=this.props;

        if (!post)
        {
            return <div> Loading </div>;
        }

        return(

            <div>
                    <div className='text-xs-right paddingTop'>
                        <button className="btn btn-danger MarginRight" onClick={this.DeletePostHelper.bind(this)}>Delete</button>
                        <Link className="btn btn-primary" to="/">Back</Link>
                    </div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>Content: {post.content}</p>
            </div>

        );

    }
}

function mapStateToProps ({posts}, ownProps)
{


    return {post:posts[ownProps.match.params.id]};
}

export default connect (mapStateToProps, {FetchCurrentPost, DeletePost})(ShowPost);