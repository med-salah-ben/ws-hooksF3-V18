import React from 'react';
import {Card} from 'react-bootstrap'
import StarsRating from 'stars-rating'




const MovieCard = ({movie}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title> {movie.name} </Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
      <Card.Text>
        {movie.year}
      </Card.Text>
      <Card.Text>
      <StarsRating
  count={5}
  value={movie.rating}
  size={24}
  edit={false}
  color2={'#ffd700'} />

      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default MovieCard