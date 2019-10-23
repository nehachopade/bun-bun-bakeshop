

var displayImage = document.getElementById("cartImage");

//retrieves instance from Session Storage
var selectedBun=sessionStorage.getItem("bundetailsupdates");
selectedBun=JSON.parse(selectedBun);



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
}

var displayImage = document.getElementById("selectedBunImage");
displayImage.innerHTML=bunArray[0];

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

document.getElementById("insert-glaze").innerHTML = selectedBun.glaze;

document.getElementById("insert-qty").innerHTML = selectedBun.qty;

document.getElementById("insert-packs").innerHTML = selectedBun.packs;

var subtotal= selectedBun.qty * selectedBun.price;
document.getElementById("calculate-total").innerHTML = "$ "+subtotal.toFixed(2);

var tax= subtotal * 0.075;

document.getElementById("calculate-tax").innerHTML = "$ " + tax.toFixed(2);

var grandTotal= subtotal + tax;
document.getElementById("grand-total").innerHTML = "$ "+ grandTotal.toFixed(2);

document.getElementById("checkoutBag").addEventListener("click",function(){

	sessionStorage.setItem("bundetailsFinalUpdate", JSON.stringify(selectedBun));	
	window.location.href = "./cart.html";

});