class Drop {
    constructor(x,y){
var options={
   friction:0.1
}
this.body=Bodies.circle(x,y,10,options);
this.radius=10;

World.add(world,this.body);

    }
  

    display(){
        var pos=this.body.position;

        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10,20);
    }

}