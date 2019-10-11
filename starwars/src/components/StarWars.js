import React, { useEffect, useState } from 'react';
import axios from "axios";
import StarWarsCards from './StarWarsCards'
import './StarWars.css';
import {
  Container, Row, Col
} from 'reactstrap';

export default function StarWars() {

const [characters, setCharacters] = useState([
  { 
    name:'',
    height:'',
    mass:'',
    hair_color:'',
    skin_color:'',
    eye_color:'',
    birth_year:'',
    gender:'',
    homeworld:'',
    films:[],
    species:[],
    vehicles:[],
    starships:[],
    created:'',
    edited:'',
    url:''
  }
]);

useEffect(() => {
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
      // console.log("characters:", response.data.results);
      console.log("1st character:", response.data.results[0]);
      const characterArray = response.data.results;
      // setCharacters(response.data.results[0]);

      // const charsToSet = characterArray.map(function (char) {
        // return char.name;
      // });
      setCharacters(characterArray);
      console.log('characters:', characters);
      // console.log('characterArray:', characterArray);
      // console.log('charsToSet:', charsToSet);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
}, []);

console.log('characters:', characters);

return (
    <Container>
        <Row>
          <Col sm="6" >
          {characters.map((char, index) => (
            <StarWarsCards key={index} char={char}/>
          ))}
         </Col>
        </Row>
    </Container>
);


}