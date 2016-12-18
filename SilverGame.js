function addme(numberOne, numberTwo) 
{
	var total = numberOne + numberTwo;
	return total;
}

function createButton(context){
    var button = document.createElement("input");
    button.type = "button";
    button.value = "im a button";
    
    context.appendChild(button);
}
	x = 50;
	y = 50;
	speedX = -11;
	speedY = 5;
	canvasX = 500; 
	canvasY = 500;
	
function update()
{	
	
	ctx.clearRect(0, 0, canvasX, canvasY);
	ctx.fillStyle = 'red';
	x += speedX;
	y += speedY; 
	ctx.fillRect(x-5, y-5, 10, 10);
	
	if (x>=canvasX || x<=0) {
		speedX = -speedX;
	}
	if (y>=canvasY || y<=0) {
		speedY = -speedY;
	}
	
}

window.onload = function(){
    ctx = document.getElementById("ctx").getContext("2d");
	ctx.font = '30px Arial';
	ctx.fillStyle = 'red';
	

	setInterval(update,30);
	
}