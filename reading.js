$(document).ready(function(){
  var p = $('#article');
  var text = p.text().split(' ');
  for(var i = 0, len = text.length; i < len; i=i+1) {
      text[i] = '<div class="parent" onMouseOver="add(\'div'+i+'\')" onMouseOut="hide(\'div'+i+'\')">'+text[i]+'<div class="child" id="div'+i+'">Div '+i+' Content</div> </div>'
  }
  p.html(text.join(' '));

});

var times = Array.apply(null, Array(265)).map(Number.prototype.valueOf,0);
var timer;
var focustime = 2000;
function add(id_str) {
  var sub = id_str.substring(3, 6);
  var id = parseInt(sub, 10);
  times[id] += 1;
  console.log("word"+id+": "+times[id]);
  if (times[id]) {
    timer = setTimeout(function() {
      document.getElementById(id_str).style.visibility = "visible";
    }, focustime);
  }
}
function hide(id_str) {
  clearTimeout(timer);
  document.getElementById(id_str).style.visibility = "hidden";
}

