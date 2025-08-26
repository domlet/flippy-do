onEvent("twoToNine", "click", function () {
  flip("twoToSeven");
});
onEvent("twoToEight", "click", function () {
  flip("twoToSeven");
});

onEvent("twoToSeven", "click", function () {
  flip("twoToSeven");
});

onEvent("twoToSix", "click", function () {
  flip("twoToSix");
});

onEvent("twoToFive", "click", function () {
  flip("twoToFive");
});

onEvent("twoToFour", "click", function () {
  flip("twoToFour");
});

onEvent("twoToThree", "click", function () {
  flip("twoToThree");
});

onEvent("twoToTwo", "click", function () {
  flip("twoToTwo");
});

onEvent("twoToOne", "click", function () {
  flip("twoToOne");
});

onEvent("twoToZero", "click", function () {
  flip("twoToZero");
});

function flip(element) {
  if (getText(element) == 0) {
    playSound("assets/category_app/app_button_3.mp3");
    setText(element, 1);
    setProperty(element, "background-color", "#ffffff");
    setProperty(element, "text-color", "#ffa400");
  } else {
    playSound("assets/category_app/app_button_2.mp3");
    setText(element, 0);
    setProperty(element, "background-color", "#ffa400");
    setProperty(element, "text-color", "#ffffff");
  }
  setText("output", calculate());
}

function calculate() {
  var total = 0;
  if (getText("twoToSeven") == 1) {
    total = total + 128;
  }
  if (getText("twoToSix") == 1) {
    total = total + 64;
  }
  if (getText("twoToFive") == 1) {
    total = total + 32;
  }
  if (getText("twoToFour") == 1) {
    total = total + 16;
  }
  if (getText("twoToThree") == 1) {
    total = total + 8;
  }
  if (getText("twoToTwo") == 1) {
    total = total + 4;
  }
  if (getText("twoToOne") == 1) {
    total = total + 2;
  }
  if (getText("twoToZero") == 1) {
    total = total + 1;
  }
  return total;
}
