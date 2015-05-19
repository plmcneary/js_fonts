var winAvg = fonts.reduce(function(sum, font){
  return sum + font.win;
}, 0)/fonts.length;

var macAvg = fonts.reduce(function(sum, font){
  return sum + font.mac;
}, 0)/fonts.length;

var winMac90 = fonts.filter(function(font){
  return font.win>=90 && font.mac>=90;
});

var htmlArr = winMac90.map(function(font){
  return "<li><span class=\"family\">" +font.fontFamily + " " + font.type + "</span> <span class=\"stats\"><span class=\"win\"><em>Windows </em>" + font.win + "% </span><span class=\"mac\"><em>Mac </em>" + font.mac +"%</span></span></li>";
});

document.querySelector('ul').innerHTML = htmlArr.join('');
