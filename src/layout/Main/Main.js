import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Topbar, Footer } from './components'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    },
    content: {
        height: '100%'
    }
}))

function Main(props) {

    const { children } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Topbar />
            <main className={classes.content}>
                {children}
                <Footer />
            </main>
        </div>
    )

}

export default Main 