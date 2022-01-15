import React from 'react';

// Zadání:
// Předstírejme, že na stránce je složitý formulář,
// do kterého uživatel možná pracně vyplnil nějaká data.
// Po kliknutí na odkaz se radši uživatele zeptej pomocí `confirm`,
// jestli chce opravdu odejít na jinou stránku a tím ztratit rozpracovanou práci.
// Pokud otázku nepotvrdí, zamez přesměrování pomocí `event.preventDefault()`.

const ZaverecnyBonus2 = () => {
  const handleClick = (event) => {
    if (!confirm('Chcete stranku skutecne opustit?')) {
      event.preventDefault();
    }
  };

  return (
    <>
      Odkaz:{' '}
      <a onClick={handleClick} href="https://www.czechitas.cz/">
        www.czechitas.cz
      </a>
      <hr />
      Super složitý formulář:
      <form>
        <textarea
          rows={5}
          cols={60}
          defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam vitae necessitatibus et perspiciatis consectetur, soluta quia vero porro hic, esse tempora sint eaque adipisci asperiores alias repudiandae tempore? Omnis?"
        />
        <br />
        <button>Uložit</button>
      </form>
    </>
  );
};

export default ZaverecnyBonus2;
