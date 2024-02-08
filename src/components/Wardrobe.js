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
        },
        {
          name: "shirt d",
          img: "abc.com"
        },
        {
          name: "shirt e",
          img: "abc.com"
        },
        {
          name: "shirt f",
          img: "abc.com"
        },
        {
          name: "shirt g",
          img: "abc.com"
        }
      ]
    },
    { 
      itemType: "pants", 
      items: [
        {
          name: "pants a",
          img: "abc.com"
        },
        {
          name: "pants b",
          img: "abc.com"
        },
        {
          name: "pants c",
          img: "abc.com"
        },
        {
          name: "pants d",
          img: "abc.com"
        },
        {
          name: "pants e",
          img: "abc.com"
        },
        {
          name: "pants f",
          img: "abc.com"
        }
      ]
    },
    { 
      itemType: "shoes", 
      items: [
        {
          name: "shoes a",
          img: "abc.com"
        },
        {
          name: "shoes b",
          img: "abc.com"
        },
        {
          name: "shoes c",
          img: "abc.com"
        }
      ]
    }
  ]

  const wardrobeItems = wardrobe.map((wardrobeItem, index) => 
    <div>
      <ToggleItem key={index} items={wardrobeItem.items}></ToggleItem>
    </div>
  );

  return (
    <React.Fragment>
      <h1>Wardrobe</h1>
      { wardrobeItems }
    </React.Fragment>
  )
}

// all random button
