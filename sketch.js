function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);

	let blength = 600
	let bwidth = 800
	r = 50
	push();
	strokeWeight(5);
	stroke(hour()*7+20,hour()*7+20,30,100)
	line(0, 2*r+10, hour()*5 - 15, 2*r+10);
	line(hour()*5 + 2*r+15, 2*r+10, bwidth, 2*r+10);
	pop();

	push();
	fill(230, 200, 30);
	noStroke();
	rect(hour()*5, r+10, 2 * r, 2 * r)
	pop();


	push();
	strokeWeight(5);
	stroke(20,20,minute()*3+20,150)
	line(0, blength/2, minute()*5 -15, blength/2);
	line(minute()*5 + 2*r+15, blength/2, bwidth, blength/2);
	pop();

	push();
	fill(40, 30, 180);
	noStroke();
	ellipse((minute()+10)*5, blength/2, 2*r, 2*r)
	pop();

	push();
	strokeWeight(5);
	//stroke(20,20,minute()*3+20,150)
	stroke(second()*3,20, 20 ,150);
	line(0, blength- (2*r), second()*5 -10, blength- (r*2));
	line(second()*5 + 2* r+10, blength- (r*2), bwidth, blength- (r*2));
	pop();

	push();
	fill(200, 70, 50);
	noStroke();
	triangle(second()*5, blength- (r), second()*5 + (2*r),  blength- (r), second()*5 +r, blength- (3*r))
	pop();
	//translate( second()*10 , 0);

}
