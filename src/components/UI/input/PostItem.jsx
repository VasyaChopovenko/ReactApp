import React, {Component} from 'react';
import classes from './posts.module.css';

const PostItem = ({post}) => {

    return (
        <a className="d-flex align-items-center m-2 blog-post">
            <div className="flex-shrink-0">
                <img
                    width={150}
                    height={150}
                    className="mr-3 p-3"
                    src="https://picsum.photos/id/55/300/300"
                    alt="photo"/>
            </div>
            <div className="flex-grow-1">
                <h5 className="m-2">{post.title}</h5>
                <p className="m-2">{post.body}</p>
            </div>
        </a>
    );
};

export default PostItem;
