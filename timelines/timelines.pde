
PVector start = new PVector(0,0,0);
PFont mono;

PImage bildL, bildR, bildR2;

int boxX = 20;
int boxY = 15;
int boxZ = 8;

void setup() {
  size(1600, 1000, P3D);
  smooth(2);
  float fov = PI/4.0;
  float cameraZ = (height/2.0) / tan(fov/2.0);
  perspective(fov, float(width)/float(height),0.01, cameraZ*10.0);
  camera(0.0, -10.0, 50.0, 0.0, 0.0, -15.0,0.0, 1.0, 0.0);
  noLoop();
  mono = createFont("Monospaced.plain", 22);
  textFont(mono);
  textSize(0.7);
  hint(DISABLE_OPTIMIZED_STROKE); 
  bildL =loadImage("numbers.jpg");
  bildR =loadImage("oelsw.jpg");
  bildR2 =loadImage("oel.jpg");
  bildR.resize(1592,989);
  bildR2.resize(1592,989);
}

void draw() {
  lights();
  lightFalloff(1.0, 0.002, 0.0);
  background(0,0,0);
  
  translate(400,-300,-380);
  rotateY(PI/1.96);
  tint(255, 126);
  image(bildL, 0, 0);
  image(bildL, 1592, 0);
  image(bildL, 2*1592, 0);
  image(bildL, 3*1592, 0);
  rotateY(-PI/1.96);
  translate(-400,300,380);
 
  translate(-400,-300,-380);
  rotateY(PI/1.96);
  tint(255, 166);
  image(bildR, 0, 0);
  image(bildR2, 1592, 0);
  image(bildR, 2*1592, 0);
  image(bildR, 3*1592, 0);
  rotateY(-PI/1.96);
  translate(400,300,380);
  
  //noStroke();
  stroke(255, 255, 255, 130);
  fill(255, 255, 255,40);
  noFill();
  translate(0,0,-72);
  for(int i = 0; i <= 10;i++){
    translate(0,0,8);
    noFill();
    stroke(255, 255, 255, 10+(i*5));
    box(boxX, boxY, 8);
    int year = 2027-i;
    translate(boxX/2 * -1.,7,8);
    //rotateX(radians(90));
    fill(255, 255, 255, 180);
    text(str(year), 0,0); 
    //rotateX(radians(-90));
    translate(boxX/2,-7,-8);
    
  }
  strokeWeight(2);

  translate(0,0,-44);
  drawWeb(13,12);
strokeWeight(2);  
  drawdepth(10);


}

void drawdepth(int num){
  for(int i = 0; i <= num;i++){
    fill(255, 255, 255,30-(i*3));
    noStroke();
    int depth = -40+(i * 8);
   beginShape();
  vertex(boxX/2 * -1., boxY/2 * -1., depth);
  vertex(boxX/2, boxY/2 * -1., depth);
  vertex(boxX/2,  boxY/2, depth);
  vertex(boxX/2 * -1.,  boxY/2, depth);
  endShape(CLOSE); 
  }
  
  
}

float offset= 0.0;
float offsetY = 10;
int objects = 4;
float sphSize = 0.15;
int strWeight = 2;
void drawWeb(int ws, int num){
 
  for (int j = 0; j < ws; ++j) {
    if(j == ws-1){
    fill( random(255), random(255), random(255), 100); 
    noFill();
    stroke( random(255), random(255), random(255), 100);
    sphSize = 0.35;
    strWeight = 4;
    }
    else{
      fill(255,255,255,10);
      stroke(255,255,255,10);
      sphSize = 0.15;
      strWeight = 2;
    }
    strokeWeight(strWeight);
    start = new PVector(0,0,40);
    pushMatrix();
    float offsetx = (j * offset)-(offset*ws/2);
    translate(offsetx,offsetY,0);
    for (int i = 0; i < num; ++i) {
      translate(start.x,start.y,start.z);
      sphere(sphSize);
      float newx = (random(22)-11)*i/num;
      float newy = (random(15)-7.3)*i/num; 
      float newz = (random(20))*-1.;
      line(0, 0, 0, newx, newy, newz);
      start = new PVector(newx,newy,newz);
    }
    translate(start.x,start.y,start.z);
    sphere(sphSize);
    popMatrix();
    }
}


void mousePressed() {
  loop();  // Holding down the mouse activates looping
}

void mouseReleased() {
  noLoop();  // Releasing the mouse stops looping draw()
}