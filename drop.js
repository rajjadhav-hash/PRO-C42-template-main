class Drop{
    constructor(x,y){
        var options = {
            isStatic: false,
            friction:0.1  
        }
    
        this.drop = Bodies.circle(x,y,10,options);
        this.radius = 5;
        World.add(world, this.drop)
    }

        update(){
            if(this.drop.position.y>height){
                Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
            }
        }
    
        display(){
            var pos = this.drop.position;
            push();
            fill("lightblue")
            ellipseMode(RADIUS);
           ellipse(this.drop.position.x,this.drop.position.y,this.radius);
           pop();
        }
}
