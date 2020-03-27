class Ball{

	constructor(x, y, d){
		this.x = x
		this.y = y
		this.c = color(random(255),random(255),random(255))
		this.d = d
		this.speed = 3
		this.dirX = this.direction()
		this.dirY = this.direction()

	}

	draw(){
		//noStroke()
		push()
		noStroke();
		fill(this.c)
		ellipse(this.x, this.y, this.d)
		pop()

		this.bounce()

	}


	move(){

		this.x += this.speed * this.dirX
		this.y += this.speed * this.dirY

	}

	direction(){
		return floor(random(2)) * 2 - 1
	}

	bounce(){

		//detecta la colision de abajo(del canvas)
		if(this.y > height){
			this.dirY -=1
		}

		//detecta la colision de arriba(del canvas)
		if(this.y < 0){
			this.dirY +=1
		}

		//detecta la colision de la derecha(del canvas)
		if(this.x > width){
			this.dirX -=1
		}

		//detecta la colision de la izquierda(del canvas)
		if(this.x < 0){
			this.dirX +=1
		}
	}


}