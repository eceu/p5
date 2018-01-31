function Target(playground){
    this.playground = playground;
    this.col = this.playground.randomCol();
    this.row = this.playground.randomRow();
    this.clr = p5.color(0, 100, 100);
    this.isTouched = false;

    this.show = function(){
        if(this.isTouched == true){
            this.isTouched = false;
        }
        else{
        //    console.log("target.col-row: " + this.col + "-" + this.row)
            this.playground.draw(this.col, this.row, this.clr);
        }
    };
    this.touched = function(){
        this.isTouched = true;
        //console.log("target.touched")
        this.playground.draw(this.col, this.row);
        this.col = this.playground.randomCol();
        this.row = this.playground.randomRow();
    };
    this.show();
}