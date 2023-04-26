function moving() {
    this.width = 120
    this.height = 120
    this.x = 0 
    this.y = h - 200
    this.gravity = .7 
    this.lift = -2
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
//change to keyispressed
        if (keyIsDown(UP_ARROW)&& (this.y > 0)){
        //this.y = this.y - 5;  
        //this.y += this.gravity
            this.velocity += this.lift 
         

    }
    }

    this.update = function() {
        this.velocity += this.gravity 
        this.y += this.velocity 
        if (this.y + this.height > h) {
            this.y = h - this.height 
            this.velocity = 0 
        }
        if (this.y < 0) {
            this.y = 0 - this.height 
        }

    }
   

    }
