import * as React from 'react'
import { Container, Card, CardContent, Typography, Grid } from '@material-ui/core'
import { ProfileCard } from 'components/accounts/Card'
import { PortfolioList, SkillSetList } from 'components/accounts/List'

const ProfilePage = () => (
  <Container maxWidth="lg" className="p-4">
    <Grid container direction="row" justify="space-evenly">
      <Grid item xs={12} sm={4} className="mr-2">
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
