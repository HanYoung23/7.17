var Links = {
  setColor: function(color){
    $('a').css('color', color);
  }
}
var Body={
  setColor:function(color){
  $('body').css('color', color);
},
  setBackgroundColor:function(color){
  $('body').css('backgroundColor', color);
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
