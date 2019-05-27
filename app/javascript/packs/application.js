var results = document.getElementById("results");

fetch("https://www.mangaeden.com/api/list/0/", {
    mode: 'cors'
  })
  .then(response => response.json())
  .then((data) => {

    data.manga.slice(3, 50).forEach((result) => {

      const movies = '<li><img src="https://cdn.mangaeden.com/mangasimg/' + result.im + '" alt=""><h3>' + result.a + '</h3><p>' + result.c + '</p></li>';
      results.insertAdjacentHTML("beforeend", movies);

    });
  });
