function moving() {
    this.width = 120
    this.height = 120
    this.x = 0 
    this.y = h - this.height 
    this.gravity = .3 
    this.lift = -20
    this.velocity = 0
    

    this.show = function() {
        image(ninja,this.x,this.y,this.width,this.height)
    }

    this.walk = function() {
        if (keyIsDown(RIGHT_ARROW)&&(this.x < w)) {
        this.x = this.x + 5
    }
        if (keyIsDown(LEFT_ARROW) && (this.x > 0 )){
        this.x = this.x - 5;
    }
        if (keyIsDown(DOWN_ARROW) && (this.y +30 < h)){
        this.y = this.y + 5;
    } 
        if (keyIsDown(UP_ARROW)&& (this.y > 0)){
        this.y = this.y - 5;
    }
    }
   

    }
