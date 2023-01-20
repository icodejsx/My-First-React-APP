import React, { Component, useState } from "react";
import { getMovies } from "../../services/fakeMoviesServices";

const Movie = () => {
  const [movies, setMovies] = useState(getMovies());
  const handleDelete = (movie) => {
    const upDateMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(upDateMovies);
  };
  const count = movies.length;
  const headingStyles = `p-10 content-center bg-red-500 align-item-center a`;

  if (count === 0) {
    return (
      <h1 className={`${headingStyles}`}>
        There are no movies in the data base
      </h1>
    );
  }
  // return (
  //   <>
  //     <h2 className={`${headingStyles}`}> Showing {count} in the database</h2>
  //     <table className="table">
  //       <thead>
  //         <tr>
  //           <th>Title</th>
  //           <th>Genre</th>
  //           <th>Stock</th>
  //           <th>Rate</th>
  //           <th></th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {movies.map((movie) => (
  //           <tr key={movie._id}>
  //             <td>{movie.title}</td>
  //             <td>{movie.genre.name}</td>
  //             <td>{movie.numberInStock}</td>
  //             <td>{movie.dailyRentalRate}</td>
  //             <td>
  //               <button
  //                 onClick={() => handleDelete(movie)}
  //                 className="btn btn-danger btn-sm rounded-sm"
  //               >
  //                 Delete
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </>
  // );
};

export default Movie;
