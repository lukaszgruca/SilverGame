
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;

  this.rotate = function(angle) {
    x = this.x
    y = this.y
    //console.log(angle);
    //console.log(this.x + ' ' + this.y + '  ' + Math.cos(angle));
    this.x = x * Math.cos(angle) - y * Math.sin(angle)
    this.y = y * Math.cos(angle) + x * Math.sin(angle)
    //console.log(this.x + '' + this.y);
  }

  this.move = function(angle, distance) {
    this.x += distance*Math.cos(angle);
    this.y += distance*Math.sin(angle);
  }
}


function Animal() {
  this.pos = new Point(100,100)
  this.size = 10;
  this.name = "First";
  this.direction = Math.PI / 3;
  this.speed = 0.1;

  this.speak = function() {
    console.log(this.name+ ': (' + this.pos.x + ',' + this.pos.y + ' r: ' + this.size + ')');
  }

  this.move = function() {
    this.pos.move(this.direction, this.speed);
  }

  this.draw = function(ctx) {
    // body
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    // eyes
    leftEye = new Point(this.size)
    rightEye = new Point(this.size)
    leftEye.rotate(this.direction-Math.PI/6)
    rightEye.rotate(this.direction+Math.PI/6)
    ctx.beginPath();
    ctx.arc(this.pos.x + leftEye.x, this.pos.y + leftEye.y, this.size/4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.pos.x + rightEye.x, this.pos.y + rightEye.y, this.size/4, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

function World() {
  this.c = document.getElementById("myCanvas");
  this.ctx = this.c.getContext("2d");
  this.width = 640;
  this.height = 480;
  this.name = "World"

  this.a = new Animal()

  this.draw = function() {
    //clear
    this.ctx.clearRect(10, 10, this.width-21, this.height-21)
    // world
    this.ctx.rect(10, 10, this.width-21, this.height-21);
    this.ctx.stroke();
    //animal
    this.a.speak();
    this.a.draw(this.ctx);
  }

  this.move = function() {
    this.a.move();
  }

  this.speak = function() {
    console.log('Hi! I\'m ' + this.name);
  };
}
a = new World()
a.draw()

window.setInterval(function(){
  a.move();
	a.draw();
}, 10);
