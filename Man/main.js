var answer = 0;
var order = [];
var nAnswered = 0;

function generateMT() {
  var MTHTML = "";

  for (var j = 0; j <= 10; j++) {
    var trHTML = "<tr>";
    for (var i = 0; i <= 10; i++) {
      thID = i + "_" + j;
      var thContent = "";
      if (j == 0 && i == 0) {
        thContent += "";
      } else if (i == 0) {
        thContent += j;
      } else if (j == 0) {
        thContent += i;
      } else {
        thContent += "";
      }
      thHTML = "<th id=" + thID + ">" + thContent + "</th>";
      trHTML += thHTML;
      console.log(thHTML);
    }
    trHTML += "</tr>";
    MTHTML += trHTML;
  }

  document.getElementById("MT").innerHTML = MTHTML;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function memorize() {
  order = [];
  nAnswered = 0;
  for (var j = 1; j <= 10; j++) {
    for (var i = 1; i <= 10; i++) {
      if (i >= j) order.push([i, j]);
    }
  }
  shuffle(order);
  console.log(order);
  answer = order[nAnswered][0] * order[nAnswered][1];
  document.getElementById("formula").innerText =
    order[nAnswered][0] + "*" + order[nAnswered][1] + "=";
}

function game() {
  order = [];
  nAnswered = 0;
  if (Math.random() > 0.5) {
    for (var j = 1; j <= 10; j++) {
      for (var i = 1; i <= 10; i++) {
        if (i >= j) order.push([i, j]);
      }
    }
  } else {
    for (var j = 1; j <= 10; j++) {
      for (var i = 1; i <= 10; i++) {
        if (i >= j) order.push([j, i]);
      }
    }
  }

  answer = order[nAnswered][0] * order[nAnswered][1];
  document.getElementById("formula").innerText =
    order[nAnswered][0] + "*" + order[nAnswered][1] + "=";
}

function submit() {
  console.log(nAnswered);
  if (nAnswered < 55) {
    console.log("nAnswered<55");
    var cAnswer = document.getElementById("answer").elements[0].value;
    if (cAnswer == answer) {
      console.log("correct");
      document.getElementById(
        order[nAnswered][0] + "_" + order[nAnswered][1]
      ).innerText = answer;
      document.getElementById(
        order[nAnswered][1] + "_" + order[nAnswered][0]
      ).innerText = answer;
      nAnswered++;
      answer = order[nAnswered][0] * order[nAnswered][1];
      document.getElementById("formula").innerText =
        order[nAnswered][0] + "*" + order[nAnswered][1] + "=";
    } else {
      console.log(answer);
      console.log(cAnswer);
      document.getElementById("answer").elements[0].value =
        "incorrect, please try again";
    }
  }
}

function loadRecord() {}

function swap(n) {
  document.getElementById("mainMenu").style.display = "none";
  switch (n) {
    case 1:
      document.getElementById("children").style.display = "block";
      generateMT();
      for (var j = 1; j <= 10; j++) {
        for (var i = 1; i <= 10; i++) {
          document.getElementById(i + "_" + j).innerText = i * j;
        }
      }
      break;

    case 2:
      document.getElementById("children").style.display = "block";
      generateMT();
      memorize();
      break;
    case 3:
      document.getElementById("children").style.display = "block";
      generateMT();
      game();
      break;
    case 4:
      document.getElementById("parents").style.display = "block";
      loadRecord();
      break;
  }
}

function back() {
  document.getElementById("mainMenu").style.display = "block";
  document.getElementById("children").style.display = "none";
  document.getElementById("parents").style.display = "none";
}
