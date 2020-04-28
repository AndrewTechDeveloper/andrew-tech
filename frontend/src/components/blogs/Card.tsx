import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

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
