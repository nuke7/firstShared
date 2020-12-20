"use strict";

function cta_html() {
  return "\n    <div id=\"cta\">\n      <p>Create an effective campaign and grow sales using insights on what people are more likely to buy next.</p>\n\n      <div class=\"footer\">\n        <a href=\"#\">Become a sponsor</a>\n        <button class=\"close\">Close</button>\n      </div>\n    </div>\n        ";
}

function content_html() {
  return "\n    <section id=\"content\">\n      <h2>Pleasure City</h2>\n      <p>It is difficult not to feel that the unconscious aim in the most typical modern pleasure resorts is a return to the\n      womb. For there, too, one was never alone, one never saw daylight, the temperature was always regulated, one did not\n      have to worry about work or food, and one's thoughts, if any, were drowned by a continuous rhythmic throbbing.</p>\n    </section>\n    \n    ";
}

function gallery_html() {
  return "\n    <div class=\"gallery\">\n    </div>\n    ";
}

function page_load() {
  var root = document.querySelector("#root");
  setTimeout(function () {
    root.insertAdjacentHTML("afterbegin", cta_html());
    document.querySelector("#cta .footer .close").addEventListener("click", function () {
      document.querySelector("#cta").outerHTML = "";
    });
  }, 2 * 1000);
  root.insertAdjacentHTML("afterbegin", "\n  <div class=\"nav\">\n    <h1 class=\"title\">\n      Image Stack Intro Animation\n    </h1>\n    <div class=\"demos\">\n      <a href=\"#\" class=\"demo\">Demo1</a>\n      <a href=\"#\" class=\"demo current\">Demo2</a>\n    </div>\n    <div class=\"links\">\n      <a href=\"\">Previous Demo</a>\n      <a href=\"\">Article</a>\n      <a href=\"\">Github</a>\n    </div>\n  </div>");
  root.insertAdjacentHTML("afterbegin", "<div id=\"circle\"></div>");
  var circle = document.querySelector("#circle");

  function follow(e) {
    circle.style.left = e.pageX + 7 + "px";
    circle.style.top = e.pageY + 5 + "px";
  } //cursor following circle grows on hover


  document.addEventListener("mouseover", function (e) {
    if (e.target.tagName.toLowerCase() === "a" || e.target.tagName.toLowerCase() === "img") {
      circle.classList.toggle("hover");
    }
  });
  window.addEventListener("mousemove", follow);
  /* window.addEventListener("scroll", follow); */
  // root.insertAdjacentHTML("beforeend", gallery_html());
}

window.addEventListener("load", page_load);