const search = async (queryString) => {
  let response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${queryString} `
  ).then((response) => response.json());

  console.log(response);
  return response;
};

const createMoveiTile = (show) => {
  return `
    <div class="card">
        <img src=${
          show.image !== null
            ? show.image.medium
            : "https://www.teqport.com/images/employees/lower_res/Placeholder_no_text.svg.png"
        }>
        <div class="text">
            <h3>${show.name}</h3>
            <h5>${
              show.rating.average !== null
                ? `Average rating: ${show.rating.average}`
                : "No average rating"
            }</h5>
            <a href="${
              show.url
            }" target="_blank"><img class="imdb" src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/512/IMDb-icon.png" alt=""></a>
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

window.addEventListener("load", () => {
  document.querySelector("body").insertAdjacentHTML(
    "afterbegin",
    `<div class="light title">
	<h2>Movie Cards</h2>
	<button class="btn">Turn the light on/off</button>
	</div>`
  );

  let btn = document.querySelector(".btn");
  btn.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("dark");
  });
});
