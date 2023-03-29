function jumper() {
    this.x = 0
    this.y = 0 
    this.gravity = .4
    this.lift = -20
    this.velocity = 0 
    this.width = 150
    this.height = 150  
}

this.show = function() {
    image(papple,this.x,this.y,this.width,this.height,)
}

this.update = function() {
    this.velocity += this.gravity 
    this.y += this.velocity 
    this.velocity *= 0.9 
    if (this.y < 0) {
        this.y = 0
    }
    }



