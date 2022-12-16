import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Cost(props) {

  const handleChange = event =>{
    props.setPointValue(event.target.value)
  }
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Positions</FormLabel>
      <RadioGroup
        onChange={handleChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Guard" control={<Radio />} label="Guard" />
        <FormControlLabel value="Forward" control={<Radio />} label="Forward" />
        <FormControlLabel value="Center" control={<Radio />} label="Center" />
      </RadioGroup>
    </FormControl>
  );
}