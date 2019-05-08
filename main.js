var goldPerClick = 1;
var gold = 0;
var digger = 0;
var wife = 0;
var diggerCost = 10;
var wifeCost = 10;
var gGameInProgress;
var lastTime;
const INTERVAL_TIME = 1000


function init_data() {
	goldPerClick = 1
	gold = 0;
	digger = 0;
	wife = 0;
	diggerCost = 10;
	wifeCost = 10;
}

function load() {
	gGameInProgress = (localStorage["game.in.progress"] == "true");
  if (!gGameInProgress) { return false; }

	gold = parseInt(localStorage["gold"]);
	digger = parseInt(localStorage["digger"]);
	diggerCost = parseInt(localStorage["diggerCost"]);
	wife = parseInt(localStorage["wife"]);
	wifeCost = parseInt(localStorage["wifeCost"]);
	lastTime = parseInt(localStorage["lastTime"]);
	deltaTime = Date.now() - lastTime;
	update(deltaTime);
	refresh();
}

function refresh() {
	document.getElementById("gold").innerHTML = gold;
	document.getElementById('digger').innerHTML = digger;
	document.getElementById('wife').innerHTML = wife;
	document.getElementById('buttonClick').innerHTML = "Click " + goldPerClick;
	document.getElementById('buttonBuyDigger').innerHTML = "Buy Digger [" + diggerCost + "]";
	document.getElementById('buttonBuyDiggerWife').innerHTML = "Buy Digger Wife [" + wifeCost + "]";

}

function save() {
	localStorage["game.in.progress"] = gGameInProgress;
	localStorage["gold"]= gold;
	localStorage["digger"]= digger;
	localStorage["diggerCost"]= diggerCost;
	localStorage["wife"]= wife;
	localStorage["wifeCost"]= wifeCost;
	localStorage["lastTime"]= Date.now();
	gGameInProgress = true;
}

function remove_save() {
	init_data();
	refresh();
}

function cookieClick(){
    gold = gold + goldPerClick;
    document.getElementById("gold").innerHTML = gold;
};

function buyDigger(){
    if(gold >= diggerCost){
    	digger = digger + 1;
    	gold = gold - diggerCost;
      diggerCost = Math.floor(diggerCost*1.1);
    };
		refresh();
};

function buyDiggerWife(){
    if(gold >= wifeCost){
        wife = wife + 1;
    	gold = gold - wifeCost;
        document.getElementById('wife').innerHTML = wife;
        document.getElementById('gold').innerHTML = gold;

        wifeCost = Math.floor(wifeCost*1.1);
        document.getElementById('wifeCost').innerHTML = wifeCost;
    };
		refresh();
}

function update(miliseconds) {
		multiply = Math.floor(miliseconds / 1000)
		gold += digger * multiply;
		digger += wife * multiply;
}

window.setInterval(function(){
	update(INTERVAL_TIME);
	refresh();
  save();
}, INTERVAL_TIME);

function supports_html5_storage() {
  try
	{
		console.log("exists");
	} catch (e) {
		console.log("not exists");
	}
}
