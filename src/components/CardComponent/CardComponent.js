import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const  CardComponent = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:40, width:800}}>
      <CardMedia
        component="img"
        image={data.hdurl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h2>{data.title}</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>{data.explanation}</h3>
        </Typography>
        <Typography variant="body2" color="text.primary">
          <h4>{data.copyright}</h4>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h2>{data.date}</h2>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;