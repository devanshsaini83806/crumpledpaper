class papers{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      World.add(world,this.body)

    }
    display(){
      
     
      var angle = this.body.angle;
      push();
      
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
     
      image(this.image, 0, 0, this.width+20, this.height+20);
      pop();
    }
}

class mouse{
  constructor(x, y, width, height, angle) {
      var options2 = {
density:20,
resitution:2,
friction:10      }
      this.body = Bodies.rectangle(x, y, width, height, options2);
      this.width = width;
      this.height = height;
     World.add(world,this.body)
  
    }
    display(){
      
     this.body.position.x=mouseX;
     this.body.position.y=mouseY;

      push();
      
      translate(this.body.position.x, this.body.position.y);
   rectMode(CENTER)
     
      rect(0, 0,90,20);
      pop();
    }
}