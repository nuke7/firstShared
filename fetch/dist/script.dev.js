"use strict";

var search = function search(queryString) {
  var response;
  return regeneratorRuntime.async(function search$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.tvmaze.com/search/shows?q=".concat(queryString, " ")).then(function (response) {
            return response.json();
          }));

        case 2:
          response = _context.sent;
          console.log(response);
          return _context.abrupt("return", response);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var createMoveiTile = function createMoveiTile(show) {
  return "\n    <div class=\"card\">\n        <img src=".concat(show.image !== null ? show.image.medium : "https://www.teqport.com/images/employees/lower_res/Placeholder_no_text.svg.png", ">\n        <div class=\"text\">\n            <h3>").concat(show.name, "</h3>\n            <h5>").concat(show.rating.average !== null ? "Average rating: ".concat(show.rating.average) : "No average rating", "</h5>\n            <a href=\"").concat(show.url, "\" target=\"_blank\"><img class=\"imdb\" src=\"https://icons.iconarchive.com/icons/uiconstock/socialmedia/512/IMDb-icon.png\" alt=\"\"></a>\n        </div>\n    </div>");
};

document.querySelector("#b").addEventListener("click", function _callee() {
  var queryString, responseArrey, resultHTML;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          queryString = document.querySelector("#s").value;
          _context2.next = 3;
          return regeneratorRuntime.awrap(search(queryString));

        case 3:
          responseArrey = _context2.sent;
          resultHTML = "";
          responseArrey.forEach(function (value) {
            resultHTML += createMoveiTile(value.show);
          });
          document.querySelector(".results").innerHTML = resultHTML;

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
window.addEventListener("load", function () {
  document.querySelector("body").insertAdjacentHTML("afterbegin", "<div class=\"light title\">\n\t<h2>Movie Cards</h2>\n\t<button class=\"btn\">Turn the light on/off</button>\n\t</div>");
  var btn = document.querySelector(".btn");
  btn.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("dark");
  });
});