window.addEventListener("mousemove", function (e) {
  //   console.log(`x: ${e.x} | y: ${e.y}`);
  let mouseX = e.x;
  let mouseY = e.y;
  console.log(mouseX, mouseY);
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (mouseX < width / 2 && mouseY < height / 2) {
    document.querySelector("#egy").style.backgroundColor = "red";
    document.querySelector("#ketto").style.backgroundColor = "white";
    document.querySelector("#harom").style.backgroundColor = "white";
    document.querySelector("#negy").style.backgroundColor = "white";
  } else if (mouseX < width / 2 && mouseY >= height / 2) {
    document.querySelector("#egy").style.backgroundColor = "white";
    document.querySelector("#ketto").style.backgroundColor = "white";
    document.querySelector("#harom").style.backgroundColor = "red";
    document.querySelector("#negy").style.backgroundColor = "white";
  } else if (mouseX >= width / 2 && mouseY >= height / 2) {
    document.querySelector("#egy").style.backgroundColor = "white";
    document.querySelector("#ketto").style.backgroundColor = "white";
    document.querySelector("#harom").style.backgroundColor = "white";
    document.querySelector("#negy").style.backgroundColor = "red";
  } else if (mouseX >= width / 2 && mouseY < height / 2) {
    document.querySelector("#egy").style.backgroundColor = "white";
    document.querySelector("#ketto").style.backgroundColor = "red";
    document.querySelector("#harom").style.backgroundColor = "white";
    document.querySelector("#negy").style.backgroundColor = "white";
  }
});
