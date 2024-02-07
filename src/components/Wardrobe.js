import ToggleItem from './ToggleItem';
import React from 'react';

export default function Wardrobe() {
  const wardrobe = [
    { 
      itemType: "shirts", 
      items: [
        {
          name: "shirt a",
          img: "abc.com"
        },
        {
          name: "shirt b",
          img: "abc.com"
        },
        {
          name: "shirt c",
          img: "abc.com"
        }
      ]
    }
  ]

  const wardrobeItems = wardrobe.map((wardrobeItem, index) => 
    <ToggleItem key={index} items={wardrobeItem.items}></ToggleItem>
  );

  return (
    <React.Fragment>
      <h1>Wardrobe</h1>
      { wardrobeItems }
    </React.Fragment>
  )
}

// all random button
