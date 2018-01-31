function Buddy (playground, target){
    this.playground = playground;
    this.target = target;
    this.tail = []; //array of array [col, row]
    this.col = this.playground.randomCol();
    this.row = this.playground.randomRow();
    this.death = false;
    this.rect = {};
    this.tailColr = p5.color(200, 200, 200);

    this.draw = function() {
      //console.log("buddy.draw col-row: " + this.col + "-" + this.row)
      if(this.col == this.target.col && this.row == this.target.row){
      //  console.log("buddy.touched");
        this.target.touched();
        this.tail = [[this.col, this.row]].concat(this.tail);
        this.playground.scoreBoard.score(this.tail.length);
      }
      
      for(var i=0; i<this.tail.length; i++){
        this.playground.draw(this.tail[i][0], this.tail[i][1], this.tailColr);
      }
      this.playground.draw(this.col, this.row);
      return this;
    };
    this.move = function(){
      oldCol = this.col;
      oldRow = this.row;
      switch (p5.keyCode){
        case p5.UP_ARROW: 
          this.row--; 
          break;
        case p5.RIGHT_ARROW: 
          this.col++; 
          break;
        case p5.DOWN_ARROW: 
          this.row++; 
          break;
        case p5.LEFT_ARROW: 
          this.col--; 
          break;
      }
    //  console.log("move: "+oldCol+"-"+oldRow+"->"+this.col+"-"+this.row);
    //  console.log("tail before:"+this.tail);
      this.tail = [[oldCol, oldRow]].concat(this.tail).slice(0, this.tail.length);
    //  console.log("tail after:"+this.tail);
      for(var i=0; i<this.tail.length; i++){
        this.playground.draw(this.tail[i][0], this.tail[i][1], this.tailColr);
      }
      if(this.playground.isOut(this.col, this.row) || this.hitTail()){
        this.death = true;
        //this.len = 0;
        this.col = oldCol;
        this.row = oldRow;
      //  console.log("death:"+this.death);
        this.playground.draw(this.col, this.row, p5.color(255, 0, 0));
        this.tail = [];
      }
      else{
        // remove old rect
        this.draw();
      }
    };
    this.hitTail = function(){
      for(var i=0; i<this.tail.length; i++){
        if(this.col == this.tail[i][0] && this.row == this.tail[i][1])
          return true;
      }
      return false;
    };
    this.grow = function(){
      this.tail = [[this.col, this.row]].concat(this.tail);
    };
    this.draw();
}
