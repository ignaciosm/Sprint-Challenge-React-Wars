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
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.char.name}</CardTitle>
          <CardSubtitle>{`Gender: ${props.char.gender}`}</CardSubtitle>
          <CardSubtitle>{`Hair color: ${props.char.hair_color}`}</CardSubtitle>
          {/* <CardText>{props.char.films}</CardText> */}
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </>
  );
};

export default StarWarsCards;