import React from 'react';

const Choice = (props) => (
  <img 
    src={props.img}
    onClick={() => props.choose(props.name)}
  />
)

export default Choice;