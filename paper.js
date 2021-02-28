class Paper{
    
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.r=40
		
		this.body=Bodies.rectangle(this.x, this.y, this.r,this.r)
		
        this.Pimage= loadImage("paper.png")
		
		World.add(world, this.body)
		

	}
    update(){
        var pos=this.body.position;
        if(keyDown("up")){
            Matter.Body.applyForce(this.body, pos, {x:0.005, y:-0.01})
        }
    }
	display()
	{
			var pos=this.body.position;
			var angle= this.body.angle
			

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(angle)
			image(this.Pimage,0,0,this.r,this.r)
			pop()

    }

}
