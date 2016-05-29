function submit() {
  var score = 0;
  var q1 = document.getElementById("q1d").checked;
  var q2 = document.getElementById("q2c").checked;
  var q3 = document.getElementById("q3c").checked;
  var q4 = document.getElementById("q4a").checked;
  
  if (q1)
    score += 1;
  if (q2)
    score += 1;
  if (q3)
    score += 1;
  if (q4)
    score += 1;
  
  console.log(q1);
  console.log(q2);
  console.log(q3);
  console.log(q4);
  console.log(score);
}