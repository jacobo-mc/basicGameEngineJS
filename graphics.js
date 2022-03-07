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
