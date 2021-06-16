import React from 'react';
import Card from './Card.js';

/*CardList.js receives a cards prop, and iterates through it, 
rendering a Card component for each item it finds.
In each iteration of map() it passes all the card information as props to the Card component, 
using the special object destructuring syntax {...card}./
The cards will be passed by App.js.
*/

const CardList = (props) => (
  <div id="container" className="mt-10">
    {props.cards.map((card) => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

export default CardList;
