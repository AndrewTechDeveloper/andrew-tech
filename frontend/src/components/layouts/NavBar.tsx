import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from '@material-ui/core/styles'
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  useScrollTrigger,
  Fab,
  Tooltip,
  Zoom
} from '@material-ui/core'
import {
  Twitter as TwitterIcon,
  Menu as MenuIcon,
  Home as HomeIcon,
  Link as LinkIcon,
  Person as PersonIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  AlternateEmail as AlternateEmailIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Create as CreateIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons'
import CopyToClipboard from 'react-copy-to-clipboard';

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
      maxHeight: '48px',
      flexGrow: 1
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

export const NavBar = (props: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const currentUrl = window.location.href
  const twitterLink = `https://twitter.com/intent/tweet?text=${currentUrl}`
  const logo = "https://s3-ap-northeast-1.amazonaws.com/konpeki.site/logo/andrew-tech.png"
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
              <img src={logo} className={classes.logo}/>
            </div>
            <a href={twitterLink}>
              <IconButton color="default" edge="end" className='ml-2'>
                <TwitterIcon />
              </IconButton>
            </a>
            <CopyToClipboard text={currentUrl} onCopy={() => console.log('copy')}>
              <IconButton edge="end" color="default" className='ml-2'>
                <LinkIcon />
              </IconButton>
            </CopyToClipboard>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
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
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </List>
        </Link>
        <Link to={'/blogs/new'}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText>New</ListItemText>
            </ListItem>
          </List>
        </Link>
        <Link to={'/accounts/profile'}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItem>
          </List>
        </Link>
        <Link to={'/accounts/contact'}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
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
        <Fab color="default" aria-label="scroll back to top" className='fab'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}
