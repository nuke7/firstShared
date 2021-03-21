export const  randomWithin = (range) => {
  //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
  var golden_ratio = 0.618033988749895;
  var r = Math.random();
  r += golden_ratio;
  r %= 1;
  if (Object.prototype.toString.call(range[0]) === "[object Date]") {
    return Math.floor(
      range[0].getTime() + r * (range[1].getTime() + 1 - range[0].getTime())
    );
  } else return Math.floor(range[0] + r * (range[1] + 1 - range[0]));
}

export const formattedTime = (timeValue) => {
  const d = new Date(0);
  if (timeValue !== undefined) d.setUTCSeconds(timeValue);
  return d.toTimeString().split(" ")[0];
}

export const formattedDate = (dateValue) => {
  const d = dateValue === undefined ? new Date() : new Date(dateValue);
  const year = d.getFullYear();
  const month = ("0" + (d.getMonth() + 1)).substr(-2);
  const date = ("0" + d.getDate()).substr(-2);

  return `${year}-${month}-${date}`;
};

/*
  Usage:
    getImageLightness("image.jpg",function(brightness){
        console.log(brightness);
    });
  Result:
    Value will be between 0 (darkest) and 255 (brightest)
*/
export const getImageLightness = (imageSrc, callback) => {
  var img = document.createElement("img");
  img.src = imageSrc;
  img.style.display = "none";
  document.body.appendChild(img);

  var colorSum = 0;

  img.onload = function () {
    // create canvas
    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(this, 0, 0);

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    var r, g, b, avg;

    for (var x = 0, len = data.length; x < len; x += 4) {
      r = data[x];
      g = data[x + 1];
      b = data[x + 2];

      avg = Math.floor((r + g + b) / 3);
      colorSum += avg;
    }

    var brightness = Math.floor(colorSum / (this.width * this.height));
    callback(brightness);
  };
}