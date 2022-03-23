import { FC } from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography, Container, Link } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  }
}))

const Header: FC = () => {
  const classes = useStyles()

  const openGitHub = (): void => {
    window.open('https://github.com/Firearrow5235', '_blank')
  }

  const openLinkedIn = (): void => {
    window.open('https://www.linkedin.com/in/gpleavitt/', '_blank')
  }

  return (
    <AppBar position='static' color='primary'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography variant='h4' color='textPrimary' align='left' className={classes.title}>
            Gavyn Leavitt
          </Typography>
          <div>
            <IconButton onClick={() => openLinkedIn()}>
              <LinkedIn />
            </IconButton>
            <IconButton onClick={() => openGitHub()}>
              <GitHub />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header