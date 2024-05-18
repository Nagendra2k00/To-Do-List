import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    container:{
        margin: "0px",
        display:"flex",
        justifyContent:"space-evenly",
        padding:"20px 8%"
    }
    }));

const ListContainer = () => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.section}>section1</div>
      <div className={classes.section}>section2</div>
      <div className={classes.section}>section3</div>
    </div>
  )
}

export default ListContainer
