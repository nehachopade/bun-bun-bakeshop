
var selectedBun=sessionStorage.getItem("bundetails");
selectedBun=JSON.parse(selectedBun);


document.getElementById("selectedBunName").innerHTML = selectedBun.bunname;
var displayPrice= "$"+selectedBun.price+".00";
document.getElementById("selectedBunPrice").innerHTML = displayPrice;
document.getElementById("selectedBunText").innerHTML = selectedBun.description;


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

var displayImage = document.getElementById("selectedBunImage");
displayImage.innerHTML=bunArray[0];

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

document.getElementById("mybagButton").addEventListener("click",function(){

	document.getElementById("cartImage").innerHTML="<img src=\"assets/cartQty.png\">";

	document.getElementById("incartQty").innerHTML=selectedBun.qty;
	


	selectedBun.glaze=document.getElementById("glazeSelected").value;
	selectedBun.qty=document.getElementById("bunQty").value;

	var packs=document.getElementsByClassName("pack");
	for(i=0;i<packs.length;i++){
		if (packs[i].checked==true){
			selectedBun.packs=packs[i].value;
		}
	}
	sessionStorage.setItem("bundetailsupdates", JSON.stringify(selectedBun));	
	window.location.href = "./cart.html";
});