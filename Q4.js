function calculateTotal() {
	var amountRose = document.getElementById("rose").value;
	var amountLily = document.getElementById("lily").value;
	var amountCalla = document.getElementById("scalla").value;
	var amountOrchid = document.getElementById("orchid").value;
	var amoundDaisy = document.getElementById("daisy").value;
	var delivery;
	

	if(!(/^\d+$/).test(amountRose && amountLily && amountCalla && amountOrchid && amoundDaisy)){
		alert("Error! Insert a valid number of flowers!");
	}else{

	if(!(document.getElementById("standard").checked || document.getElementById("premium").checked)){
		alert("Error! Select a valid delivery method");
	}else{

	if(document.getElementById("standard").checked){
		delivery = 2;
	} else delivery = 6;

	var priceRose = amountRose* 5.50;
	var priceLily = amountLily * 7.50;
	var priceCalla = amountCalla * 4.00;
	var priceOrchid = amountOrchid * 8.00;
	var priceDaisy = amoundDaisy * 7.00;
	var totalPrice = priceDaisy + priceRose + priceOrchid + priceLily + priceCalla + delivery;


	document.getElementById("frm").innerHTML += "<b>Red Roses (units = "+amountRose+"): </b>$" + priceRose;
	document.getElementById("frm").innerHTML += "<br><b>Yellow Lily (units = "+amountLily+"): </b>$" + priceLily;
	document.getElementById("frm").innerHTML += "<br><b>White Mini Calla (units = "+amountCalla+"): </b>$" + priceCalla;
	document.getElementById("frm").innerHTML += "<br><b>Pink Orchid (units = "+amountOrchid+"): </b>$" + priceOrchid;
	document.getElementById("frm").innerHTML += "<br><b>Orange Daisy (units = "+amoundDaisy+"): </b>$" + priceDaisy;
	document.getElementById("frm").innerHTML += "<br><b>Delivery: </b>$" + delivery;
	document.getElementById("frm").innerHTML += "<br>";
	document.getElementById("frm").innerHTML += "<br><b>Final Total: </b>$"+totalPrice+"<br>";
}}}