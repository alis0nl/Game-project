function moving() {
    this.width = 120
    this.height = 120
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
        this.x = this.x + 5
    }
        if (keyIsDown(LEFT_ARROW) && (this.x > 0 )){
        this.x = this.x - 5;
    }
       

    }
    
    this.up = function() {
        this.velocity += this.lift 
       
    }
    if (this.y <= 0) {
        this.y = 0 
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
