import React from 'react'
import { History } from 'history';
import { Blog } from 'store/blogs/types'
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from 'mdbreact'

interface CarouselProps {
  data: Blog[]
  history: History
}

const style = {
  carousel: {
    img: {
      height: '64vh'
    }
  }
}
export const CarouselTitle: React.FC<CarouselProps> = ({ data, history }) => (
  <MDBContainer className="p-0 m-0 mw-100">
    <MDBCarousel activeItem={1} length={data.length} showControls={true} showIndicators={true} className="z-depth-1">
      <MDBCarouselInner>
        {data.map(blog => (
          <MDBCarouselItem type='button' itemId="1" key={blog.id} onClick={() => history.push(`blogs/${blog.id}`)}>
            <MDBView>
              <img className="d-block m-auto" src={blog.og_image} style={style.carousel.img} />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">{blog.title}</h3>
              <p>{blog.description}</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  </MDBContainer>
)
