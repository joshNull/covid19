import React, { useContext } from 'react'
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import HealingIcon from '@material-ui/icons/Healing'
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
        backgroundColor: '#00ab66',
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    }
}));

function Recovered() {

    const classes = useStyles()
    const [{ Global }] = useContext(AppContext)
    const NewRecovered = typeof Global == 'undefined' ? 0 : Global.NewRecovered
    const TotalRecovered = typeof Global == 'undefined' ? 0 : Global.TotalRecovered

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
                            NEW RECOVERED
                    </Typography>
                        <Typography variant="h3">
                            <CountUp separator="," start={0} end={NewRecovered} delay={0}>
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
                            <HealingIcon className={classes.icon} />
                        </Avatar>
                    </Grid>
                </Grid>
                <div >
                    <Typography
                        className={classes.caption}
                        variant="caption"
                    >
                        <CountUp separator="," start={0} end={TotalRecovered} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />  TOTAL RECOVERED
                                </div>
                            )}
                        </CountUp>
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Recovered

