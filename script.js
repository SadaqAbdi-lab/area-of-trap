// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcTrapezoid);

// Find inputs
var input1El = document.getElementById("b1-in");
var input2El = document.getElementById("b2-in");
var input3El = document.getElementById("h-in");
var aOut = document.getElementById("area-out");
var picContain = document.getElementById("pic-container");

// Event Function
function calcTrapezoid() {
  // Input
  let b1 = +input1El.value;
  let b2 = +input2El.value;
  let h = +input3El.value;

  // Process
  let area = (1 / 2) * (b1 + b2) * h;
  area = area.toFixed(2);

  // Output
  aOut.innerHTML = area;
  aOut.style.border = "2px solid green";

  var picContainer = document.getElementById("pic");
  picContainer.innerHTML += "<img src='img/check0.webp' width = 20px'>";

  //   Clear inputs

  input1El.value = " ";
  input2El.value = " ";
  input3El.value = " ";

  //   Dropdown menu
}
