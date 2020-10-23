import React from "react";
export default ({ name, heroName, birthDay, birthMonth, birthYear, img }) => {
  const date = new Date();
  return (
    <article className="person">
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5>{heroName}</h5>
        <p>{date.getFullYear() - birthYear + " years"}</p>
      </div>
    </article>
  );
};
