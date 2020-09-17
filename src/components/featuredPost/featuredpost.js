import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import { graphql, StaticQuery } from "gatsby";
import SwiperCore, { Navigation } from 'swiper';


SwiperCore.use([Navigation]);

const Featuredpost = () => {
   
  return <StaticQuery
    query={graphql`
      {
        wordpress {
          posts(where: { tag: "اسلایدر" }) {
            nodes {
              postShortDescription {
                shortDescrition
              }
              tags {
                nodes {
                  id
                }
              }
              title
              excerpt
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `}
    render={props => (
      <section id="featured-post">
        <div className="container">
          <Swiper
          id="main"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            navigation
            
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-6 featured-image-container">
                  <img src={props.wordpress.posts.nodes[0].featuredImage.node.mediaItemUrl} alt="" />
                </div>
                <div className="col-6 featured-image-content">
                    <h3>{props.wordpress.posts.nodes[0].title}</h3>
                    <p className="featured-excerpt mt-5" dangerouslySetInnerHTML={{__html:props.wordpress.posts.nodes[0].excerpt}} />
                    <p className="featured-short-desc mt-5" dangerouslySetInnerHTML={{__html:props.wordpress.posts.nodes[0].postShortDescription.shortDescrition}} />
                  
               
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </section>
    )}
  />

}

export default Featuredpost
