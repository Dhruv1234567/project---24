class paper {
    constructor(){
        this.body=Bodies.circle(60,52,10,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
        World.add(world,this.body);
this.x=60;
this.y=512;
this.radius=10;
    }
    display(){
        ellipseMode(RADIUS)
var t=this.body.position;
circle(t.x,t.y,this.radius);
    }
    
}