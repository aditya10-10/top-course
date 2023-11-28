import Cards from "./Cards";

function Movies({ movies, removeMovie}) {
  return (
    <div>
      <div>
        <h1>Movies</h1>
        <p>new Movies</p>
      </div>

      <div>
        {movies.map((movie) => {
          return <Cards key={movie.Year} {...movie} removeMovie = {removeMovie}></Cards>;
        })}

      </div>
    </div>
  );
}

export default Movies;
