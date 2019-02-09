/*brick generator from BCMM*/

var svgNS = "http://www.w3.org/2000/svg";  

function createBrick(height, width) {
	var number = 20 - 10 + Math.random()*20;
	var color = "hsl(" + number + ", 50%, 50%)";
	var brick = document.createElementNS(svgNS, "rect");
	brick.setAttributeNS(null, "height", height);
	brick.setAttributeNS(null, "width", width);
	brick.setAttributeNS(null, "fill", color);
	/*document.write("<svg>" + stuff + "</svg>");*/
	return brick;
}