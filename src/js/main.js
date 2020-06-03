var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    return {
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
      }
    }
  })();
  
  game.init();
  