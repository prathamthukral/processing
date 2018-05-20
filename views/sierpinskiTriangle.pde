// Runs on initial load
void setup(){
	size(600,600);
	background(230);
}

// Runs repeatedly until exit() is called.
void draw(){ 
	int scale = width/2;
	tri(width/2-scale,height/2+scale,width/2+scale,height/2+scale,width/2,height/2-scale)
}

void tri(int x1,int y1,int x2,int y2,int x3,int y3){
	if (abs(x1-x2)>5){
		triangle(x1, y1, (x2+x1)/2, y2, (x3+x1)/2, (y3+y1)/2);
		triangle((x2+x1)/2, y2, x2, y2, (x3+x2)/2, (y3+y2)/2);
		triangle((x3+x1)/2, (y3+y1)/2,(x3+x2)/2, (y3+y2)/2, x3, y3);
		tri(x1, y1, (x2+x1)/2, y2, (x3+x1)/2, (y3+y1)/2);
		tri((x2+x1)/2, y2, x2, y2, (x3+x2)/2, (y3+y2)/2);
		tri((x3+x1)/2, (y3+y1)/2,(x3+x2)/2, (y3+y2)/2, x3, y3);
	}
}