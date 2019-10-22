
var selectedBun=sessionStorage.getItem("bundetails");
selectedBun=JSON.parse(selectedBun);
console.log(selectedBun);

document.getElementById("selectedBunName").innerHTML = selectedBun.bunname;
var displayPrice= "$"+selectedBun.price+".00";
console.log(displayPrice)
document.getElementById("selectedBunPrice").innerHTML = displayPrice;
document.getElementById("selectedBunText").innerHTML = selectedBun.description;
/*document.getElementById("selectedBunStar").innerHTML = selectedBun.rating;*/
/*var displayImage= selectedBun.image;
console.log(displayImage);
displayImage.style.width = "500px";
displayImage.style.height = "500px";
document.getElementById("selectedBunImage").src=displayImage;*/


var displayImage = document.getElementById("selectedBunImage");
displayImage.innerHTML="<img src=\"display.png\" width=\"500px\" height=\"500px\">";


/*document.getElementById("originalImage").addEventListener("click", function(){
	var original = new buns("./assets/display.png",`Original is our most popular bun freshly prepared every morning since 1992.
	Ingredients: Wholewheat flour, Butter, Egg, Sugar, Baking soda
The buns are sold in packs of 1,3,6 or 12 buns`, "Original Bun", 5,0,5,"",0,0);*/


document.getElementById("mybag").addEventListener("click",function(){

	selectedBun.glaze=document.getElementById("glazeSelected").value;
	console.log(selectedBun.glaze);
	selectedBun.qty=document.getElementById("bunQty").value;

	var packs=document.getElementsByClassName("pack");
	for(i=0;i<packs.length;i++){
		if (packs[i].checked==true){
			selectedBun.packs=packs[i].value;
			console.log(selectedBun.packs);
		}
	}
	sessionStorage.setItem("bundetailsupdates", JSON.stringify(selectedBun));	
	window.location.href = "./cart.html";

});