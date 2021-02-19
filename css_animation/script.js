function pageLoaded() {
  let root = document.querySelector("#root");
  let body = document.querySelector("body");

  let myObjects = [
    {
      tag: "h1",
      content: "Marton Gombos",
    },
    {
      tag: "p",
      content: "FrontEnd Developer",
    },
  ];

  for (myObject of myObjects) {
    root.insertAdjacentHTML(
      "beforeend",
      `<${myObject.tag}> ${myObject.content} </${myObject.tag}>`
    );
  }

  window.addEventListener("click", function () {
    root.classList.toggle("clicked");
  });
}

window.addEventListener("load", pageLoaded);
