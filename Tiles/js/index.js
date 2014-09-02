window.onload = function(){
	var tiles = document.getElementsByTagName('x-tile');
	for(var index=0; index < tiles.length; index++){
		tiles[index].addEventListener('tile-click', function(){
			alert("Tile click overridden");
		});
	};
};