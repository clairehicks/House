/*brick generator from BCMM with modified colour variation*/

var svgNS = "http://www.w3.org/2000/svg";

function createBrick(height, width) {
	
	var brick = document.createElementNS(svgNS, "rect");
	brick.setAttributeNS(null, "height", height);
	brick.setAttributeNS(null, "width", width);

	var brickColor = "hsl("+(0+Math.round(Math.random()*20))+", "+(40-10+Math.round(Math.random()*20))+"%, "+(40-10+Math.round(Math.random()*5))+"%)"

	brick.setAttributeNS(null, "fill", brickColor);
	
	return brick;
}

function createMortar(height, width) {
	var mortar = document.createElementNS(svgNS, "rect");
	mortar.setAttributeNS(null, "height", height);
	mortar.setAttributeNS(null, "width", width);
	mortar.setAttributeNS(null, "fill", "#d9cbbb");
	return mortar;
}
