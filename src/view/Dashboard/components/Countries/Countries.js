import React, {useState} from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Map } from './components'
import ReactTooltip from "react-tooltip"

const useStyles = makeStyles(() => ({
    root: {},
    chartContainer: {
        // height: 400,
        position: 'relative'
    },
    actions: {
        justifyContent: 'flex-end'
    }
}))

function Countries(props) {

    const { ...rest } = props
    const [content, setContent] = useState("");
    const classes = useStyles()

    return (
        <Card
            {...rest}
            className={classes.root}
        >
            <CardHeader title="Covid 19 Worldwide" />
            <Divider />
            <CardContent>
                <div className={classes.chartContainer}>
                    <Map setTooltipContent={setContent}/>
                    <ReactTooltip>{content}</ReactTooltip>
                </div>
            </CardContent>
        </Card>
    )
}

export default Countries