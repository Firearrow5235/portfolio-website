import { Container, Typography, Paper } from '@material-ui/core'
import { FC } from 'react'

const About: FC = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={0}>
        <Typography variant='h4' color='textPrimary' gutterBottom>About Me</Typography>
        <Typography variant='h5' color='textPrimary' gutterBottom>Who I am</Typography>
        <Typography color='textPrimary' gutterBottom>Passable musician, amateur historian, professional hobbyist, wannabe writer, and one of those maniacs who actually enjoys writing code.</Typography>
      </Paper>
    </Container>
  )
}

export default About