import React from 'react';
import {graphql,StaticQuery} from 'gatsby';

const Homeheader = () => {
    return <StaticQuery 
        query={graphql`
               {
  wordpress {
    page(id: "cG9zdDo4") {
      id
      homeHeader {
        homeHeader {
          homeExcerpt
          homeTitle
          homeImage {
            sourceUrl
          }
          signture {
            sourceUrl
          }
        }
      }
    }
  }
}

    `}

    render={props => (
        <div id="header-home-section" className="row w-100">
            <div className="col-lg-2">
                
            </div>
            <div className="col-lg-10 home-container-section">
                 
                 <img src={props.wordpress.page.homeHeader.homeHeader.homeImage.sourceUrl} alt=""/>
                 <div className="home-header-overlay">
                    <h2>{props.wordpress.page.homeHeader.homeHeader.homeTitle}</h2> 
                    <p dangerouslySetInnerHTML={{__html:props.wordpress.page.homeHeader.homeHeader.homeExcerpt}} />   
                    <img src={props.wordpress.page.homeHeader.homeHeader.signture.sourceUrl} alt=""/>
                 </div> 
               
            </div>
        </div>


    )}
    
    
    />
}

export default Homeheader
