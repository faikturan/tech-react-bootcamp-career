import React, { useContext } from 'react'
import { withStyles } from '@mui/material/styles'
import styles from '../styles/FormStyles'

import { LanguageContext } from '../contexts/LanguageContext'

import Paper from "@mui/material/Paper";
import  Avatar from '@mui/material/Avatar';
import  Select from '@mui/material/Select';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, MenuItem, Typography } from '@mui/material';

const languageContent = {
    EN: {
      headerText: 'Sign In',
      email: 'Email',
      password: 'Password',
      checkboxText: 'Remember Me',
      buttonText: 'Sign In',
    },
    FR: {
      headerText: 'Se Connecter',
      email: 'Adresse Èlectronique',
      password: 'Mot de Passe',
      checkboxText: 'Souviens-toi De Moi',
      buttonText: 'Se Connecter',
    },
    SP: {
      headerText: 'Registrarse',
      email: 'Correo Electrónico',
      password: 'Contraseña',
      checkboxText: 'Recuérdame',
      buttonText: 'Registrarse',
    },
  }

function Form({ classes }) {
    const { language, updateLanguage } = useContext(LanguageContext)
const {
    headerText,
    email,
    password,
    checkboxText,
    buttonText,
} = languageContent[language]

  return (
    <main className={classes.main}>
    <Paper className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>

     {/* HEADER */}
     <Typography variant="h5">{headerText}</Typography>

     {/* LANGUAGE SELECT */}
     <Select value={language} onChange={updateLanguage}>
        <MenuItem value="EN">English</MenuItem>
        <MenuItem value="FR">French</MenuItem>
        <MenuItem value="SP">Spain</MenuItem>
     </Select>

     {/* SIGN-IN FORM */}
     <form className={classes.form}>
        {/* EMAIL */}
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input id="email" name="email" autoFocus />
        </FormControl>
        {/* PASSWORD */}
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input id="password" name="password" autoFocus />
        </FormControl>
        {/* CHECKBOX */}
        <FormControlLabel
        control={<Checkbox color="primary" />} 
        label={checkboxText}
        />
        {/* SIGN-IN BUTTON */}
        <Button 
        variant="contained"
        type="submit"
        fullWidth
        color="primary"
        className={classes.submit}>
            {buttonText}
        </Button>
     </form>
    </Paper>
    </main>
  )
}

export default withStyles(styles) (Form)