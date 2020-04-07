import React, { useContext, memo } from 'react'
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps"
import { AppContext } from '../../../../../../context'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const useStyles = makeStyles(() => ({
    text: { color: 'white' }
}))

function Map({ setTooltipContent }) {
    const classes = useStyles()
    const [{ Countries }, setApp] = useContext(AppContext)

    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                {/* <ZoomableGroup> */}
                    <Geographies geography={geoUrl}>
                        
                        {/* {({ geographies }) => { geographies.map((geo) => { console.log(geo) }) }} */}

                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { NAME, ISO_A2 } = geo.properties

                                        if (Countries && Countries.length > 0) {

                                            let data = Countries.filter((country) => { return country.CountryCode === ISO_A2 })[0]

                                            setTooltipContent(
                                                <div>
                                                    <Typography className={classes.text}>{NAME}</Typography>
                                                    <Typography className={classes.text}>Confirmed Cases: {typeof data == 'undefined' ? 0 : data.TotalConfirmed}</Typography>
                                                    <Typography className={classes.text}>Deaths: {typeof data == 'undefined' ? 0 : data.TotalDeaths}</Typography>
                                                    <Typography className={classes.text}>Recovered: {typeof data == 'undefined' ? 0 : data.TotalRecovered}</Typography>
                                                    {/* <Typography className={classes.text}>New Confirmed Cases: {typeof data == 'undefined' ? 0 : data.NewConfirmed}</Typography>
                                                    <Typography className={classes.text}>New Deaths: {typeof data == 'undefined' ? 0 : data.NewDeaths}}</Typography>
                                                    <Typography className={classes.text}>New Recovered: {typeof data == 'undefined' ? 0 : data.NewRecovered}</Typography> */}
                                                </div>
                                            )

                                        }

                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("")
                                    }}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#00ab66",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                {/* </ZoomableGroup> */}
            </ComposableMap>
        </>
    )
}

export default memo(Map)
