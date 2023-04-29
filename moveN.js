let speedup = 5 

function moving() {
    this.width = 140
    this.height = 140
    this.x = 0 
    this.y = h - 200
    this.gravity = .7
    this.lift = -11
    this.velocity = 0
   
    
    

    this.show = function() {
        image(ninja,this.x,this.y,this.width,this.height)
    }
 

    this.walk = function() {
        if (keyIsDown(RIGHT_ARROW)&&(this.x < w)) {
        this.x = this.x + speedup 
    }
        if (keyIsDown(LEFT_ARROW) && (this.x > 0 )){
        this.x = this.x - speedup;
    }
       

    }
    
    this.up = function() {
        this.velocity += this.lift 
    }
                

    this.update = function() {
        this.velocity += this.gravity 
        this.y += this.velocity 
        if (this.y + this.height > h) {
            this.y = h - this.height 
            this.velocity = 0 
        }
        if (this.y < 0) {
            this.y = 0 + this.height 
        }
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x  > w - this.width) {
            this.x = w - this.width 
        }
    }
   

    }
