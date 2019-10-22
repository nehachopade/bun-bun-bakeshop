
/*function buns(url,description, bunname, price, qty, rating, glaze, packs, total){
	this.image=url;
	this.description=description;
	this.bunname = bunname;
	this.price = price;
	this.qty = qty;
	this.rating = rating;
	this.glaze = glaze;
	this.packs = packs;
	this.total= this.price * this.qty;
}*/

var selectedBun=sessionStorage.getItem("bundetailsupdates");
selectedBun=JSON.parse(selectedBun);
//console.log(selectedBun);

var originalArray=["<img src=\"assets/original.png\" width=\"250px\" height=\"250px\">", 
"<img src=\"assets/original-sugarmilk.png\" width=\"250px\" height=\"250px\">",
"<img src=\"assets/original-vanillamilk.png\" width=\"250px\" height=\"250px\">",
"<img src=\"assets/original-chocolate.png\" width=\"250px\" height=\"250px\">"];

var displayImage = document.getElementById("cartImage");


if (selectedBun.glaze == "Plain"){
	displayImage.innerHTML=originalArray[0];
}else if (selectedBun.glaze == "Sugar-Milk"){
	displayImage.innerHTML=originalArray[1];
}else if (selectedBun.glaze == "Vanilla-Milk"){
	displayImage.innerHTML=originalArray[2];
}else if (selectedBun.glaze == "Double-Chocolate"){
	displayImage.innerHTML=originalArray[3];
}

//displayImage.innerHTML="<img src=\"./assets/original.png\" width=\"250px\" height=\"250px\">";

document.getElementById("cartBunName").innerHTML = selectedBun.bunname;


document.getElementById("insert-glaze").innerHTML = selectedBun.glaze;
//console.log(selectedBun.glaze);

document.getElementById("insert-qty").innerHTML = selectedBun.qty;

document.getElementById("insert-packs").innerHTML = selectedBun.packs;

var subtotal= selectedBun.qty * selectedBun.price;
document.getElementById("calculate-total").innerHTML = "$ "+subtotal+".00";

var tax= subtotal * 0.075;

document.getElementById("calculate-tax").innerHTML = "$ " + tax;

var grandTotal= subtotal + tax;
document.getElementById("grand-total").innerHTML = "$ "+ grandTotal;





/*var displayPrice= "$"+selectedBun.price+".00";
console.log(displayPrice)
document.getElementById("selectedBunPrice").innerHTML = displayPrice;
document.getElementById("selectedBunText").innerHTML = selectedBun.description;
document.getElementById("selectedBunStar").innerHTML = selectedBun.rating;*/
/*var displayImage= selectedBun.image;
console.log(displayImage);
displayImage.style.width = "500px";
displayImage.style.height = "500px";
document.getElementById("selectedBunImage").src=displayImage;*/




/*document.getElementById("originalImage").addEventListener("click", function(){
	var original = new buns("./assets/display.png",`Original is our most popular bun freshly prepared every morning since 1992.
	Ingredients: Wholewheat flour, Butter, Egg, Sugar, Baking soda
The buns are sold in packs of 1,3,6 or 12 buns`, "Original Bun", 5,0,5,"",0,0);*/


document.getElementById("checkoutBag").addEventListener("click",function(){

	sessionStorage.setItem("bundetailsFinalUpdate", JSON.stringify(selectedBun));	
	window.location.href = "./cart.html";

});