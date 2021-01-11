var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
	x : undefined,
	y : undefined
}
var maxRadius = 100;
var minRadius = 10;
var color = [
'#001F2F', '#006479','#004753', '#004DB3', '#00CDA3',
'#155B2E', '#6BB7AB', '#A6D1CF', '#D5E3CC', '#B0CCA2',
'#4D5139', '#A3AC93'
];

var c = canvas.getContext('2d');

window.addEventListener('mousemove',
	function(event){
		mouse.x = event.x;
		mouse.y = event.y;
	});
function Circle(x,y,dx,dy,radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color[Math.floor(Math.random()*color.length)];

	// var color1 = Math.random()*255;
	// var color2 = Math.random()*255;
	// var color3 = Math.random()*255;
	// var opacity = Math.random()*1.2;

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x -this.radius < 0)  {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y -this.radius < 0)  {
			this.dy = -this.dy;
		}	
		this.x += this.dx;
		this.y += this.dy;

		if (mouse.x - this.x <50 && mouse.x - this.x >-50 &&
		 mouse.y - this.y <50 && mouse.y - this.y >-50 ) 
		{
			if (this.radius < maxRadius){
			 this.radius+=3;
			}
		}else if (this.radius>minRadius){
			this.radius-=1;
		}

		this.draw();
	}


}

var circleArray = [];

for (var i = 0; i < 350; i++) {
	var x = Math.random() * (innerWidth - radius * 1.2) + radius;
	var y = Math.random() * (innerHeight - radius * 1.2) + radius;
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	var radius = Math.random()*75;
	circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth, innerHeight);	

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
// Olena Polishchuk 2021
