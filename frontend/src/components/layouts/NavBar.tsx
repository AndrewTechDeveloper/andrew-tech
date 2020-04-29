import React from 'react'
import { History } from 'history'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'
import CopyToClipboard from 'react-copy-to-clipboard'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import LinkIcon from '@material-ui/icons/Link'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      backgroundColor: '#fff',
      color: '#202020',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    logo: {
      flexGrow: 1
    },
    logoImg: {
      maxHeight: '48px',
      cursor: 'pointer'
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    drawerLink: {
      color: '#202020'
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    scrollTop: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 10
    }
  })
)

interface Props {
  window?: () => Window
  children?: React.ReactElement
}
function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
function ScrollTop(props: Props) {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor')
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollTop}>
        {children}
      </div>
    </Zoom>
  )
}

interface NavBarProps {
  history: History
}
export const NavBar: React.FC<NavBarProps> = props => {
  const { history } = props
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [copy, setCopy] = React.useState(false)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const handleClipboardCopy = () => setCopy(true)
  const handleClipboardReset = () => setCopy(false)

  const currentUrl = window.location.href
  const twitterLink = `https://twitter.com/intent/tweet?text=${currentUrl}`
  const logo = `${process.env.REACT_APP_S3_ENDPOINT}/logo/andrew-tech.png`
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          color="transparent"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.logo}>
              <img alt='logo' src={logo} className={classes.logoImg} onClick={() => history.push('/blogs')} />
            </div>
            <a href={twitterLink}>
              <Tooltip title="twitterでシェア" placement="bottom">
                <IconButton color="default" edge="end" className="ml-2">
                  <TwitterIcon />
                </IconButton>
              </Tooltip>
            </a>
            <CopyToClipboard text={currentUrl} onCopy={handleClipboardCopy}>
              <Tooltip title={copy ? 'コピーしました' : 'URLをコピー'} placement="bottom">
                <IconButton edge="end" color="default" className="ml-2">
                  {copy ? <AssignmentTurnedInIcon /> : <LinkIcon />}
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <Link to={'/blogs'}>
          <List>
            <ListItem
              button
              onClick={() => {
                handleDrawerClose()
                handleClipboardReset()
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText className={classes.drawerLink}>Home</ListItemText>
            </ListItem>
          </List>
        </Link>
        <Link to={'/accounts/profile'}>
          <List>
            <ListItem
              button
              onClick={() => {
                handleDrawerClose()
                handleClipboardReset()
              }}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText className={classes.drawerLink}>Profile</ListItemText>
            </ListItem>
          </List>
        </Link>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <ScrollTop {...props}>
        <Fab color="default" aria-label="scroll back to top" className="fab">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}
