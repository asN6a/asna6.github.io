let texts = ["DETERMINATION", "INSPIRATION", "AISLAN A."];
let index = 0;

setInterval(function() {
  document.getElementById("text-time-m").innerHTML = texts[index];
  index = (index + 1) % texts.length;
}, 3000);
