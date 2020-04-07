import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Modal } from '@material-ui/core'
import { Confirmed, Death, Recovered, Countries } from './components'
import { AppContext } from '../../context'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    }
}))

function Dashboard() {

    const classes = useStyles()
    const [app, setApp] = useContext(AppContext)

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }

        fetch('https://api.covid19api.com/summary', options)
            .then(async (response) => {
                if (response.ok) {
                    let result = await response.json()
                    setApp({ ...result })
                } else {
                    throw response
                }
            })
            .catch((error) => {
                console.log(error)
                alert("Error " + error.status + " : " + error.statusText)
            })
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={4} >
                <Grid
                    item
                    lg={4}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <Confirmed />
                </Grid>
                <Grid
                    item
                    lg={4}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <Death />
                </Grid>
                <Grid
                    item
                    lg={4}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <Recovered />
                </Grid>

                <Grid
                    item
                    lg={12}
                    sm={12}
                    xl={12}
                    xs={12}
                >
                    <Countries />
                </Grid>

            </Grid>
        </div>
    )
}

export default Dashboard
