import React from 'react'
import { css, jsx  } from '@emotion/core';
import { History } from 'history'
import { Blog } from 'store/blogs/types'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from 'mdbreact'

interface CarouselProps {
  data: Blog[]
  history: History
}

export const CarouselTitle: React.FC<CarouselProps> = ({ data, history }) => {
  /** @jsx jsx */
  const item = css`
    height: 60vh;
    @media (max-width: 960px) {
      height: 40vh;
    }
  `
  const image = css`
    min-height: 60vh;
    object-fit: cover;
    @media (max-width: 960px) {
      min-height: 40vh;
    }
  `
  return (
    <MDBCarousel activeItem={1} css={item} length={3} showControls={true} showIndicators={true} className="z-depth-1">
      <MDBCarouselInner>
        {data.map((blog, index) => (
          <MDBCarouselItem type="button" itemId={index + 1} key={index + 1} onClick={() => history.push(`blogs/${blog.id}`)}>
            <MDBView>
              <img alt='carousel' className="d-block m-auto" src={blog.og_image} css={image} />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className="h3-responsive">{blog.title}</h1>
              <p>{blog.description}</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

