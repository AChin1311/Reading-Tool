function submit() {
  var score = 0;
  var q1 = document.getElementById("q1d").checked;
  var q2 = document.getElementById("q2b").checked;
  var q3 = document.getElementById("q3d").checked;
  var q4 = document.getElementById("q4c").checked;
  var q5 = document.getElementById("q5b").checked;
  var q6 = document.getElementById("q6b").checked;
  var q7 = document.getElementById("q7c").checked;
  var q8 = document.getElementById("q8d").checked;
  
  if (q1)
    score += 1;
  if (q2)
    score += 1;
  if (q3)
    score += 1;
  if (q4)
    score += 1;
  if (q5)
    score += 1;
  if (q6)
    score += 1;
  if (q7)
    score += 1;
  if (q8)
    score += 1;
  console.log(score);
}