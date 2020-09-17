import React from 'react';
import moment from 'moment-jalaali';
import {digitsEnToFa} from 'persian-tools2';
import { Player } from 'video-react';

const Post = ({post}) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 single-post-container">
            <div>
             {post.postvideo.videoPost ? 
                 <Player
               
                 poster={post.featuredImage.node.mediaItemUrl}
                 src={post.postvideo.videoPost.mediaItemUrl}
               />
            
            : <img src={post.featuredImage.node.mediaItemUrl} alt=""/>} 
           </div>
            <div className="post-date-category">
                <span className="post-date">{ digitsEnToFa(moment(post.date, 'YYYY-M-D HH:mm:ss').endOf('jMonth').format('jYYYY/jM/jD'))}</span>
                <span><span className="category-post-name">{post.categories.nodes[0].name}</span></span>
            </div>
            <div className="post-title">
                <h5>{post.title}</h5>
            </div>
        </div>
    )
}

export default Post
