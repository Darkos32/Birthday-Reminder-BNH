import React, { useState } from "react";
import data from "./data";
import Aniversario from "./Aniversario";
function App() {
  const date = new Date();
  console.log(date.getDate());
  let [birthDayToday, setBirthDayToday] = useState(
    data.filter(
      (item) =>
        item.birthDay === date.getDate() &&
        item.birthMonth === date.getMonth() + 1
    )
  );
  let [birthDaySoon, setBirthDaySoon] = useState(
    data.filter(
      (item) =>
        item.birthMonth === date.getMonth() + 1 &&
        item.birthDay > date.getDate()
    )
  );
  let [birthDayLost, setBirthDayLost] = useState(
    data.filter(
      (item) =>
        item.birthDay < date.getDate() &&
        item.birthMonth + 1 === date.getMonth()
    )
  );
  const clear = () => {
    setBirthDayLost([]);
    setBirthDaySoon([]);
    setBirthDayToday([]);
  };
  const inNeedOfClearAll = () => {
    let count = 0;
    const isArrayBiggerThanZero = (array, count) => {
      if (array.length > 0) {
        count += 1;
      }
    };
    isArrayBiggerThanZero(birthDayToday, count);
    isArrayBiggerThanZero(birthDaySoon, count);
    isArrayBiggerThanZero(birthDayLost, count);
    if (count !== 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <main>
      <section className="container">
        {birthDayToday.length !== 0 ? (
          <Aniversario
            pessoas={birthDayToday}
            frase={{ singular: "Hoje", plural: "Hoje" }}
            changeState={setBirthDayToday}
          />
        ) : null}
        {birthDaySoon.length !== 0 ? (
          <Aniversario
            pessoas={birthDaySoon}
            frase={{ singular: "Chegando", plural: "Chegando" }}
            changeState={setBirthDaySoon}
          />
        ) : null}
        {birthDayLost.length !== 0 ? (
          <Aniversario
            pessoas={birthDayLost}
            frase={{ singular: "Perdido", plural: "Perdidos" }}
            changeState={setBirthDayLost}
          />
        ) : null}
        {inNeedOfClearAll() ? (
          <button className="btn" onClick={clear}>
            Clear All
          </button>
        ) : null}
        {birthDayLost.length === 0 &&
        birthDaySoon.length === 0 &&
        birthDayToday.length === 0 ? (
          <h3>All Clear</h3>
        ) : null}
      </section>
    </main>
  );
}

export default App;
