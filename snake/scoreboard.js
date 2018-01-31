function ScoreBoard(canvasWidth, canvasHeight, boardHeight){
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.boardHeight = boardHeight;
    this._score = 0;
    this.high = 0;
    this.show = function(){
        colr = p5.color(100, 100, 100);
        p5.fill(colr);
        p5.rect(0, canvasHeight, canvasWidth, canvasHeight + boardHeight);
        
        if(this._score > 0 && this._score == this.high){
            p5.fill(p5.color(155, 0, 0));
        }
        else{
            p5.fill(p5.color(255));
        }
        p5.textSize(boardHeight - 10);
        p5.textAlign(p5.CENTER);
        p5.text("Score: " + this._score + " - High: " + this.high, canvasWidth/2, canvasHeight + boardHeight - 10);
    };
    this.score = function(score){
        this._score = score;
        this.high = this.high>score?this.high:score;
    };
}