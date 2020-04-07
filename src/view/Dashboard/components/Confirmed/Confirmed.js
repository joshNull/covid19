import React, { useContext } from 'react'
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import WarningIcon from '@material-ui/icons/Warning'
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
        backgroundColor: '#EED202',
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    }
}));

function Confirmed() {

    const classes = useStyles()
    const [{ Global }] = useContext(AppContext)
    const newConfirmed = typeof Global == 'undefined' ? 0 : Global.NewConfirmed
    const totalConfirmed = typeof Global == 'undefined' ? 0 : Global.TotalConfirmed

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
                            NEW ACTIVE CASES
                    </Typography>
                        <Typography variant="h3">
                            <CountUp separator="," start={0} end={newConfirmed} delay={0}>
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
                            <WarningIcon className={classes.icon} />
                        </Avatar>
                    </Grid>
                </Grid>
                <div >
                    <Typography
                        className={classes.caption}
                        variant="caption"
                    >
                        <CountUp separator="," start={0} end={totalConfirmed} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />  TOTAL ACTIVE CASES
                                </div>
                            )}
                        </CountUp>
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Confirmed

