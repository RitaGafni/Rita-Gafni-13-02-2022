import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { getAutocomplete } from '../services/HomeServices';

export default function SearchBar(props) {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  const getAutocompleteInfo = async (query) => {
    try {
      const { data } = await getAutocomplete(query);
      setCities(data);
      error('');
    } catch (e) {
      console.error(e);
      setError('Error');
    }
  };

  const handleCitySelect = (value) => {
    props.setSelectedCityKey(value.Key);
    props.setSelectedCityName(value.LocalizedName);
  };

  const handleChange = (e) => {
    getAutocompleteInfo(e.target.value);
  };

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Autocomplete
          error={error !== ''}
          helperText={error}
          disablePortal
          id='select-city'
          getOptionLabel={(cities) =>
            `${cities.LocalizedName} (${cities.Country.LocalizedName} ${cities.AdministrativeArea.ID})`
          }
          options={cities}
          sx={{ width: 300 }}
          renderOption={(props, cities) => (
            <Box component='li' {...props} key={cities.Key}>
              {cities.LocalizedName} ({cities.Country.LocalizedName}{' '}
              {cities.AdministrativeArea.ID})
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label='City' />}
          onChange={(e, value) => handleCitySelect(value)}
          onInputChange={handleChange}
        />
      </Box>
    </div>
  );
}
