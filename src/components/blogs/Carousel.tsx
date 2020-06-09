import React from 'react'
import { css, jsx } from '@emotion/core'
import { History } from 'history'
import { Blog } from 'store/blogs/types'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from 'mdbreact'

interface BlogsCarouselProps {
  data: Blog[]
  history: History
}
interface RelatedBlogsCarouselProps {
  data: Blog[]
  history: History
}

export const BlogsCarousel: React.FC<BlogsCarouselProps> = ({ data, history }) => {
  /** @jsx jsx */
  const item = css`
    height: 68vh;
    @media (max-width: 960px) {
      height: 40vh;
    }
  `
  const image = css`
    min-height: 68vh;
    object-fit: cover;
    @media (max-width: 960px) {
      min-height: 40vh;
    }
  `
  return (
    <MDBCarousel
      activeItem={1}
      css={item}
      length={5}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      slide
    >
      <MDBCarouselInner>
        {data.map((blog, index) => (
          <MDBCarouselItem type="button" itemId={index + 1} key={index + 1} onClick={() => history.push(`blogs/${blog.id}`)}>
            <MDBView>
              <img alt="carousel" className="d-block m-auto" src={blog.image} css={image} />
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
