
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

/*var blackberrybun = new buns("./assets/display.png",`Original is our most popular bun freshly prepared every morning since 1992.
	Ingredients: Wholewheat flour, Butter, Egg, Sugar, Baking soda
The buns are sold in packs of 1,3,6 or 12 buns`, "Original Bun", 5,0,5,"",0,0);*/

// document.getElementById("mybag").addEventListener("click", function(){
	//var bun
	//create a new instance
	//store that instance into local storage
// });

//retrieval should happen later.


document.getElementById("originalImage").addEventListener("click", function(){
	var original = new buns("", "Original is our most popular bun freshly prepared every morning since 1992. <br> Ingredients: Wholewheat flour, Butter, Egg, Sugar, Baking soda. <br> The buns are sold in packs of 1,3,6 or 12 buns", "Original Bun", 5,0,5,"",0,0);
	console.log(original);
	sessionStorage.setItem("bundetails", JSON.stringify(original));
	window.location.href = "./detail.html";
});


/*
document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});
*/

/*
document.getElementById("originalimage").addEventListener("click",function(){
	sessionStorage.getItem("bundetails", JSON.parseInt(originalbun));
		window.location.href = "./detail.html";
})
*/


