
var selectedBun=sessionStorage.getItem("bundetails");
selectedBun=JSON.parse(selectedBun);
console.log(selectedBun);

document.getElementById("selectedBunName").innerHTML = selectedBun.bunname;
var displayPrice= "$"+selectedBun.price+".00";
console.log(displayPrice)
document.getElementById("selectedBunPrice").innerHTML = displayPrice;
document.getElementById("selectedBunText").innerHTML = selectedBun.description;


var originalArray=["<img src=\"assets/original.png\" width=\"500px\" height=\"500px\">", 
"<img src=\"assets/original-sugarmilk.png\" width=\"500px\" height=\"500px\">",
"<img src=\"assets/original-vanillamilk.png\" width=\"500px\" height=\"500px\">",
"<img src=\"assets/original-chocolate.png\" width=\"500px\" height=\"500px\">"];
console.log(originalArray);


var displayImage = document.getElementById("selectedBunImage");
displayImage.innerHTML=originalArray[0];

document.getElementById("glazeSelected").addEventListener("change",function(){
	selectedBun.glaze=document.getElementById("glazeSelected").value;
	if (selectedBun.glaze == "Plain"){
		displayImage.innerHTML=originalArray[0];
	}else if (selectedBun.glaze == "Sugar-Milk"){
		displayImage.innerHTML=originalArray[1];
	}else if (selectedBun.glaze == "Vanilla-Milk"){
		displayImage.innerHTML=originalArray[2];
	}else if (selectedBun.glaze == "Double-Chocolate"){
		displayImage.innerHTML=originalArray[3];
	}
});

document.getElementById("mybag").addEventListener("click",function(){
	selectedBun.glaze=document.getElementById("glazeSelected").value;

	selectedBun.qty=document.getElementById("bunQty").value;

	var packs=document.getElementsByClassName("pack");
	for(i=0;i<packs.length;i++){
		if (packs[i].checked==true){
			selectedBun.packs=packs[i].value;
			//console.log(selectedBun.packs);
		}
	}
	sessionStorage.setItem("bundetailsupdates", JSON.stringify(selectedBun));	
	window.location.href = "./cart.html";
});