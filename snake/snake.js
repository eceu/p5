var p5;
function Snake(pFive){
    Snake.params = Object.assign(
        {
        playgroundWidth: 500,
        playgroundHeigth: 500,
        snakeSize: 50,
        scoreboardHeigth: 50,
        frameRate: 5,
    }, 
    Snake.params);
    
    p5 = pFive;
    
    
    pFive.setup = function() {
      // put setup code here
      pFive.createCanvas(Snake.params.playgroundWidth, Snake.params.playgroundHeigth + Snake.params.scoreboardHeigth);
      pFive.background(50);
      pFive.frameRate(Snake.params.frameRate);
      playground = new PlayGround(Snake.params.playgroundWidth, Snake.params.playgroundHeigth, Snake.params.snakeSize, Snake.params.scoreboardHeigth);
      target = new Target(playground);
      buddy = new Buddy(playground, target);
      
  
    };
  
    pFive.draw = function() {
      // put drawing code here
  
      pFive.background(50);
      buddy.move();
      target.show();
      
    };
  
  }