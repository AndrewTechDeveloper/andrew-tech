import React from 'react'
import { History } from 'history'
import { Blog } from 'store/blogs/types'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact'

interface CarouselProps {
  data: Blog[]
  history: History
}

const style = {
  carousel: {
    img: {
      height: '40vh',
      width: 'auto'
    }
  }
}
export const CarouselTitle: React.FC<CarouselProps> = ({ data, history }) => (
  <MDBCarousel activeItem={1} length={data && data.length} showControls={true} showIndicators={true} className="z-depth-1">
    <MDBCarouselInner>
      {data && data.map(blog => (
        <MDBCarouselItem type="button" itemId="1" key={blog.id} onClick={() => history.push(`blogs/${blog.id}`)}>
          <MDBView>
            <img alt='carousel' className="d-block m-auto" src={blog.og_image} style={style.carousel.img} />
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
)
