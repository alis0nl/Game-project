function moving() {
    this.x = 0 
    this.y = 470
    this.gravity = .3 
    this.lift = -20
    this.velocity = 0
    this.width = 120
    this.height = 120

    this.show = function(){
        image(ninja,this.x,this.y,this.width,this.height)
    }
    this.up = function() {
        this.velocity += this.lift 
    }
    if (this.y > h) {
        this.y = h
    }
    if (this.y < 0 ) {
        this.y = 0
    }

    }
