// Runs on initial load
void setup(){
	size(600,600);
	background(230);
}

// Runs repeatedly until exit() is called.
void draw(){ 
	drawCircle(width/2,height/2,width/2);
}

void drawCircle(int x, int y, int d){
	noFill();
	ellipse(x, y, d, d);
	if (d>=4){
		drawCircle(x+d/2,y,d/2);
		drawCircle(x-d/2,y,d/2);
	} else {
		exit();
	}
}