import * as React from 'react'
import {
  Avatar,
  Button,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@material-ui/core';

const style = {
  avatar: {
    height: '140px',
    width: '140px'
  }
}

export const ProfileCard = () => (
  <Card className='p-2 mb-4'>
    <CardActionArea>
      <CardContent>
        <Avatar alt="Remy Sharp" src="https://s3-ap-northeast-1.amazonaws.com/konpeki.site/logo/twitter-logo.JPG" className="mx-auto my-4" style={style.avatar}/>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align='center'>
          あんどりゅー
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align='center'>
          都内で働くSoftware Engineerです。主に自分が興味のある技術を気の向くままに発信していこうと思います。
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)
