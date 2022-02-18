import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../weatherRedux';

export default function FavoritesItem(props) {
  const dispatch = useDispatch();
  const { updateSelectedCity } = bindActionCreators(actionCreators, dispatch);

  const handleSelectFavorite = () => {
    updateSelectedCity(props.item.key, props.item.cityName);
  };

  return (
    <div>
      <CardActionArea onClick={handleSelectFavorite} component={Link} to='/'>
        <Card
          key={props.item.key}
          sx={{
            maxWidth: 260,
            minWidth: 160,
            height: 220,
            m: 1,
            p: 1,
            backgroundColor: '#F3F1F5',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: 260,
              maxHeight: 140,
            }}
          >
            <Typography gutterBottom variant='h6'>
              {props.item.cityName}
            </Typography>
            <Typography variant='h6' color='text.secondary' sx={{ mb: 1 }}>
              {props.item.temperature}&deg; c
            </Typography>
            <Typography gutterBottom variant='h8'>
              {props.item.weatherText}
            </Typography>
            <img
              component='img'
              height='80'
              alt='weather icon'
              src={props.item.iconURL}
              objectFit='fit'
            />
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}
