//this is an object 
function jumper() {
    //define it's position because we are inside object, use "this", when outisde use "jumper"
    this.x = 0
    this.y = 0
    this.gravity = .3
    //oppose gravity 
    this.lift = -20
    //velocity 
    this.velocity = 0
    this.width = 80
    this.height = 80

    // build a function to declare what I look like 
    this.show = function() {
        image(papple,this.x,this.y,this.width,this.height)
    }
    this.update = function() {
            this.velocity += this.gravity 
            this.y += this.velocity 
            //air resistance 
            this.velocity *= 0.9 
        if (this.y > h) {
            this.y = h 
            this.velocity = 0
        }
        if (this.y < 0 ) {
            this.y = 0
        }
    }
}





