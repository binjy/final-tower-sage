class Polygon{
  constructor(x,y,radius) {
    var options = {
       isStatic: false,
       restitution:1.1,
       density:1,
       friction:0.5
    }
    this.body = Bodies.circle(x,y,radius/2,options);
    this.radius= radius;
 
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
  push()
  translate(pos.x,pos.y)
    fill("brown");
  //  World.add(world,polygon)
    ellipse(0,0, this.radius,this.radius)
    pop()
  }
};