let movies = [
  {
    title: 'Star Wars: A New Hope',
    hasChewbacca: true,
    yearReleased: 1979,
    cast: [
      {
        name: 'Harrison Ford',
        character: 'Han Solo'
      },
      {
        name: 'Mark Hamill',
        character: 'Luke Skywalker'
      },
      {
        name: 'Carrie Fisher',
        character: 'Leia Organa'
      }
    ]
  },
  {
    title: 'Star Wars: The Empire Strikes Back',
    hasChewbacca: true,
    yearReleased: 1981,
    cast: [
      {
        name: 'Harrison Ford',
        character: 'Han Solo'
      },
      {
        name: 'Mark Hamill',
        character: 'Luke Skywalker'
      },
      {
        name: 'Carrie Fisher',
        character: 'Leia Organa'
      }
    ]
  },
  {
    title: 'Star Wars: Return of the Jedi',
    hasChewbacca: true,
    yearReleased: 1983,
    cast: [
      {
        name: 'Harrison Ford',
        character: 'Han Solo'
      },
      {
        name: 'Mark Hamill',
        character: 'Luke Skywalker'
      },
      {
        name: 'Carrie Fisher',
        character: 'Leia Organa'
      }
    ]
  }
]

function addMovie(title, hasChewbacca, yearReleased, theCast = []) {
  let newMovie = {
    title: title,
    hasChewbacca: hasChewbacca,
    yearReleased: yearReleased,
    cast: theCast,
  }
  movies.push(newMovie);
}

// Make a function that searches all our movies for a given actor name.
// Return an array containing all matching movie objects.
function actorSearch(actorName) {
  let searchResults = [];
  for (let movie of movies) {
    for (let castMember of movie.cast) {
      if (actorName === castMember.name) {
        searchResults.push(movie);
      }
    }
  }
  return searchResults;
}



let indianaJonesCast = [
  {
    name: 'Harrison Ford',
    character: 'Indiana Jones',
  },
  {
    name: 'Karen Allen',
    character: 'Marion'
  }
]
addMovie('Indiana Jones: Raiders of the Lost Ark', false, 1981, indianaJonesCast);


let ikiruCast = [
  {
    name: 'Takashi Shimura',
    character: 'Takashi',

  },
  {
    name: 'Miki Odagiri',
    character: 'Miki',
  }
]
addMovie('Ikiru', false, 1952, ikiruCast)

console.log(movies);

let harrisonFordMovies = actorSearch('Harrison Ford');
console.log('harrisonFordMovies:', harrisonFordMovies);

let takashiShimuraMovies = actorSearch('Takashi Shimura');
console.log('takashiShimuraMovies:', takashiShimuraMovies)
