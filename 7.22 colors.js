var Links = {
  setColor: function(color){
    var list = document.querySelectorAll('a');
      var i = 0;
      while(i < list.length){
          list[i].style.color = color;
          i = i + 1;}
  }
}
var Body={
  setColor:function(color){
  document.querySelector('body').style.color = color;
},
  setBackgroundColor:function(color){
  document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('lime');
      Links.setColor('red');
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Links.setColor('orange');
      self.value = 'night';
  }
}
