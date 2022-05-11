import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies(); 
  return res.render("home",{PageTitle:"Movies!",movies});
};
export const movieDetail = (req, res) => {
  const {id} = req.params;
  const movie = getMovieById(id);
  return res.render("detail",{movie});
};
export const filterMovie = (req, res) => {
  const {year, rating} = req.query;
  if (year && !rating){
    const movies = getMovieByMinimumYear(year);
    return res.render("home",{PageTitle:"Movies!",movies});
  }
  else if (!year && rating){
    const movies = getMovieByMinimumRating(rating);
    return res.render("home",{PageTitle:"Movies!",movies});
  }
};
