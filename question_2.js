function submit() {
  var score = 0;
  var q1 = document.getElementById("q1d").checked;
  var q2 = document.getElementById("q2c").checked;
  var q3 = document.getElementById("q3a").checked;
  
  
  if (q1)
    score += 1;
  if (q2)
    score += 1;
  if (q3)
    score += 1;
  console.log(score);
  alert("You've submitted!");
}