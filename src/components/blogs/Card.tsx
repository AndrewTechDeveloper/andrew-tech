import React from 'react'
import { Blog } from 'store/blogs/types'
import { History } from 'history'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCardFooter } from "mdbreact";
import Typography from '@material-ui/core/Typography'

interface DeckCardProps {
  id: number
  data: Blog[]
  history: History
}
interface ImageCardProps {
  ogImage: string
}
const style = {
  media: {
    height: '40vh',
    width: 'auto',
    backgroundSize: 'contain'
  },
  deck: {
    image: {
      height: '20vh',
      objectFit: 'cover'
    }
  }
}

export const ImageCard: React.FC<ImageCardProps> = ({ ogImage }) => (
  <Card>
    <CardActionArea>
      <CardMedia image={ogImage || 'image'} title="blog image" style={style.media} />
    </CardActionArea>
  </Card>
)

export const TrendDecksCard: React.FC<DeckCardProps> = ({ data, history }) => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        人気の記事
      </Typography>
      <MDBCardGroup deck>
        {data.slice(0, 3).map(blog => (
          <MDBCard key={blog.id}>
            <MDBCardImage src={blog.og_image} alt="MDBCard image cap" top hover waves overlay="white-slight" style={style.deck.image} />
            <MDBCardBody>
              <MDBCardTitle tag="h5">{blog.title}</MDBCardTitle>
              <MDBCardText small muted>
                {blog.created_at}
              </MDBCardText>
              <MDBCardText>
                {blog.description}
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small transparent>
              <MDBBtn color="primary" size="sm" onClick={() => history.push(`blogs/${blog.id}`)}>
                記事を読む
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        ))}
      </MDBCardGroup>
    </div>
  )
}

export const RecentDecksCard: React.FC<DeckCardProps> = ({ data, history }) => {
  const latestOrderBlogs = data.sort((a,b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        最近の記事
      </Typography>
      <MDBCardGroup deck>
        {latestOrderBlogs.slice(0, 3).map(blog => (
          <MDBCard key={blog.id}>
            <MDBCardImage src={blog.og_image} alt="MDBCard image cap" top hover waves overlay="white-slight" style={style.deck.image} />
            <MDBCardBody>
              <MDBCardTitle tag="h5">{blog.title}</MDBCardTitle>
              <MDBCardText small muted>
                {blog.created_at}
              </MDBCardText>
              <MDBCardText>
                {blog.description}
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small transparent>
              <MDBBtn color="primary" size="sm" onClick={() => history.push(`/blogs/${blog.id}`)}>
                記事を読む
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        ))}
      </MDBCardGroup>
    </div>
  )
}

export const RelatedDecksCard: React.FC<DeckCardProps> = ({ id, data, history }) => {
  const nextBlog = data.filter(blog => blog.id === id + 1)[0]
  const prevBlog = data.filter(blog => blog.id === id - 1)[0]
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        関連の記事
      </Typography>
      <MDBCardGroup deck>
        {prevBlog &&
          <MDBCard>
            <MDBCardImage src={prevBlog.og_image} alt="MDBCard image cap" top hover waves overlay="white-slight" style={style.deck.image} />
            <MDBCardBody>
              <MDBCardTitle tag="h5">{prevBlog.title}</MDBCardTitle>
              <MDBCardText small muted>
                {prevBlog.created_at}
              </MDBCardText>
              <MDBCardText>
                {prevBlog.description}
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small transparent>
              <MDBBtn color="primary" size="sm" onClick={() => history.push(`/blogs/${prevBlog.id}`)}>
                前の記事を読む
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        }
        {nextBlog &&
          <MDBCard>
            <MDBCardImage src={nextBlog.og_image} alt="MDBCard image cap" top hover waves overlay="white-slight" style={style.deck.image} />
            <MDBCardBody>
              <MDBCardTitle tag="h5">{nextBlog.title}</MDBCardTitle>
              <MDBCardText small muted>
                {nextBlog.created_at}
              </MDBCardText>
              <MDBCardText>
                {nextBlog.description}
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small transparent>
              <MDBBtn color="primary" size="sm" onClick={() => history.push(`/blogs/${nextBlog.id}`)}>
                次の記事を読む
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        }
      </MDBCardGroup>
    </div>
  )
}
