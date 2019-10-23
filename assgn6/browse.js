
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
	//var 
	original = new buns("", "Original is our most popular bun freshly prepared every morning since 1992. <br> Ingredients: Wholewheat flour, Butter, Egg, Sugar, Baking soda. <br> The buns are sold in packs of 1,3,6 or 12 buns", "Original Bun", 5,0,5,"",0,0);
	//console.log(original);
	sessionStorage.setItem("bundetails", JSON.stringify(original));
	window.location.href = "./detail.html";
});

document.getElementById("blackberryImage").addEventListener("click", function(){
	var blackberry = new buns("", "BlackBerry is a new addition to our collection and the latest favourite. <br> Ingredients: Wholewheat flour, Butter, Egg, Blackberries, Baking soda. <br> The buns are sold in packs of 1,3,6 or 12 buns", "Blackberry Bun", 4,0,4,"",0,0);
	console.log(blackberry);
	sessionStorage.setItem("bundetails", JSON.stringify(blackberry));
	window.location.href = "./detail.html";
});

