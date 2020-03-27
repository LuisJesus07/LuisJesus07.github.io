class Paddle{

	constructor(x, y, w, h, c){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.c = c
		this.speed = 10
	}

	draw(){
		push()
		noStroke()
		fill(this.c)
		rect(this.x,this.y,this.w,this.h)
		pop()

	}


	moveUp(){

		if(this.y < 0){
			return
		}

		this.y -= this.speed
	}

	moveDown(){

		if(this.y + this.h >= windowHeight){
			return 
		}

		this.y += this.speed
	}
}