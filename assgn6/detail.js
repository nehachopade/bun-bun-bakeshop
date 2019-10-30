
//retrieves selected object
var selectedBun=sessionStorage.getItem("bundetails");
selectedBun=JSON.parse(selectedBun);
console.log(selectedBun);

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
}  else if (selectedBun.bunname == "Walnut Bun"){
 	var bunArray=["<img src=\"assets/browse-3.png\" width=\"500px\" height=\"500px\">", 
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

document.getElementById("bunQty").addEventListener('keyup', function(event){
	var bunQty = event.target.value;
	document.getElementById("packs1label").classList.remove('disabledElement');
	document.getElementById("packs3label").classList.remove('disabledElement');
	document.getElementById("packs6label").classList.remove('disabledElement');
	document.getElementById("packs12label").classList.remove('disabledElement');
	if (bunQty<1){ //value of zero
		alert("Please enter a valid quantity");
		document.getElementById("packs1label").classList.add('disabledElement');
		document.getElementById("packs3label").classList.add('disabledElement');
		document.getElementById("packs6label").classList.add('disabledElement');
		document.getElementById("packs12label").classList.add('disabledElement');
		console.log("1."+ bunQty);
	}
	else if(bunQty<3){ //less than 3 (1 and 2)
		document.getElementById("packs1label").classList.remove('disabledElement');
		document.getElementById("packs3label").classList.remove('disabledElement');
		document.getElementById("packs6label").classList.remove('disabledElement');
		document.getElementById("packs12label").classList.remove('disabledElement');
		document.getElementById("packs3label").classList.add('disabledElement');
		document.getElementById("packs6label").classList.add('disabledElement');
		document.getElementById("packs12label").classList.add('disabledElement');
		console.log("2."+ bunQty);
	}
	else if(bunQty<6){//value of 3 4 5
		document.getElementById("packs1label").classList.remove('disabledElement');
		document.getElementById("packs3label").classList.remove('disabledElement');
		document.getElementById("packs6label").classList.remove('disabledElement');
		document.getElementById("packs12label").classList.remove('disabledElement');
		document.getElementById("packs6label").classList.add('disabledElement');
		document.getElementById("packs12label").classList.add('disabledElement');
		console.log("3."+ bunQty);
	}
	else if(bunQty<12){//value of 6 7 8 9 10 11
		document.getElementById("packs1label").classList.remove('disabledElement');
		document.getElementById("packs3label").classList.remove('disabledElement');
		document.getElementById("packs6label").classList.remove('disabledElement');
		document.getElementById("packs12label").classList.remove('disabledElement');
		document.getElementById("packs12label").classList.add('disabledElement');
		console.log("4."+ bunQty);
	}
	else if(bunQty<51){//value of 12 - 49
		document.getElementById("packs1label").classList.remove('disabledElement');
		document.getElementById("packs3label").classList.remove('disabledElement');
		document.getElementById("packs6label").classList.remove('disabledElement');
		document.getElementById("packs12label").classList.remove('disabledElement');
		console.log("4."+ bunQty);

	} else if(bunQty>50){
		alert("Please enter a valid quantity");
		document.getElementById("packs1label").classList.remove('disabledElement');
		document.getElementById("packs3label").classList.remove('disabledElement');
		document.getElementById("packs6label").classList.remove('disabledElement');
		document.getElementById("packs12label").classList.remove('disabledElement');
		document.getElementById("packs1label").classList.add('disabledElement');
		document.getElementById("packs3label").classList.add('disabledElement');
		document.getElementById("packs6label").classList.add('disabledElement');
		document.getElementById("packs12label").classList.add('disabledElement');
		console.log("5."+ bunQty);
	}

});

//displays correct ratings assigned for the bun based on the selected Bun
if (selectedBun.rating==5){
	document.getElementById("selectedBunStar").src="./assets/detail-stars.png";
} else if (selectedBun.rating==4){
	document.getElementById("selectedBunStar").src="./assets/detail-stars2.png";
}

//take you to cart when clicking on cart
function addtocart(){
	selectedBun.glaze=document.getElementById("glazeSelected").value;
	selectedBun.qty=document.getElementById("bunQty").value;
	localStorage.setItem ("inCart", selectedBun.qty);
	var packs=document.getElementsByClassName("pack");
	for(i=0;i<packs.length;i++){
		if (packs[i].checked==true){
			selectedBun.packs=packs[i].value;}
	}
	document.getElementById("cartlogoImage").src="./assets/cartQty.svg";
	document.getElementById("incartQty").innerHTML=selectedBun.qty;
	sessionStorage.setItem("bundetails", JSON.stringify(selectedBun));	
	//local storage applies to all pages of my website
	//session storage works in the same tab
	//var x = document.getElementById("button2").innerHTML;
   


document.getElementById("mybagButton").innerHTML="Ready for Checkout";
document.getElementById("mybagButton").onclick= () => {
	window.location.href = "./cart.html";	
}
  
}




