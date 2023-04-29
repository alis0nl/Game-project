//this is an object 
function boom() {
    //define it's position because we are inside object, use "this", when outisde use "jumper"
    this.x = Math.random() * (w - 100);
    this.y = 0
    this.gravity = .1 
    //velocity 
    this.velocity = 0
    this.width = 110
    this.height = 100

    // build a function to declare what I look like 
    this.show = function() {
        image(bomb,this.x,this.y,this.width,this.height)
    }
    this.update = function() {
            this.velocity += this.gravity 
            this.y += this.velocity 
            //air resistance 
            this.velocity *= 0.9 
        if (this.y + this.height > h) {
            this.x = Math.random() * (w - 100);
            this.y = 0
        }
        if (this.y < 0 ) {
            this.y = 0

        }
        

    }
}





