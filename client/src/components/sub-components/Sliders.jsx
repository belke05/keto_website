import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: '#32c3ff',
    paddingBottom: '10%',
  },
})

function valuetext(value) {
  return `${value} euro`
}

export default function RangeSlider({ setFilter, filterValues }) {
  const classes = useStyles()
  const [value, setValue] = React.useState([0, 100])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    setFilter({ ...filterValues, priceRange: newValue })
  }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        <b className="label-title">price range</b>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div className="price-range">
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>
    </div>
  )
}
