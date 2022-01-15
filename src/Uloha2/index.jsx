import React from 'react';
import hradUrl from './hrad.svg';

// Zadání:
// Po najetí myši  na obrázek (událost `onMouseEnter`)
// zobraz bublinu s textem „Na hradě je myš!“
// Bublina = alert v prohlížeči.

const handleMouseEnter = () => {
  alert('Na hrade je mys!');
};

const Uloha2 = () => {
  return (
    <img
      onMouseEnter={handleMouseEnter}
      src={hradUrl}
      width={60}
      height={60}
      alt="hrad"
    />
  );
};

export default Uloha2;
