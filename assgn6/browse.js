

function buns(url,description, bunname, price, qty, rating, glaze, packs, total){
	this.image=url;
	this.description=description;
	this.bunname = bunname;
	this.price = price;
	this.qty = qty;
	this.rating = rating;
	this.glaze = glaze;
	this.packs = packs;
	this.total= this.price * this.qty;
}

document.getElementById("originalImage").addEventListener("click", function(){ 
	original = new buns("", "Original is our most popular bun freshly prepared every morning since 1992. <br> Ingredients: Wholewheat flour, Butter, Egg, Sugar, Baking soda.", "Original Bun", 5,0,5,"",0,0);
	sessionStorage.setItem("bundetails", JSON.stringify(original));
	window.location.href = "./detail.html";
});

document.getElementById("blackberryImage").addEventListener("click", function(){
	blackberry = new buns("", "BlackBerry is a new addition to our collection and the latest favourite. <br> Ingredients: Wholewheat flour, Butter, Egg, Blackberries, Baking soda.", "Blackberry Bun", 4,0,4,"",0,0);
	sessionStorage.setItem("bundetails", JSON.stringify(blackberry));
	window.location.href = "./detail.html";
});

document.getElementById("walnutImage").addEventListener("click", function(){
	 
	walnut = new buns("", "Walnut is a bun with a fun crunch.<br> Ingredients: Wholewheat flour, Walnuts, Butter, Egg, Sugar, Baking soda.", "Walnut Bun", 7,0,5,"",0,0);
	console.log(walnut);
	sessionStorage.setItem("bundetails", JSON.stringify(walnut));
	window.location.href = "./detail.html";
});

