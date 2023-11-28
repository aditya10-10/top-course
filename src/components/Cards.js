import React, { useState } from "react";

function Cards({ Poster, Title, Year, imdbID, Plot, removeMovie }) {
  const [readMore, setReadMore] = useState(false);

  const description = readMore ? Plot : `${Plot.substring(0, 100)} .....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div>
      <img src={Poster} alt={Title}></img>
      <h1>Viewer</h1>
      <h1>{Title}</h1>
      <h3>{Year}</h3>
      {/* <h1>{imdbID}</h1> */}

      <div>
        <h1>Description</h1>
        <p>{readMore ? Plot : description}</p>
        <span onClick={readMoreHandler}>
          {readMore ? "show less" : "show more"}
        </span>
      </div>

      <button onClick={() => removeMovie(Year)}>No Internet</button>
    </div>
  );
}

export default Cards;
