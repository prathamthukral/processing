void setup(){
	size(600,600);
	background(230);
}


void draw(){ 
	background(230);
	int topright = (10,10,30,10);
	int topleft = (width-10,10,width-30,10);
	int bottomright = (10,height-10,30,height-10);
	int bottomleft = (width-10,height-10,width-30,height-10);
	triangle(mouseX,mouseY,10,10,30,10);
	triangle(mouseX,mouseY,width-10,10,width-30,10);
	triangle(mouseX,mouseY,10,height-10,30,height-10);
	triangle(mouseX,mouseY,width-10,height-10,width-30,height-10);
	ellipse(mouseX,mouseY,30,30)
}