import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../weatherRedux';
import { getAutocomplete } from '../services/HomeServices';

export default function SearchBar(props) {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const { updateSelectedCity } = bindActionCreators(actionCreators, dispatch);

  const getAutocompleteInfo = async (query) => {
    try {
      const { data } = await getAutocomplete(query);
      setCities(data);
      setError('');
    } catch (e) {
      console.error(e);
      setError('Error');
    }
  };

  const handleCitySelect = (value) => {
    updateSelectedCity(value.Key, value.LocalizedName);
  };

  const handleChange = (e) => {
    getAutocompleteInfo(e.target.value);
  };

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Autocomplete
          error={(error !== '').toString()}
          helpertext={error}
          disablePortal
          id='select-city'
          getOptionLabel={(cities) =>
            `${cities.LocalizedName} (${cities.Country.LocalizedName} ${cities.AdministrativeArea.ID})`
          }
          options={cities ? cities : []}
          sx={{ width: 300, backgroundColor: 'rgba(248, 240, 223, 0.7)' }}
          renderOption={(props, cities) => (
            <Box component='li' {...props} key={cities.Key}>
              {cities.LocalizedName} ({cities.Country.LocalizedName}{' '}
              {cities.AdministrativeArea.ID})
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label='City' />}
          onChange={(e, cities) => handleCitySelect(cities)}
          onInputChange={handleChange}
        />
      </Box>
    </div>
  );
}
