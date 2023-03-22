function jumper() {
    this.x = 0
    this.y = 0 
    this.gravity = .4
    this.lift = -20
    this.velocity = 0 
    this.width = 50
    this.height = 50  
}

this.show = function() {
    papple = loadImage('pineapple.png') 
}

this.update = function() {
    this.velocity += this.gravity 
    this.y += this.velocity 
    this.velocity *= 0.9 
    if (this.y < 0) {
        this.y = 0
    }
    }



