// Runs on initial load
void setup(){
	size(600,600);
	background(230);
}

// Runs repeatedly until exit() is called.
void draw(){ 
	breakMiddle(150,30,300,50)
}

void breakMiddle(int x,int y,int w, int h) {
	rect(x, y, w, h);
	if (y<height && w>1){
		breakMiddle(x,y+3*h/2,w/3,h)
		breakMiddle(x+2*w/3,y+3*h/2,w/3,h)
	}
}