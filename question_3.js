function submit() {
  var score = 0;
  var q1 = document.getElementById("q1a").checked;
  var q2 = document.getElementById("q2d").checked;
  var q3 = document.getElementById("q3b").checked;
  
  if (q1)
    score += 1;
  if (q2)
    score += 1;
  if (q3)
    score += 1;
  console.log(score);
}