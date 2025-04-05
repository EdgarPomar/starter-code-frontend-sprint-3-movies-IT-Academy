// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter(movie => movie.director === director);
  const totalScore = directorMovies.reduce((sum, movie) => sum + movie.score, 0);
  const average = totalScore / directorMovies.length || 0;
  return Number(average.toFixed(2));
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const copiedArray = [...array];
  copiedArray.sort((a, b) => a.title.localeCompare(b.title));
  return copiedArray.slice(0, 20).map(movie => movie.title);
}



// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const copiedArray = [...array];
  copiedArray.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });
  return copiedArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const filtered = movies.filter(m => 
    m.genre && m.genre.includes(category) && typeof m.score === 'number'
  )
  if (filtered.length === 0) return 0

  const total = filtered.reduce((acc, m) => acc + m.score, 0)
  return Number((total / filtered.length).toFixed(2))
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const copiedArray = JSON.parse(JSON.stringify(array))

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
  return converted
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const copiedArray = JSON.parse(JSON.stringify(array))
  const filmsOfYear = copiedArray.filter(movie => movie.year === year)

  if (filmsOfYear.length === 0) return []

  let best = filmsOfYear[0]

  for (let i = 1; i < filmsOfYear.length; i++) {
    if (filmsOfYear[i].score > best.score) {
      best = filmsOfYear[i]
    }
  }
  return [best]
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
