import React from 'react';
import Card from './Card.jsx';
import Cardsdata from './Cardsdata.jsx';

const Services =()=>{
  return(
    <>
  {Cardsdata.map((val)=>{
    return(
    <Card
      imgsrc={val.imgsrc}
      paragraph={val.paragraph}
      />
    );

  })};
  </>
  );

    

};
export default Services;