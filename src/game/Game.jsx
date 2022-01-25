import React from 'react';
import NavigationPage from "../navigationPage/NavigationPage";
import ItemsList from "./ItemsList/ItemsList";

function Game(props) {
  return (
    <>
      <NavigationPage/>
      <div className="container">
        <ItemsList/>
      </div>
    </>

  );
}

export default Game;
