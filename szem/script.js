let pupil = document.querySelector(".pupil");

window.addEventListener("mousemove", function (e) {
  console.log(e.clientX, e.clientY);
  const width = window.innerWidth;
  let diff = e.clientX - width / 2;
  let scale = 360 / (width / 2) / 3;
  if (e.clientX > width / 2) {
    pupil.style.transform = `rotate(-${diff * scale + 40}deg)`;
  } else {
    pupil.style.transform = `rotate(${diff * scale * -1 - 40}deg)`;
  }
});

pupil.addEventListener("mouseover", (e) => {
  e.target.style.transform = "scale(1.2)";
});

pupil.addEventListener("mouseout", (e) => {
  e.target.style.transform = "scale(1)";
});
