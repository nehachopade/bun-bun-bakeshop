
//retrieves selected object
var selectedBun=sessionStorage.getItem("bundetails");
selectedBun=JSON.parse(selectedBun);


//displays selected bun's name, price and description
document.getElementById("selectedBunName").innerHTML = selectedBun.bunname;
var displayPrice= "$"+selectedBun.price+".00";
document.getElementById("selectedBunPrice").innerHTML = displayPrice;
document.getElementById("selectedBunText").innerHTML = selectedBun.description;


//checks the type of bun selected
if (selectedBun.bunname == "Original Bun"){
	var bunArray=["<img src=\"assets/original.png\" width=\"500px\" height=\"500px\">", 
"<img src=\"assets/original-sugarmilk.png\" width=\"500px\" height=\"500px\">",
"<img src=\"assets/original-vanillamilk.png\" width=\"500px\" height=\"500px\">",
"<img src=\"assets/original-chocolate.png\" width=\"500px\" height=\"500px\">"];
 } else if (selectedBun.bunname == "Blackberry Bun"){
 	var bunArray=["<img src=\"assets/blackberry.png\" width=\"500px\" height=\"500px\">", 
"<img src=\"assets/original-sugarmilk.png\" width=\"500px\" height=\"500px\">",
"<img src=\"assets/original-vanillamilk.png\" width=\"500px\" height=\"500px\">",
"<img src=\"assets/original-chocolate.png\" width=\"500px\" height=\"500px\">"]; 
}

//changes the displayed bun based on selection
var displayImage = document.getElementById("selectedBunImage");
displayImage.innerHTML=bunArray[0];

//alters the displayed bun based on the glaze
document.getElementById("glazeSelected").addEventListener("change",function(){
	selectedBun.glaze=document.getElementById("glazeSelected").value;
	if (selectedBun.glaze == "Plain"){
		displayImage.innerHTML=bunArray[0];
	}else if (selectedBun.glaze == "Sugar-Milk"){
		displayImage.innerHTML=bunArray[1];
	}else if (selectedBun.glaze == "Vanilla-Milk"){
		displayImage.innerHTML=bunArray[2];
	}else if (selectedBun.glaze == "Double-Chocolate"){
		displayImage.innerHTML=bunArray[3];
	}
});



//On click Add to Cart- changes the cart display and adds attributes to instance
document.getElementById("mybagButton").addEventListener("click",function(){
	document.getElementById("mybagButton").innerHTML =" Added to Bag! Checkout >> ";
	selectedBun.glaze=document.getElementById("glazeSelected").value;
	selectedBun.qty=document.getElementById("bunQty").value;

	
	document.getElementById("cartlogoImage").src="./assets/cartQty.svg";
	document.getElementById("incartQty").innerHTML=selectedBun.qty;
	localstorage.setItem ("inCart", selectedBun.qty );
	sessionStorage.setItem("bundetailsupdates", JSON.stringify(selectedBun));	

		if (selectedBun.qty>=12 || selectedBun.qty%12==0){
//packs of 12
		console.log("1. I am here");
		var packs=document.getElementsByClassName("pack");
			for(i=0;i<packs.length;i++){
				if (packs[i].checked==true){
					selectedBun.packs=packs[i].value;
				}
			}
	} else if (selectedBun.qty>=6 || selectedBun.qty%6==0){
//packs of 6
	console.log("2. I am here");
		var packs=document.getElementsByClassName("pack");
			for(i=0;i<packs.length;i++){
				if (packs[i].checked==true){
					selectedBun.packs=packs[i].value;}
			}

		if (selectedBun.packs==12) {
			packs[3].checked=false;
			alert ("Pack of 12 only possible with quantities above 12");
		}
	} else if (selectedBun.qty>=3 || selectedBun.qty%3==0){
//packs of 3
		console.log("3. I am here");
		var packs=document.getElementsByClassName("pack");
			for(i=0;i<packs.length;i++){
				if (packs[i].checked==true){
					selectedBun.packs=packs[i].value;
				}
			}

		if (selectedBun.packs==6 && selectedBun.packs==12 ) {
			packs[3].checked=false;
			packs[2].checked=false;
			alert ("Pack of 6 or 12 only possible with quantities above 6 or 12, respectively");
		}
	} else {
//packs of 1
		var packs=document.getElementsByClassName("pack");
			for(i=0;i<packs.length;i++){
				if (packs[i].checked==true){
					selectedBun.packs=packs[i].value;
				}
			}
		console.log("4. I am here");
	}

	//Should I use Local Storage??

	//local storage applies to all pages of my website
	//session storage works in the same tab
	
});

//take you to cart when clicking on cart
document.getElementById("mybagButton").addEventListener("dblclick",function(){
	window.location.href = "./cart.html";	
});
//take you to cart when clicking on cart
document.getElementById("cartlogoImage").addEventListener("click",function(){
	window.location.href = "./cart.html";
});