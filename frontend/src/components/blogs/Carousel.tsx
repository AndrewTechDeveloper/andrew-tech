import React from 'react'
/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import { History } from 'history'
import { Blog } from 'store/blogs/types'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact'

interface CarouselProps {
  data: Blog[]
  history: History
}

export const CarouselTitle: React.FC<CarouselProps> = ({ data, history }) => {
  const outer = css`
    @media(max-width: 1000px){
      display: contents;
    }
  }`;
  return (
    <MDBCarousel activeItem={1} length={data && data.length} showControls={true} showIndicators={true} css={outer}>
      <MDBCarouselInner>
        {data && data.map(blog => (
          <MDBCarouselItem type="button" itemId="1" key={blog.id} onClick={() => history.push(`blogs/${blog.id}`)}>
            <MDBView>
              <img alt='carousel' className="d-block m-auto" src={blog.og_image} />
              <MDBMask overlay="black-strong" />
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
}

