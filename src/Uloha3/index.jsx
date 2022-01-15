import React from 'react';
import kvetinaUrl from './kvetina.svg';
import listUrl from './list.svg';
import slunceUrl from './slunce.svg';
import vlockaUrl from './vlocka.svg';

// Zadání:
// Dopiš komponentu tak, aby každé tlačítko po kliknutí vypsalo,
// jakou volbu uživatel vybral.
// Například pro poslední položku to bude:
// console.log('Uživatel zvolil zimu');

const jaro = () => {
  console.log('Uzivatel si zvolil jaro');
};

const leto = () => {
  console.log('Uzivatel si zvolil leto');
};

const podzim = () => {
  console.log('Uzivatel si zvolil podzim');
};

const zima = () => {
  console.log('Uzivatel si zvolil zimu');
};

const Uloha3 = () => {
  return (
    <>
      Které roční období je ve střední Evropě nejteplejší?
      <ol>
        <li>
          <button onClick={jaro}>
            <img src={kvetinaUrl} width={16} height={16} alt="květina" />
            jaro (březen až květen)
          </button>
        </li>
        <li>
          <button onClick={leto}>
            <img src={slunceUrl} width={16} height={16} alt="slunce" />
            léto (červen až srpen)
          </button>
        </li>
        <li>
          <button onClick={podzim}>
            <img src={listUrl} width={16} height={16} alt="list" />
            podzim (září až listopad)
          </button>
        </li>
        <li>
          <button onClick={zima}>
            <img src={vlockaUrl} width={16} height={16} alt="vločka" />
            zima (prosinec až únor)
          </button>
        </li>
      </ol>
    </>
  );
};

export default Uloha3;
