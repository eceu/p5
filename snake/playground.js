function PlayGround(canvasWidth, canvasHeight, buddySize, scoreBoardHeight){
    this.scoreBoard = new ScoreBoard(canvasWidth, canvasHeight, scoreBoardHeight);
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.buddySize = buddySize;
    this.cols = p5.floor(this.canvasWidth/this.buddySize);
    this.rows = p5.floor(this.canvasHeight/this.buddySize);

    //console.log("playground.cols-rows:" + this.cols + "-" + this.rows)
  
    this.draw = function(col, row, colr = p5.color(255, 255, 255)){
        p5.fill(colr);
        p5.rect((col-1)*this.buddySize, (row-1)*this.buddySize, this.buddySize, this.buddySize);
        this.scoreBoard.show();
        return this;
    };
    this.isOut = function(col, row){
        //console.log("die")
        if(col < 1){
          return true;
        }
        if(row < 1){
          return true;
        }
        if(col > this.cols){
          return true;
        }
        if(row > this.rows){
          return true;
        }
        return false;
    };
    this.randomCol = function(){
        return p5.floor(p5.random(2, this.cols));
    };
    this.randomRow = function(){
        return p5.floor(p5.random(2, this.rows));
    };
}