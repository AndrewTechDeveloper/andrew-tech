import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

interface ImageCardProps {
  ogImage: string
}
const style = {
  media: {
    height: '60vh',
    backgroundSize: 'contain'
  }
}
export const ImageCard: React.FC<ImageCardProps> = ({ ogImage }) => (
  <Card>
    <CardActionArea>
      <CardMedia image={ogImage} title="blog image" style={style.media} />
    </CardActionArea>
  </Card>
)
