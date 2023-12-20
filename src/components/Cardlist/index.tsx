// Import necessary components from Material-UI
import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia, Grid } from '@mui/material';

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url:string;
}

interface MyCardProps {
  card: CardData;
}
// CardList component to render the list of cards
const MyCard: React.FC<MyCardProps> = ({ card })  => (
  <Card  style={{  maxWidth: 400, margin: 'auto',marginBottom: 20 }}>
    <CardActionArea onClick={()=>{
      window.location.href = card.url
    }}>
      <CardMedia component="img" height="200" image={card.imageUrl} 
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      alt={card.title} />
      <CardContent>
        <Typography variant="h6" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
export default MyCard