import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

export default function FavoritesItem(props) {
  return (
    <div>
      <CardActionArea
        component={Link}
        to='/'
        state={{ key: props.item.key, cityName: props.item.cityName }}
      >
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
