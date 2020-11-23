const search = async (quaryString) => {
  let response = await fetch(
    `http://api.tvmaze.com/search/shows?q=${quaryString} `
  ).then((response) => response.json());

  console.log(response);
  return response;
};

const createMoveiTile = (show) => {
  return `
    <div class="card">
        <img src=${show.image !== null ? show.image.medium : "#"}>
        <div class="text">
            <h3>${show.name}</h3>
            <h5>${show.rating.average !== null ? show.rating.average : "Nincs adat"}</h5>
            <a href="${
              show.url
            }" target="_blank"><img class="imdb" src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/IMDb-icon.png" alt=""></a>
        </div>
    </div>`;
};

document.querySelector("#b").addEventListener("click", async () => {
  let queryString = document.querySelector("#s").value;

  let responseArrey = await search(queryString);
  let resultHTML = "";

  responseArrey.forEach((value) => {
    resultHTML += createMoveiTile(value.show);
  });
  document.querySelector(".results").innerHTML = resultHTML;
});
