var trans = ["應該" ,"我們" ,"真" ,"關心" ,"對於" ,"的" ,"最大的" ,"演員" ,"的" ,"的" ,"過去" ,"可以" ,"我們" ,"有" ,"他們" ,"之前" ,"我們" ,"應該" ,"我們" ,"找" ,"他們" ,"太" ,"不同" ,"從" ,"我們的" ,"口音" ,"的" ,"思想" ,"的" ,"感覺" ,"的" ,"言語" ,"在" ,"一個" ,"千" ,"分鐘" ,"細節" ,"哪一個" ,"是" ,"的" ,"的" ,"本質" ,"的" ,"所有" ,"三" ,"博士" ,"多倫的" ,"長" ,"和" ,"有趣" ,"記錄" ,"的" ,"的" ,"勝利" ,"的" ,"加里克" ,"和" ,"其他" ,"減" ,"熟悉" ,"但" ,"在" ,"其" ,"天" ,"幾乎不" ,"減" ,"驚人" ,"玩家" ,"做" ,"不" ,"緩解" ,"一" ,"的" ,"的" ,"懷疑" ,"加里克" ,"本人" ,"如" ,"有時" ,"發生" ,"用" ,"人" ,"誰" ,"有" ,"過" ,"的" ,"學科" ,"的" ,"許多" ,"軼事" ,"和" ,"其他" ,"會話" ,"這裡" ,"如" ,"別處" ,"熊" ,"沒有" ,"非常" ,"不同" ,"數字" ,"一" ,"幾乎不" ,"看到" ,"的" ,"木" ,"對於" ,"的" ,"樹" ,"上" ,"的" ,"其他" ,"手" ,"的" ,"帳戶" ,"的" ,"貝特" ,"也許" ,"的" ,"最大的" ,"的" ,"英語" ,"演員" ,"是" ,"興高采烈" ,"新鮮" ,"那" ,"親密" ,"朋友" ,"的" ,"德萊頓" ,"Tillatson" ,"教皇" ,"誰" ,"執行" ,"一個" ,"複製" ,"的" ,"的" ,"演員的" ,"肖像" ,"通過" ,"Kneller" ,"哪一個" ,"是" ,"仍然" ,"現存" ,"了" ,"值得的" ,"的" ,"其" ,"友誼" ,"他的" ,"事業" ,"帶來的" ,"出" ,"的" ,"最好" ,"元素" ,"在" ,"階段" ,"生活" ,"的" ,"階段" ,"在" ,"這些" ,"卷" ,"呈現" ,"本身" ,"確實" ,"不" ,"僅僅" ,"如" ,"一個" ,"鏡子" ,"的" ,"生活" ,"但" ,"如" ,"一個" ,"插圖" ,"的" ,"的" ,"最大的努力" ,"強度" ,"的" ,"生活" ,"在" ,"的" ,"財富" ,"和" ,"字符" ,"的" ,"的" ,"玩家" ,"UPS" ,"和" ,"起伏" ,"慷慨" ,"黑暗" ,"命運" ,"的" ,"最" ,"細膩" ,"善良" ,"有" ,"無處" ,"過" ,"更多" ,"突出" ,"比" ,"在" ,"的" ,"私人的" ,"存在" ,"的" ,"那些" ,"投入" ,"至" ,"的" ,"上市" ,"模仿" ,"的" ,"人" ,"和" ,"女人" ,"聯繫" ,"用" ,"的" ,"階段" ,"幾乎" ,"始終" ,"它的" ,"歷史" ,"呈現" ,"本身" ,"如" ,"一個" ,"類" ,"的" ,"試金石" ,"至" ,"帶來" ,"出" ,"的" ,"怪誕" ,"的" ,"戲劇" ,"招數" ,"和" ,"對比" ,"的" ,"的" ,"實際" ,"世界"]
var n = 255;
$(document).ready(function(){
  var p = $('#article');
  var text = p.text().split(' ');
  for(var i = 0, len = text.length; i < len; i=i+1) {
      text[i] = '<div class="parent" onMouseOver="add(\'div'+i+'\')" onMouseOut="hide(\'div'+i+'\')">'+text[i]+'<div class="child" id="div'+i+'">'+trans[i]+'</div> </div>'
  }
  p.html(text.join(' '));

});

var times = Array.apply(null, Array(n)).map(Number.prototype.valueOf,0);
var timer;
var focustime = 1000;
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

