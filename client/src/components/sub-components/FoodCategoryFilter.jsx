import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

const BlueCheckBox = withStyles({
  root: {
    color: '#32c3ff',
    '&$checked': {
      color: '#32c3ff',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />)

const FormGroupWithStyle = withStyles({
  root: {
    paddingBottom: '10%',
    borderColor: 'red',
  },
})(props => <FormGroup row>{props.children}</FormGroup>)

export default function CategoryFilter(props) {
  const [state, setState] = React.useState({
    checkedVegan: false,
    checkedKombucha: false,
    checkedSugarFree: false,
    checkedTea: false,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
    props.setFilter({
      ...props.filterValues,
      categoriesToKeep: { ...state, [name]: event.target.checked },
    })
  }

  return (
    <div className="space">
      <FormGroupWithStyle>
        <FormLabel component="legend">
          <b className="label-title">Pick categories</b>
        </FormLabel>

        <FormControlLabel
          control={
            <BlueCheckBox
              checked={state.checkedG}
              onChange={handleChange('checkedTea')}
              value="checkedTea"
            />
          }
          label="bars"
        />
        <FormControlLabel
          control={
            <BlueCheckBox
              checked={state.checkedG}
              onChange={handleChange('checkedVegan')}
              value="checkedVegan"
            />
          }
          label="snacks"
        />
        <FormControlLabel
          control={
            <BlueCheckBox
              checked={state.checkedG}
              onChange={handleChange('checkedKombucha')}
              value="checkedKombucha"
            />
          }
          label="nuts"
        />
        <FormControlLabel
          control={
            <BlueCheckBox
              checked={state.checkedG}
              onChange={handleChange('checkedSugarFree')}
              value="checkedSugarFree"
            />
          }
          label="sugar free"
        />
      </FormGroupWithStyle>
    </div>
  )
}
