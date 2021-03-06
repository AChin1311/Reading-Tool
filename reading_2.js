var trans = ["進化", "心理學", "需要", "如", "它的", "開始", "點", "的", "沒有爭議的", "斷言", "那", "的", "解剖", "和", "生理", "特徵", "的", "的", "人性化", "腦", "有", "興起", "如", "一個", "結果", "的", "適應", "至", "的", "需要", "的", "的", "環境", "過度", "的", "千年", "然而", "從", "這個", "合理", "點", "的", "離開", "這些", "心理學家", "使", "不合理", "推斷", "他們", "要求", "那", "的", "行為", "的", "當代", "人", "在", "幾乎", "所有", "它的", "方面", "是", "一個", "反射", "的", "特徵", "的", "的", "腦", "那", "收購", "其", "當下", "特點", "中", "那些", "最早的", "天", "的", "我們的", "種類", "什麼時候", "早", "人", "掙扎", "至", "生存", "和", "乘", "這個", "沒有道理的", "假設", "導致", "對於", "例", "至", "建議", "那", "現代", "性", "行為", "是", "決定", "通過", "現實", "的", "更新世", "生活", "這些", "建議", "有", "一個", "準備", "聽眾", "和", "的", "理念", "那", "石", "年齡", "人", "是", "活", "在", "我們的", "基因組", "和", "聽寫", "方面", "的", "我們的", "行為", "具有", "獲得", "地面", "在", "的", "流行", "想像力", "的", "小報", "反复", "跑", "文章", "關於", "發現", "有關", "至", "基因", "對於", "侵略", "蕭條", "抑制", "和", "任何東西", "對於", "哪一個", "我們", "需要", "一個", "現成", "藉口", "這樣", "堅持", "上", "一個", "遺傳", "基礎", "對於", "行為", "否定", "的", "文化", "的影響", "和", "的", "社會", "現實", "那", "分離", "我們", "從", "我們的", "祖先", "的", "困難", "用", "偽", "科學", "的", "這個", "性質", "是", "只是", "這個", "流行", "呼籲", "人", "是", "急於", "至", "接受", "什麼", "是", "打印", "如", "不容置疑的", "假設", "相當", "沒有", "基礎", "那", "任何東西", "打印", "具有", "真實地", "真實地", "來路", "我們", "將", "做", "好", "至", "記得", "那", "的", "骨相學家", "的", "的", "第十九", "世紀", "保持", "搖擺", "對於", "一個", "大量", "時間", "在", "的", "缺席", "的", "任何", "證據", "那", "行為", "傾向", "可以", "是", "推斷", "從", "的", "形狀", "的", "的", "頭骨", "的", "骨相學家", "是", "沒有", "更多", "但", "其", "基因", "將", "似乎", "至", "是", "興旺"]
var n = 268;
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

