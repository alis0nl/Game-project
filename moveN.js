function moving() {
    this.x = 0 
    this.y = 465
    this.gravity = .3 
    this.lift = -20
    this.velocity = 0
    this.width = 120
    this.height = 120

    this.show = function(){
        image(ninja,this.x,this.y,this.width,this.height)
    }
    this.up = function() {
        this.lift 
    }
    

    }
