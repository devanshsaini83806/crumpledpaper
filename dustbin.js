class dustbin
{

	constructor(x,y)
	{
			var opt={
				isStatic:true
	
	}
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		this.bottomBody.image = loadImage("dustbingreen.png");
		this.leftWallBody.image = loadImage("dustbingreen.png");
		this.rightWallBody.image = loadImage("dustbingreen.png");

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rotate(this.angle)

			rectMode(CENTER)
			strokeWeight(4);
			fill(255)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			imageMode(CENTER);
			image(this.bottomBody.image,100,0,230,this.height-90)
			pop()

			push()
			translate(posRight.x, posRight.y);
			imageMode(CENTER);
			image(this.bottomBody.image,-100,0,230,this.height-90)
			strokeWeight(4);
			fill(255)
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			
			
			fill(255);
			imageMode(CENTER);
			image(this.bottomBody.image,-10100,0,230,this.height-90)
			pop()
			
	}

}