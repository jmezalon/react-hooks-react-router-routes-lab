import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div key={actor.name}>
            <p>{actor.name}</p>
            <ul>
              {actor.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
