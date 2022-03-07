var Key = {
  _pressed: {},
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
	W: 87,
	A: 65,
	S: 83,
	D: 68,
	SPACE: 32,
	F: 70,
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};
window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
class Rect{
  constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.width=w;
    this.height=h;
  }
}
class Circle{
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.radius=r;
  }
}
function detectRectCollision(rect1,rect2){
	if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
    return true;
 }else{
	 return false;
 };
};
function detectCircleCollision(circle1,circle2){
	var dx = circle1.x - circle2.x;
	var dy = circle1.y - circle2.y;
	var distance = Math.sqrt(dx * dx + dy * dy);

	if (distance < circle1.radius + circle2.radius) {
    return true;
	}else{
		return false;
	};
};
function detectRectCircleCollision(circle,rect){
    var distX = Math.abs(circle.x - rect.x-rect.width/2);
    var distY = Math.abs(circle.y - rect.y-rect.height/2);

    if (distX > (rect.width/2 + circle.radius)) { return false; }
    if (distY > (rect.height/2 + circle.radius)) { return false; }

    if (distX <= (rect.width/2)) { return true; } 
    if (distY <= (rect.height/2)) { return true; }

    var dx=distX-rect.width/2;
    var dy=distY-rect.height/2;
    return (dx*dx+dy*dy<=(circle.radius*circle.radius));
}
class soundFile{
  constructor(src,looping){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute('loop',looping);
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    play(){
      this.sound.play();
    }
    stop(){
      this.sound.pause();
    }
}
class drawingBoard{
	constructor(){
		this.canvasObj=document.getElementById("canv");
		this.ctx=this.canvasObj.getContext("2d");
		this.canvasSize=[this.canvasObj.width,this.canvasObj.height];
	}
	setStrokeColor(col){
		this.ctx.strokeStyle=col;
	}
	setFillColor(col){
		this.ctx.fillStyle=col;
	}
	fillRect(x,y,w,h,rot = 0){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(x + w / 2, y + h / 2);
		this.ctx.rotate(rot * Math.PI / 180);
		this.ctx.rect(-w / 2, -h / 2, w, h);
		this.ctx.fill();
		this.ctx.restore();
	}
	strokeRect(x,y,w,h,rot = 0){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(x + width / 2, y + height / 2);
		this.ctx.rotate(degrees * Math.PI / 180);
		this.ctx.rect(-width / 2, -height / 2, width, height);
		this.ctx.stroke();
		this.ctx.restore();
	}
	strokeCircle(x,y,r){
		this.ctx.beginPath();
		this.ctx.arc(x, y, r, 0, 2 * Math.PI);
		this.ctx.stroke();
	}
	fillCircle(x,y,r){
		this.ctx.beginPath();
		this.ctx.arc(x, y, r, 0, 2 * Math.PI);
		this.ctx.fill();
	}
	pixel(x,y,r,g,b){
		oldColor=this.ctx.fillStyle;
		this.ctx.fillStyle="rgb("+r+","+g+","+b+")";
		this.ctx.beginPath();
		this.ctx.rect(x, y, 1, 1);
		this.ctx.fill();
		this.ctx.fillStyle=oldColor;
	}
}
