
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

//retrieves instance from Session Storage
var selectedBun=sessionStorage.getItem("bundetails");
selectedBun=JSON.parse(selectedBun);
console.log(selectedBun.bunname);

document.getElementById("cartlogoImage").src="./assets/cartQty.svg";
var cartQuantity=localStorage.getItem ("inCart");
document.getElementById("incartQty").innerHTML=cartQuantity;


//checks the type of bun selected
if (selectedBun.bunname == "Original Bun"){
	var bunArray=["<img src=\"assets/original.png\" width=\"250px\" height=\"250px\">", 
"<img src=\"assets/original-sugarmilk.png\" width=\"250px\" height=\"250px\">",
"<img src=\"assets/original-vanillamilk.png\" width=\"250px\" height=\"250px\">",
"<img src=\"assets/original-chocolate.png\" width=\"250px\" height=\"250px\">"];
 } else if (selectedBun.bunname == "Blackberry Bun"){
 	var bunArray=["<img src=\"assets/blackberry.png\" width=\"250px\" height=\"250px\">", 
"<img src=\"assets/original-sugarmilk.png\" width=\"250px\" height=\"250px\">",
"<img src=\"assets/original-vanillamilk.png\" width=\"250px\" height=\"250px\">",
"<img src=\"assets/original-chocolate.png\" width=\"250px\" height=\"250px\">"];
} else if (selectedBun.bunname == "Walnut Bun"){
 	var bunArray=["<img src=\"assets/browse-3.png\" width=\"250px\" height=\"250px\">", 
"<img src=\"assets/original-sugarmilk.png\" width=\"250px\" height=\"250px\">",
"<img src=\"assets/original-vanillamilk.png\" width=\"250px\" height=\"250px\">",
"<img src=\"assets/original-chocolate.png\" width=\"250px\" height=\"250px\">"];
}

var displayImage = document.getElementById("selectedBunImage");
if (selectedBun.glaze == "Plain"){
	displayImage.innerHTML=bunArray[0];
}else if (selectedBun.glaze == "Sugar-Milk"){
	displayImage.innerHTML=bunArray[1];
}else if (selectedBun.glaze == "Vanilla-Milk"){
	displayImage.innerHTML=bunArray[2];
}else if (selectedBun.glaze == "Double-Chocolate"){
	displayImage.innerHTML=bunArray[3];
}

document.getElementById("cartBunName").innerHTML = selectedBun.bunname;

document.getElementById("insert-price").innerHTML = "$ " + selectedBun.price.toFixed(2);

document.getElementById("insert-glaze").innerHTML = selectedBun.glaze;

document.getElementById("insert-qty").innerHTML = selectedBun.qty;

document.getElementById("insert-packs").innerHTML = selectedBun.packs;

var subtotal= selectedBun.qty * selectedBun.price;
document.getElementById("calculate-total").innerHTML = "$ "+subtotal.toFixed(2);

var tax= subtotal * 0.075;

document.getElementById("calculate-tax").innerHTML = "$ " + tax.toFixed(2);

var grandTotal= subtotal + tax;
document.getElementById("grand-total").innerHTML = "$ "+ grandTotal.toFixed(2);


//save the selected bun into an array

var selectedBunArray=[selectedBun];
var selectedBun=sessionStorage.getItem("bundetails");
selectedBun=JSON.parse(selectedBun);

document.getElementById("removeBun").addEventListener("click",()=>{
	//changing display cart and local storage counter
	cartQuantity = cartQuantity-selectedBun.qty;
	document.getElementById("incartQty").innerHTML=cartQuantity;
	localStorage.setItem ("inCart",cartQuantity);

	selectedBun.image.src="";
	selectedBun.description="";
	selectedBun.bunname = "";
	selectedBun.price = 0;
	selectedBun.qty = 0;
	selectedBun.rating = 0;
	selectedBun.glaze = "";
	selectedBun.packs = 0;
	selectedBun.total= 0;

	console.log(selectedBun);

	sessionStorage.setItem("bundetailsfinalupdates",JSON.stringify(selectedBun));
		
	document.getElementById("selectedBunImage").innerHTML = "";

	document.getElementById("cartBunName").innerHTML = selectedBun.bunname;

	document.getElementById("insert-price").innerHTML = "$ " + selectedBun.price.toFixed(2);

	document.getElementById("insert-glaze").innerHTML = selectedBun.glaze;

	document.getElementById("insert-qty").innerHTML = selectedBun.qty;

	document.getElementById("insert-packs").innerHTML = selectedBun.packs;

	var subtotal= selectedBun.qty * selectedBun.price;
	document.getElementById("calculate-total").innerHTML = "$ "+subtotal.toFixed(2);

	var tax= subtotal * 0.075;

	document.getElementById("calculate-tax").innerHTML = "$ " + tax.toFixed(2);

	var grandTotal= subtotal + tax;
	document.getElementById("grand-total").innerHTML = "$ "+ grandTotal.toFixed(2);


	
});