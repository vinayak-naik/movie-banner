const MovieData = [
  {
    Title: "Bhakta Siriyala",
    Year: "1980",
    imdbID: "tt0233330",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTkzMWRiMjgtODA1NC00MjYzLWFjMWItODM3ZDMwNDEyNzk2XkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_SX300.jpg",
  },
  {
    Title: "Nagara Haavu",
    Year: "1972",
    imdbID: "tt0232152",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTEyYWJlY2MtY2JjNy00YjllLTgzYWYtMzg2ZDFkMjU2NWQ1XkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_SX300.jpg",
  },
  {
    Title: "Gandhada Gudi",
    Year: "1973",
    imdbID: "tt1360153",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzcyNjhkMGMtYjU0OC00MjVlLWFlZDktYmE5NTJhMGJkMjIyXkEyXkFqcGdeQXVyMzQzMDc2MDk@._V1_SX300.jpg",
  },
  {
    Title: "Bhakta Kanakadasa",
    Year: "1960",
    imdbID: "tt1346649",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWIyYjFmZDEtYjMyNS00MTkzLTkzMmYtMjQzODUxODI4MjgwXkEyXkFqcGdeQXVyMzQzMDc2MDk@._V1_SX300.jpg",
  },
  {
    Title: "Babruvahana",
    Year: "1977",
    imdbID: "tt0233270",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjk1YzdiZTUtYmVmMi00NGVlLWI3ZmItMzgzM2NmNDQ0NDY5XkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_SX300.jpg",
  },
  {
    Title: "Minchina Oata",
    Year: "1980",
    imdbID: "tt0245284",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWY3NmQ1NTYtOTRmYy00YTUxLTk5ODUtMTQ0ZDY3MzU0YzBjXkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Ranadheera Kanteerava",
    Year: "1960",
    imdbID: "tt0323766",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTNhZmJiYmMtMDRiZS00NzM2LWJlODMtYWQ5NjgxNWI0MWYxXkEyXkFqcGdeQXVyMzQzMDc2MDk@._V1_SX300.jpg",
  },
  {
    Title: "Amrutha Varshini",
    Year: "1997",
    imdbID: "tt5471570",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWIwYWU2MjctYzY2Yi00ZWU3LTg3MzUtNDEzYWE2MTU1ZTU2XkEyXkFqcGdeQXVyNTE0NDY5Njc@._V1_SX300.jpg",
  },
  {
    Title: "Amma I love you",
    Year: "2018",
    imdbID: "tt8364128",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTllZGU4YTctNzA0ZC00YjU5LTkzNTQtNjdhMjE5Y2UyYTNkXkEyXkFqcGdeQXVyODk5NDM5ODk@._V1_SX300.jpg",
  },
  {
    Title: "Preeti Madu Tamashe Nodu",
    Year: "1980",
    imdbID: "tt1354054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTAyNTM0NzYtYzg2NS00ZGJjLTk3OTMtN2JlYWU5OGRlYzVjXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
  },
  {
    Title: "RangiTaranga",
    Year: "2015",
    imdbID: "tt4432480",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTAzNjAwNDEwMTNeQTJeQWpwZ15BbWU4MDk5MjMyMzYx._V1_SX300.jpg",
  },
  {
    Title: "Mungaru Male",
    Year: "2006",
    imdbID: "tt0986329",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjdmY2U2N2MtNGM1Zi00YjQxLTlmMTMtNzQ5YTk1YzhkNTVjXkEyXkFqcGdeQXVyMzQzMDc2MDk@._V1_SX300.jpg",
  },
  {
    Title: "Love Mocktail",
    Year: "2020",
    imdbID: "tt10919132",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDEwODVjYWQtYTVhNC00YzU0LWFjYTQtZmVlNDk0YmQ1YTY4XkEyXkFqcGdeQXVyNjIwNzA2NzY@._V1_SX300.jpg",
  },
  {
    Title: "Googly",
    Year: "2013",
    imdbID: "tt3075360",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NzQ5MDk3NF5BMl5BanBnXkFtZTgwMzIyMDU4MzE@._V1_SX300.jpg",
  },
  {
    Title: "Raajakumara",
    Year: "2017",
    imdbID: "tt6359554",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWExNmRhODgtYTc0MC00ZGYwLTk1ZjktNDU0NzE4MjQwN2FkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjIwMzY4NDY@._V1_SX300.jpg",
  },
  {
    Title: "K.G.F: Chapter 1",
    Year: "2018",
    imdbID: "tt7838252",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
  },
  {
    Title: "Avane Srimannarayana",
    Year: "2019",
    imdbID: "tt7998242",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzJmNDBlMzUtMjJjMy00YjRjLTliY2MtNjcwMmExODYzYTZmXkEyXkFqcGdeQXVyOTMxMTk2MTc@._V1_SX300.jpg",
  },
  {
    Title: "Dia",
    Year: "2020",
    imdbID: "tt11235142",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDQxYjRmNWYtNjgyMC00MDg2LTg2OTEtZmIzNWNkMDhkOTk1XkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Bell Bottom",
    Year: "2019",
    imdbID: "tt9430780",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc4ODA2MjQyMF5BMl5BanBnXkFtZTgwMTY3MDI1NzM@._V1_SX300.jpg",
  },
  {
    Title: "K.G.F: Chapter 2",
    Year: "2021",
    imdbID: "tt10698680",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTM5Nzc2NDItYTdlZS00YThkLTlhNGItZGJkZDYyZmQyNTllXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg",
  },
];

export default MovieData;
