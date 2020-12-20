function cta_html() {
  return `
    <div id="cta">
      <p>Create an effective campaign and grow sales using insights on what people are more likely to buy next.</p>

      <div class="footer">
        <a href="#">Become a sponsor</a>
        <button class="close">Close</button>
      </div>
    </div>
        `;
}

function content_html() {
  return `
    <section id="content">
      <h2>Pleasure City</h2>
      <p>It is difficult not to feel that the unconscious aim in the most typical modern pleasure resorts is a return to the
      womb. For there, too, one was never alone, one never saw daylight, the temperature was always regulated, one did not
      have to worry about work or food, and one's thoughts, if any, were drowned by a continuous rhythmic throbbing.</p>
    </section>
    
    `;
}

function gallery_html() {
  return `
    <div class="gallery">
    </div>
    `;
}

function page_load() {
  let root = document.querySelector("#root");

  setTimeout(function () {
    root.insertAdjacentHTML("afterbegin", cta_html());
    document
      .querySelector("#cta .footer .close")
      .addEventListener("click", function () {
        document.querySelector("#cta").outerHTML = "";
      });
  }, 2 * 1000);

  root.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="nav">
    <h1 class="title">
      Image Stack Intro Animation
    </h1>
    <div class="demos">
      <a href="#" class="demo">Demo1</a>
      <a href="#" class="demo current">Demo2</a>
    </div>
    <div class="links">
      <a href="">Previous Demo</a>
      <a href="">Article</a>
      <a href="">Github</a>
    </div>
  </div>`
  );
  root.insertAdjacentHTML("afterbegin", `<div id="circle"></div>`);
  let circle = document.querySelector("#circle");

  function follow(e) {
    circle.style.left = e.pageX + 7 + "px";
    circle.style.top = e.pageY + 5 + "px";
  }

  //cursor following circle grows on hover
  document.addEventListener("mouseover", function (e) {
    if (
      e.target.tagName.toLowerCase() === "a" ||
      e.target.tagName.toLowerCase() === "img"
    ) {
      circle.classList.toggle("hover");
    }
  });

  window.addEventListener("mousemove", follow);
  /* window.addEventListener("scroll", follow); */
  // root.insertAdjacentHTML("beforeend", gallery_html());
}

window.addEventListener("load", page_load);
