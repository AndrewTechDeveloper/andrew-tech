import * as React from 'react'
import { ProfileCard } from 'components/accounts/Card'
import { PortfolioList, SkillSetList } from 'components/accounts/List'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const ProfilePage = () => (
  <Container maxWidth="lg" className="p-4">
    <Grid container direction="row" justify="space-evenly">
      <Grid item xs={12} sm={4}>
        <ProfileCard />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Card className="mb-4">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My Portfolio
            </Typography>
          </CardContent>
          <PortfolioList />
        </Card>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My SkillSet
            </Typography>
          </CardContent>
          <SkillSetList />
        </Card>
      </Grid>
    </Grid>
  </Container>
)

export default ProfilePage
