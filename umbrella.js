class Umbrella {
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.image=loadImage("boy.gif");
        

        this.body=Bodies.circle(x,y,60,options);
        this.radius=60;
        World.add(world,this.body);
    
    }
    display(){
        var pos=this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,60);
    }
}