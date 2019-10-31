
document.getElementById("cartlogoImage").src="./assets/cartQty.svg";
var cartQuantity=localStorage.getItem ("inCart");
document.getElementById("incartQty").innerHTML=cartQuantity;

//creates an array to store multiple items in the cart

var totalCart=JSON.parse(localStorage.getItem("totalcart"));
console.log(totalCart);

//creates div for elemen{t element in the cart
var bunContent = "";
var subtotal=0;
var tax=0;
var grandTotal=0;
var src="";

for (i=0;i<totalCart.length; i++) {

	if (totalCart[i].bunname == "Original Bun"){
		var bunArray=["<img src=\"assets/original.png\" width=\"250px\" height=\"250px\">", 
	"<img src=\"assets/original-sugarmilk.png\" width=\"250px\" height=\"250px\">",
	"<img src=\"assets/original-vanillamilk.png\" width=\"250px\" height=\"250px\">",
	"<img src=\"assets/original-chocolate.png\" width=\"250px\" height=\"250px\">"];
	 } else if (totalCart[i].bunname == "Blackberry Bun"){
	 	var bunArray=["<img src=\"assets/blackberry.png\" width=\"250px\" height=\"250px\">", 
	"<img src=\"assets/original-sugarmilk.png\" width=\"250px\" height=\"250px\">",
	"<img src=\"assets/original-vanillamilk.png\" width=\"250px\" height=\"250px\">",
	"<img src=\"assets/original-chocolate.png\" width=\"250px\" height=\"250px\">"];
	} else if (totalCart[i].bunname == "Walnut Bun"){
	 	var bunArray=["<img src=\"assets/browse-3.png\" width=\"250px\" height=\"250px\">", 
	"<img src=\"assets/original-sugarmilk.png\" width=\"250px\" height=\"250px\">",
	"<img src=\"assets/original-vanillamilk.png\" width=\"250px\" height=\"250px\">",
	"<img src=\"assets/original-chocolate.png\" width=\"250px\" height=\"250px\">"];
	}
	
	var displayImage = document.getElementById("selectedBunImage");
	if (totalCart[i].glaze == "Plain"){
		src=bunArray[0];
	}else if (totalCart[i].glaze == "Sugar-Milk"){
		src=bunArray[1];
	}else if (totalCart[i].glaze == "Vanilla-Milk"){
		src=bunArray[2];
	}else if (totalCart[i].glaze == "Double-Chocolate"){
		src=bunArray[3];
	}
	
	bunContent += 
	'<div id="outBox-' + i + 
		'"><div class="sub-flex">'+ 
			'<div class="child-1" id="selectedBunImage">'+
		src +'</div>'+

			'<div class="child-2">'+
				'<div class="samelineTitle">'+
					'<div class="bun-name" id="cartBunName">'+ totalCart[i].bunname+'</div>'+
					'<img id="removeBun-'+ i +'" class="deleteBun" alt="Cross to cancel selected bun" src="./assets/deleteitem.svg">'+
				'</div>' + 
				'<div class="elementSpace">'+
					'<div class="select" >Glaze: </div>'+
						'<div class= "insert1" id="insert-glaze">'+ totalCart[i].glaze + '</div>' +
				'</div>'+
				'<div class="elementSpace">'+
					'<div class="select" >Price: </div>'+
						'<div class= "insert1" id="insert-price">$'+ totalCart[i].price.toFixed(2)+'</div>'+ 
				'</div>'+
				'<div class="elementSpace">'+
					'<div class="select">Quantity: </div>'+
					'<div class= "insert1" id="insert-qty">'+ totalCart[i].qty + '</div>'+ 
				'</div>'+
				'<div class="elementSpace">'+
					'<div class="select">Packs: </div>'+
					'<div class= "insert1" id="insert-packs">'+ totalCart[i].packs+ '</div>'+ 
				'</div>'+
			'</div>'+
		'</div>'+

	'</div><hr><br>';
	
	subtotal += (totalCart[i].qty * totalCart[i].price) ;
	tax += subtotal * 0.075;
	grandTotal += subtotal + tax;
	

}
document.getElementById("bunCartDisplay").innerHTML = bunContent;
document.getElementById("calculate-total").innerHTML = "$ "+subtotal.toFixed(2);
//var tax= subtotal * 0.075;
document.getElementById("calculate-tax").innerHTML = "$ " + tax.toFixed(2);
document.getElementById("grand-total").innerHTML = "$ "+ grandTotal.toFixed(2);


//for removing items from the cart
for (i=0;i<totalCart.length; i++){

	document.getElementById("removeBun-"+ i).addEventListener("click",function(ele) {
		//debugger;
		// Removes the element from the visual display
		var id = ele.srcElement.id.split('-')[1];
		var elem = document.getElementById("outBox-"+ id);
		//console.log('elem', elem);
		document.getElementById("outBox-"+ ele.srcElement.id.split('-')[1]).remove();

		var totalCart = JSON.parse(localStorage.getItem("totalcart"));

		//console.log(totalCart[id].qty);
		var cartQuantity=localStorage.getItem ("inCart");


		if (cartQuantity>0)
			cartQuantity = cartQuantity-totalCart[id].qty;
		else
			cartQuantity = 0;

		localStorage.setItem ("inCart", cartQuantity);
		document.getElementById("incartQty").innerHTML=cartQuantity;	

		if (totalCart.length>=0){
			subtotal = subtotal - (totalCart[id].qty * totalCart[id].price)
			console.log(tax);
			tax = tax - subtotal * 0.075;
			console.log(tax);
			grandTotal = grandTotal - subtotal - tax ;
			document.getElementById("calculate-total").innerHTML = "$ "+subtotal.toFixed(2);
			document.getElementById("calculate-tax").innerHTML = "$ "+tax.toFixed(2);
			document.getElementById("grand-total").innerHTML = "$ "+ grandTotal.toFixed(2);
		}
		else{
			subtotal=0;
			tax=0;
			grandTotal=0;
			document.getElementById("calculate-total").innerHTML = "$ "+subtotal.toFixed(2);
			document.getElementById("calculate-tax").innerHTML = "$ "+tax.toFixed(2);
			document.getElementById("grand-total").innerHTML = "$ "+ grandTotal.toFixed(2);
		}
		

		

		
		//console.log(totalCart);

		totalCart.splice(id, 1);

		localStorage.setItem ("totalcart", JSON.stringify(totalCart));

		//string to number

		// if (i > -1)
		// 	totalCart.splice(id, 1);

		// console.log("1"+totalCart);

		
		localStorage.setItem ("totalcart", JSON.stringify(totalCart));

		
	});

}