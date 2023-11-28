import React, { useState } from "react";
import data from "./data";
import Movies from "./components/Movie";

const App = () => {
  const [movies, setMovies] = useState(data);

  function removeMovie(Year){
	const newMovies = movies.filter((movie) => movie.Year !== Year);
	setMovies(newMovies);
  }

  function readMoreHandler(){
	setMovies(data);
  }

  if(movies.length === 0){
	return(
		<div>
			<button onClick={readMoreHandler}>
				refresh
			</button>
		</div>
	)
  }

  return (
    <div className="App">
      <h1>Movie List</h1>
	  <Movies
		movies={movies} 
		removeMovie={removeMovie} />
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import data from "./data"; // Make sure the path is correct
// import Movies from "./components/Movie";

// const App = () => {
//   const [movies, setMovies] = useState(data);

//   function removeMovie(Year) {
//     const newMovies = movies.filter((movie) => movie.Year !== Year);
//     setMovies(newMovies);
//   }

//   return (
//     <div className="App">
//       <h1>Movie List</h1>
//       <Movies movies={movies} removeMovie={removeMovie} />
//     </div>
//   );
// }

// export default App;
