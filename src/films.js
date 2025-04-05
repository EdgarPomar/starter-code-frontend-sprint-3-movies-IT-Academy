// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  console.log("EXERCICI 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter(movie => movie.director === director);
  const totalScore = directorMovies.reduce((sum, movie) => sum + movie.score, 0);
  const average = totalScore / directorMovies.length || 0;
  console.log("EXERCICI 3 ->", average)
  return Number(average.toFixed(2));
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const copiedArray = [...array];
  copiedArray.sort((a, b) => a.title.localeCompare(b.title));
  console.log("EXERCICI 4 ->", copiedArray);
  return copiedArray.slice(0, 20).map(movie => movie.title);
}



// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const copiedArray = [...array];
  copiedArray.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });
  console.log("EXERCICI 5 ->" ,copiedArray);
  return copiedArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const copiedArray = JSON.parse(JSON.stringify(array)) // fem una còpia profunda

  const converted = copiedArray.map(movie => {
    let totalMinutes = 0

    const duration = movie.duration

    const hoursMatch = duration.match(/(\d+)h/)
    const minutesMatch = duration.match(/(\d+)min/)

    if (hoursMatch) totalMinutes += Number(hoursMatch[1]) * 60
    if (minutesMatch) totalMinutes += Number(minutesMatch[1])

    return {
      ...movie,
      duration: totalMinutes
    }
  })

  console.log("EXERCICI 7 ->", converted)
  return converted
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
