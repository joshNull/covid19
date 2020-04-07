import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import moment from 'moment';
import { makeStyles } from '@material-ui/styles'
import { AppContext } from '../../../../context'

const useStyles = makeStyles(theme => ({
    text: { color: 'white' },
    grow: {
        flexGrow: 1,
    },
}));

function Topbar() {

    const classes = useStyles()
    const [app, setApp] = useContext(AppContext)
    const trackerDate = Object.keys(app).length > 0 ? "As of " + moment(app.Date).utc().format("MMM DD, YYYY h:mm A") : ""

    return (
        <div className={classes.grow}>
            <AppBar>
                <Toolbar>
                    <Typography className={classes.text}>COVID 19</Typography>
                    <div className={classes.grow} />
                    <Typography className={classes.text}>{trackerDate}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Topbar