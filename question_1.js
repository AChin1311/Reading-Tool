function submit() {
  var score = 0;
  var q1 = document.getElementById("q1b").checked;
  var q2 = document.getElementById("q2a").checked;
  var q3a = document.getElementById("q3a").checked;
  var q3b = document.getElementById("q3b").checked;
  var q3c = document.getElementById("q3c").checked;
  
  
  if (q1)
    score += 1;
  if (q2)
    score += 1;
  if (q3a && !q3b && q3c)
    score += 1;
  console.log(score);
  alert("You've submitted!");
}