import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './StarWars.css';

const StarWarsCards = (props) => {
  console.log('char props:', props.char.name);

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>{props.char.name}</CardTitle>
      
          <CardSubtitle>{`  Height: ${props.char.  height}`}</CardSubtitle>
          <CardSubtitle>{`  Mass: ${props.char.  mass}`}</CardSubtitle>
          <CardSubtitle>{`  Hair_Color: ${props.char.  hair_color}`}</CardSubtitle>
          <CardSubtitle>{`  Skin_Color: ${props.char.  skin_color}`}</CardSubtitle>
          <CardSubtitle>{`  Eye_Color: ${props.char.  eye_color}`}</CardSubtitle>
          <CardSubtitle>{`  Birth_Year: ${props.char.  birth_year}`}</CardSubtitle>
          <CardSubtitle>{`  Gender: ${props.char.  gender}`}</CardSubtitle>
          
        </CardBody>
      </Card>
    </>
  );
};

export default StarWarsCards;