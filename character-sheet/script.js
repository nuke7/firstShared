window.onload = function () {
  const name = document.querySelector("#name");
  const race = document.querySelector("#race");
  const gender = document.querySelector("#gender");
  const caste = document.querySelector("#caste");
  const charName = document.querySelector("#char-name");
  const charRace = document.querySelector("#char-race");
  const charGender = document.querySelector("#char-gender");
  const charCaste = document.querySelector("#char-caste");
  const newCharBtn = document.querySelector("#newChar");
  const charTable = document.querySelector("#charTable");
  const exportBtn = document.querySelector("#export");
  let characters = [{}];
  function makeTextFile(text) {
    let textFile;
    let data = new Blob([text], { type: "text/plain" });
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  }

  name.addEventListener("blur", function () {
    if (
      name.value.includes("<") ||
      name.value.includes("#") ||
      name.value.includes("@") ||
      name.value.includes("(") ||
      name.value.includes("{") ||
      name.value.includes("'") ||
      name.value.includes("`")
    ) {
      alert("not valid characters in name");
    } else {
      charName.innerHTML = name.value;
    }
  });

  gender.addEventListener("input", function () {
    if (gender.value === "Male") {
      charGender.innerHTML = `<i class="fas fa-mars"></i> ${gender.value}`;
    } else {
      charGender.innerHTML = `<i class="fas fa-venus"></i> ${gender.value}`;
    }
  });

  race.addEventListener("input", function () {
    charRace.innerHTML = race.value;
  });

  caste.addEventListener("input", function () {
    switch (caste.value) {
      case "Warrior":
        charCaste.innerHTML = `<i class="fas fa-khanda"></i> ${caste.value}`;
        break;
      case "Shaman":
        charCaste.innerHTML = `<i class="fas fa-leaf"></i> ${caste.value}`;
        break;
      case "Mage":
        charCaste.innerHTML = `<i class="fas fa-hat-wizard"></i> ${caste.value}`;
        break;
      case "Rouge":
        charCaste.innerHTML = `<i class="fas fa-mask"></i> ${caste.value}`;
        break;
      case "Hunter":
        charCaste.innerHTML = `<i class="fas fa-paw"></i> ${caste.value}`;
        break;
    }
  });

  newCharBtn.addEventListener("click", function () {
    if (
      !name.value ||
      gender.value === "Select One" ||
      race.value === "Select One" ||
      caste.value === "Select One"
    ) {
      alert("Finish your character's details first!");
    } else {
      let row = charTable.insertRow(-1);
      let nameCell = row.insertCell(0);
      let genderCell = row.insertCell(1);
      let raceCell = row.insertCell(2);
      let casteCell = row.insertCell(3);

      nameCell.innerHTML = name.value;

      if (gender.value === "Male") {
        genderCell.innerHTML = `<i class="fas fa-mars"></i> ${gender.value}`;
      } else {
        genderCell.innerHTML = `<i class="fas fa-venus"></i> ${gender.value}`;
      }

      raceCell.innerHTML = race.value;

      switch (caste.value) {
        case "Warrior":
          casteCell.innerHTML = `<i class="fas fa-khanda"></i> ${caste.value}`;
          break;
        case "Shaman":
          casteCell.innerHTML = `<i class="fas fa-leaf"></i> ${caste.value}`;
          break;
        case "Mage":
          casteCell.innerHTML = `<i class="fas fa-hat-wizard"></i> ${caste.value}`;
          break;
        case "Rouge":
          casteCell.innerHTML = `<i class="fas fa-mask"></i> ${caste.value}`;
          break;
        case "Hunter":
          casteCell.innerHTML = `<i class="fas fa-paw"></i> ${caste.value}`;
          break;
      }

      let character = {
        name: name.value,
        gender: gender.value,
        race: race.value,
        class: caste.value,
      };

      characters.unshift(character);

      charName.innerHTML = "";
      charRace.innerHTML = "";
      charGender.innerHTML = "";
      charCaste.innerHTML = "";
      document.getElementById("data-input").reset();
    }
  });

  function objToString(object) {
    let string = "";

    for (let k in object) {
      if (
        object[k].name != undefined ||
        object[k].gender != undefined ||
        object[k].race != undefined ||
        object[k].class != undefined
      ) {
        if (object.hasOwnProperty(k)) {
          string += `
        The ${k}. character's name is ${object[k].name}
        They are a ${object[k].gender} ${object[k].race},
        Who trained as a ${object[k].class}
        \n`;
        }
      }
    }

    /* console.log(string); */
    return string;
  }

  exportBtn.addEventListener("click", function () {
    console.log(characters);
    /*console.log(characters[0].name); */
    alert("Check the Console!4!!4!");

    objToString(characters);

    for (let i = 0; i < characters.length - 1; i++) {
      console.log(`The ${i + 1}. character's name is ${characters[i].name}. 
      They are a ${characters[i].race} ${characters[i].gender} - 
      and they trained as a ${characters[i].class}.`);
    }

    let link = document.getElementById("downloadlink");
    link.href = makeTextFile(objToString(characters));
    link.style.display = "block";
  });
};
