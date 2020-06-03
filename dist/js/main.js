var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    var player = {
      x:0,
      y: 475,
      h: 25,
      w: 25,
      fill: '#fff'
    }

    return {
      
      player: function(){
         ctx. fillStyle=player.fill
       
        canvas.height = 600;
        canvas.width = 800;
      }
    }
  })();
  
  game.init();
