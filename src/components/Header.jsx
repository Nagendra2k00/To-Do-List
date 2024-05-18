import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) =>({
container:{
    margin: "0px"
}
}));

const Header = () => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Heading</div>
    </div>
  )
}

export default Header
