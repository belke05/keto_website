import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

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
          label="tea"
        />
        <FormControlLabel
          control={
            <BlueCheckBox
              checked={state.checkedG}
              onChange={handleChange('checkedVegan')}
              value="checkedVegan"
            />
          }
          label="vegan"
        />
        <FormControlLabel
          control={
            <BlueCheckBox
              checked={state.checkedG}
              onChange={handleChange('checkedKombucha')}
              value="checkedKombucha"
            />
          }
          label="kombucha"
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
