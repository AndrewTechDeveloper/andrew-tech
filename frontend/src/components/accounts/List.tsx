import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

export const PortfolioList = () => {
  const projects = [
    {
      name: 'Konpeki',
      period: '2019/08 ~ 2020/03',
      image: 'https://andrew-tech.s3-ap-northeast-1.amazonaws.com/logo/konpeki.png',
      description: '大学在学中に作成した早稲田生限定SNSコミュニティ。400名以上のユーザーを獲得、大学公認のサービスとなる。',
      skills: 'Frontend: React + Redux, Backend: Ruby on Rails, Scraper: Python + Selenium, Infrastructure: AWS(EC2, RDS, SES)'
    },
    {
      name: 'Ai-recruiter',
      period: '2019/09 ~ 2020/03',
      image: 'https://andrew-tech.s3-ap-northeast-1.amazonaws.com/logo/ai-recruiter-logo.png',
      description: '大学の卒論で作成したランク学習による会社リコメンドサイト。機械学習を用い階層分析法とneural networkを比較した。',
      skills:
        'Front: React + Redux, Backend: Ruby on Rails, Scraper: Python + Selenium, NeuralNets: python + tensorflow(keras), Infrastructure: AWS(EC2, RDS)'
    },
    {
      name: 'Andrew-tech',
      period: '2020/04 ~',
      image: 'https://andrew-tech.s3-ap-northeast-1.amazonaws.com/logo/andrew-tech-icon.png',
      description: '技術発信ブログ(当サイト)。興味のある技術・言語について発信します。',
      skills: 'Frontend: Draft.js + React + Redux + Typescript, Backend: Ruby on Rails, Infrastructure: AWS(EC2 + RDS)'
    },
    {
      name: 'salesman',
      period: '2020/05',
      image: 'https://andrew-tech.s3-ap-northeast-1.amazonaws.com/logo/salesman.png',
      description: '遺伝的アルゴリズムを用いてセールスマン問題に取り組んだ',
      skills: 'Python, Pygame'
    },
    {
      name: 'twitter-weathering-emotion',
      period: '2020/06',
      image: 'https://andrew-tech.s3-ap-northeast-1.amazonaws.com/logo/kokoro.png',
      description: 'Janome + Twitter APIで人々のツイートを可視化し、定時に呟くTwitter botを作成した',
      skills: 'Python, Janome, Wordcloud, Heroku, TwitterAPI'
    },
  ]
  return (
    <List>
      {projects.map(item => (
        <div key={item.name}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={item.image} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography component="span" variant="subtitle1">
                    {item.name}
                  </Typography>
                  <Typography component="span" variant="caption" className="ml-2">
                    {item.period}
                  </Typography>
                </>
              }
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {item.description}
                  </Typography>
                  <br />
                  <Typography component="span" variant="caption" color="textSecondary">
                    {item.skills}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  )
}

export const SkillSetList = () => {
  const skillSets = [
    {
      title: 'Frontend',
      color: 'blue',
      logoLetter: 'F',
      skills: 'React, Redux, Vue, Vuex, Nuxt, Typescript, Pygame, Draft.js, Webpack, Gulp, jQuery, HTML, SCSS'
    },
    {
      title: 'Backend',
      color: 'green',
      logoLetter: 'B',
      skills: 'Ruby on Rails, Python, Nginx, Apache, TensorFlow, Janome'
    },
    {
      title: 'Infrastructure',
      color: 'orange',
      logoLetter: 'I',
      skills: 'EC2, RDS, SES, Route53, CloudFront, S3, ACM, API Gateway, Lambda, DynamoDB, MySQL, SequelPro, Bigquery, TablePlus, Heroku'
    },
    {
      title: 'DevOps',
      color: 'pink',
      logoLetter: 'D',
      skills: 'Docker, Circle CI, Jest, Selenium, Github, Git Flow, Mackerel'
    },
    {
      title: 'Others',
      color: 'indigo',
      logoLetter: 'O',
      skills: 'Vimmer, TOEIC 920, TOEFLibt 99'
    }
  ]
  return (
    <List>
      {skillSets.map(item => (
        <div key={item.title}>
          <ListItem alignItems="flex-start" key={item.title}>
            <ListItemAvatar>
              <Avatar className={item.color}>{item.logoLetter}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography component="span" variant="subtitle1">
                  {item.title}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="caption" color="textSecondary">
                    {item.skills}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  )
}
