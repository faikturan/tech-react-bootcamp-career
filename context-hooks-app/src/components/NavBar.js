import React, { useContext } from 'react'
import { withStyles } from '@mui/material/styles';
import styles from '../styles/NavBarStyles';

import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { AppBar, IconButton, InputBase, Switch, Toolbar, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search'




const languageContent = {
    EN: {
      search: 'Search',
      flag: '🇬🇧',
    },
    FR: {
      search: 'Chercher',
      flag: '🇫🇷',
    },
    SP: {
      search: 'Buscar',
      flag: '🇪🇸',
    },
  }

function NavBar({ classes }) {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)

    const { search, flag } = languageContent[language]
  return (
    <div className={classes.root}>
    <AppBar position="static" color={isDarkTheme ? 'default' : 'primary' }>
        <Toolbar>
        {/* FLAG */}
        <IconButton className={classes.menuButton} color="inherit">
        <span role="img" aria-label="French Flag">
            {flag}
        </span>
        </IconButton>
            {/* TITLE */}
            <Typography className={classes.title} variant="h6" color="inherit">
                App Title
            </Typography>

            {/* THEME SWITCH */}
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />

        {/* SEARCH INPUT */}
        <div className="classes.search">
            <div className="classes.searchIcon">
            <SearchIcon />
            </div>
        </div>
        <InputBase
        placeholder={`${search}...`}
        classes={{ root: classes.inputRoot, input: classes.inputInput}} />
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default withStyles(styles) (NavBar)