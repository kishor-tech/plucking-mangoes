class stone
{
	constructor(x,y,diametre)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.diametre = diametre;
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(x, y,diametre, options)
		World.add(world, this.body);

	}
 dispaly(){
	 Push();
	 Translate(this.body.position.x,this.body.position.y);
	 imageMode(CENTER);
	 image(this.image,0,0,this.diametre);
	 Pop();
 }
 }	
