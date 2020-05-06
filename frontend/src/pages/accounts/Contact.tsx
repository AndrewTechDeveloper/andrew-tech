import * as React from 'react'
import { ProfileCard } from 'components/accounts/Card'
import { PortfolioList, SkillSetList } from 'components/accounts/List'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const ContactPage = () => (
  <Container maxWidth="md" className="p-4">
    <iframe title='問合せフォーム' src="https://docs.google.com/forms/d/e/1FAIpQLSfnON4U36cagK_BHCq_C45Fxepk1VkxK0qiDRe3LZiT8qxIeA/viewform?embedded=true" width={640} height={1200} frameBorder={0} marginHeight={0} marginWidth={0}>読み込んでいます…</iframe>
  </Container>
)

export default ContactPage
