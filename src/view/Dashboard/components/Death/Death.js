import React, { useContext } from 'react'
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import CountUp from 'react-countup'
import { AppContext } from '../../../../context'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    title: {
        fontWeight: 700
    },
    avatar: {
        backgroundColor: '#e53935',
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    }
}));

function Death() {

    const classes = useStyles()
    const [{ Global }] = useContext(AppContext)
    const NewDeaths = typeof Global == 'undefined' ? 0 : Global.NewDeaths
    const TotalDeaths = typeof Global == 'undefined' ? 0 : Global.TotalDeaths

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                >
                    <Grid item>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            NEW DEATHS
                    </Typography>
                        <Typography variant="h3">
                            <CountUp separator="," start={0} end={NewDeaths} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <HighlightOffIcon className={classes.icon} />
                        </Avatar>
                    </Grid>
                </Grid>

                <div >
                    <Typography
                        className={classes.caption}
                        variant="caption"
                    >
                        <CountUp separator="," start={0} end={TotalDeaths} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />  TOTAL DEATHS
                                </div>
                            )}
                        </CountUp>
                    </Typography>
                </div>

            </CardContent>
        </Card>
    )
}

export default Death

