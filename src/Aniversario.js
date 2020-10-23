import React from "react";
import Pessoa from "./Person";
export default ({ pessoas, frase,changeState }) => {
    return (
      
      <>
      <h3>
        {pessoas.length > 1
          ? pessoas.length + " Aniversários " + frase.plural
          : pessoas.length + " Aniversário " + frase.singular}
      </h3>
      {pessoas.map((item) => {
        return <Pessoa {...item} />;
      })}
          <button className="btn" onClick={()=>changeState([])}>Clear</button>
    </>
  );
};
