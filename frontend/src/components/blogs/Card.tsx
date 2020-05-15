import React from 'react'
import { Blog } from 'store/blogs/types'
import { History } from 'history'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import Typography from '@material-ui/core/Typography'

interface DeckCardProps {
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
      <MDBCardGroup>
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
              <MDBBtn color="primary" size="sm" onClick={() => history.push(`blogs/${blog.id}`)}>
                read more
              </MDBBtn>
            </MDBCardBody>
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
      <MDBCardGroup>
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
              <MDBBtn color="primary" size="sm" onClick={() => history.push(`blogs/${blog.id}`)}>
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBCardGroup>
    </div>
  )
}
