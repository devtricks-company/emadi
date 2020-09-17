import React from 'react'
import {graphql,StaticQuery} from 'gatsby';
import Post from '../post/post';

const Betterpost = () => {
    return <StaticQuery 
        query={graphql`
     {
  wordpress {
    posts(last: 4) {
      nodes {
        title
        date
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        postvideo {
          videoPost {
            mediaItemUrl
          }
        }
      }
    }
  }
}

       `}

       render={props => {

            return (
                <section id="betterpost" >
                    <div className="row w-100">
                        
                         {props.wordpress.posts.nodes.map((post,index) =>
                            <Post key={index} post={post} />
                            
                            )} 
                    </div>
                </section>
            )

       }}
    
    />
}

export default Betterpost
