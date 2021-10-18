class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.trajectory=[]
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }
  shoot() {
    var newAngle = cannon.angle - 28;
     newAngle = newAngle * (3.14 / 180)
      var velocity = p5.Vector.fromAngle(newAngle);
       velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
         Matter.Body.setVelocity(this.body, { x: velocity.x * (180 / 3.14), y: velocity.y * (180 / 3.14) });
  }

  display() {
    var pos = this.body.position;
    if(this.body.velocity.x>0&&this.body.position.x>300){
      this.trajectory.push([this.body.position.x,this.body.position.y])
    }
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    
    pop();
    for(var I=0;I<this.trajectory.length;I++){
      image(this.image,this.trajectory[I][0],this.trajectory[I][1],5,5)
    }
  }
}
