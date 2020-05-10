import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import TwitterIcon from '@material-ui/icons/Twitter'
import EmailIcon from '@material-ui/icons/Email'
import { Follow } from 'react-twitter-widgets'

const style = {
  avatar: {
    height: '140px',
    width: '140px'
  }
}

export const ProfileCard = () => (
  <Card className="p-2 mb-4">
    <CardContent>
      <Avatar
        alt="icon image"
        src="https://andrew-tech.s3-ap-northeast-1.amazonaws.com/logo/twitter-logo.jpg"
        className="mx-auto my-4"
        style={style.avatar}
      />
    </CardContent>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" align="center">
        あんどりゅー
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p" align="center">
        都内で働くSoftware Engineerです。主に自分が興味のある技術を気の向くままに発信していこうと思います。
      </Typography>
    </CardContent>
    <Divider />
    <CardContent>
      <Typography gutterBottom component="h5">
        Contact
      </Typography>
      <div className="d-flex my-2">
        <TwitterIcon />
        <Typography gutterBottom component="p" className="ml-2 mb-0">
          あんどりゅー
        </Typography>
      </div>
      <Follow username="andrewdayoooo" />
      <div className="d-flex my-2">
        <EmailIcon />
        <Typography gutterBottom component="p" className="ml-2 mb-0">
          andrew.tech.developer@gmail.com
        </Typography>
      </div>
    </CardContent>
  </Card>
)
