import React from 'react';

// Zadání 1:
// Dopiš komponentu `NakupniPolozka`, aby v divu byl vypsaný
// název položky a tlačítko s textem „koupit“.

// Zadání 2:
// Po kliknutí na tlačítko vypiš do konzole text
// „Uživatel chce koupit DOPLŇ_NÁZEV_POLOŽKY“.

const handleClick = (nazev) => {
  return console.log('Uzivatel chce koupit ' + nazev);
};

const NakupniPolozka = ({ nazev }) => {
  return (
    <div>
      {nazev}
      <button onClick={() => handleClick(nazev)}>koupit </button>
    </div>
  );
};

// Zadání 3:
// Pomocí `polozky.map` vypiš všechno ovoce v poli jako nákupní položky.
// Tj. pro každé ovoce se zobrazí název a vedle tlačítko koupit,
// které po kliknutí vypíše do konzole např. "Uživatel chce koupit jablka"

const Uloha5 = () => {
  const polozky = ['hrušky', 'jablka', 'třešně', 'jahody'];

  return (
    <>
      <div>
        {polozky.map((polozka) => {
          return <NakupniPolozka nazev={polozka} key={polozka} />;
        })}
      </div>
    </>
  );
};

export default Uloha5;
