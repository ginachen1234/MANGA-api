


var results = document.getElementById("results");

fetch("https://www.mangaeden.com/api/list/0/")
  .then(response => response.json())
  .then((data) => {

    data.forEach((result) => {

        const movies = '<li><img src="'+result.im+'" alt=""><h3>'+result.a+'</h3><p>'+result.c+'</p></li>';
        results.insertAdjacentHTML("beforeend", movies);

    });
  });





