function berechne_gebuehren () {

	var ergebnis = 0;
	var gehaltId = -1;
	var stundenAnzahl = radioWert(document.Stundenform.Stundenanzahl);
	var betreuungsArt = radioWert(document.Betreuungsform.Betreuungsart);
	
	var multiplikatorKinderAnzahl = parseFloat(radioWert(document.Kinderform.anzahlKinder));

	/*
		Ermitteln, in welchem Gehaltsbereich sich das eingegebene Gehalt befindet
		(vergl. Gebühren aus dem Kita-Satzungs PDF)
	*/
	if (gesamtgehalt.value < 22001) {
		gehaltId = 0;
	}
	else if (gesamtgehalt.value < 24501) {
		gehaltId = 1;
	}
	else if (gesamtgehalt.value < 27001) {
		gehaltId = 2;
	}
	else if (gesamtgehalt.value < 29501) {
		gehaltId = 3;
	}
	else if (gesamtgehalt.value < 32001) {
		gehaltId = 4;
	}
	else if (gesamtgehalt.value < 34501) {
		gehaltId = 5;
	}
	else if (gesamtgehalt.value < 37001) {
		gehaltId = 6;
	}
	else if (gesamtgehalt.value < 39501) {
		gehaltId = 7;
	}
	else if (gesamtgehalt.value < 42001) {
		gehaltId = 8;
	}
	else if (gesamtgehalt.value < 44501) {
		gehaltId = 9;
	}
	else if (gesamtgehalt.value < 47001) {
		gehaltId = 10;
	}
	else if (gesamtgehalt.value < 49501) {
		gehaltId = 11;
	}
	else if (gesamtgehalt.value < 52001) {
		gehaltId = 12;
	}
	else if (gesamtgehalt.value < 54501) {
		gehaltId = 13;
	}
	else if (gesamtgehalt.value < 57001) {
		gehaltId = 14;
	}
	else if (gesamtgehalt.value < 59501) {
		gehaltId = 15;
	}
	else if (gesamtgehalt.value < 62001) {
		gehaltId = 16;
	}
	else if (gesamtgehalt.value < 64501) {
		gehaltId = 17;
	}
	else if (gesamtgehalt.value < 67001) {
		gehaltId = 18;
	}
	else if (gesamtgehalt.value < 69501) {
		gehaltId = 19;
	}
	else if (gesamtgehalt.value < 72001) {
		gehaltId = 20;
	}
	else if (gesamtgehalt.value < 74501) {
		gehaltId = 21;
	}
	else if (gesamtgehalt.value < 77001) {
		gehaltId = 22;
	}
	else if (gesamtgehalt.value < 79501) {
		gehaltId = 23;
	}
	else if (gesamtgehalt.value < 82001) {
		gehaltId = 24;
	}
	else if (gesamtgehalt.value < 84501) {
		gehaltId = 25;
	}
	else if (gesamtgehalt.value < 87001) {
		gehaltId = 26;
	}
	else if (gesamtgehalt.value < 89501) {
		gehaltId = 27;
	}
	else if (gesamtgehalt.value < 92001) {
		gehaltId = 28;
	}
	else if (gesamtgehalt.value < 94501) {
		gehaltId = 29;
	}
	else if (gesamtgehalt.value < 97001) {
		gehaltId = 30;
	}
	else if (gesamtgehalt.value < 99501) {
		gehaltId = 31;
	}
	else if (gesamtgehalt.value < 102001) {
		gehaltId = 32;
	}
	else if (gesamtgehalt.value < 104501) {
		gehaltId = 33;
	}
	else if (gesamtgehalt.value < 107001) {
		gehaltId = 34;
	}
	else if (gesamtgehalt.value < 109501) {
		gehaltId = 35;
	}
	else if (gesamtgehalt.value < 112001) {
		gehaltId = 36;
	}
	else if (gesamtgehalt.value < 114501) {
		gehaltId = 37;
	}
	else if (gesamtgehalt.value < 117001) {
		gehaltId = 38;
	}
	else if (gesamtgehalt.value < 119501) {
		gehaltId = 39;
	}
	else if (gesamtgehalt.value < 122001) {
		gehaltId = 40;
	}
	else if (gesamtgehalt.value < 124501) {
		gehaltId = 41;
	}
	else if (gesamtgehalt.value < 127001) {
		gehaltId = 42;
	}
	else if (gesamtgehalt.value < 129501) {
		gehaltId = 43;
	}
	else if (gesamtgehalt.value < 132001) {
		gehaltId = 44;
	}
	else if (gesamtgehalt.value < 134501) {
		gehaltId = 45;
	}
	else if (gesamtgehalt.value < 137001) {
		gehaltId = 46;
	}
	else if (gesamtgehalt.value < 139501) {
		gehaltId = 47;
	}
	else if (gesamtgehalt.value < 142001) {
		gehaltId = 48;
	}
	else if (gesamtgehalt.value < 144501) {
		gehaltId = 49;
	}
	else if (gesamtgehalt.value < 147001) {
		gehaltId = 50;
	}
	else if (gesamtgehalt.value < 149501) {
		gehaltId = 51;
	}
	else {
		gehaltId = 52;
	}



	//read data from the external .json file
	$.getJSON("gebuehren.json", function(json) {
 
		if (betreuungsArt == 'krippe')
		{			
		
			if (stundenAnzahl == 6)
			{
				ergebnis = json.kitagebueren[gehaltId].krippe.stunden6;
			}
			else if (stundenAnzahl == 8)
			{
				ergebnis = json.kitagebueren[gehaltId].krippe.stunden8;

			}
			else
			{
				ergebnis = json.kitagebueren[gehaltId].krippe.stunden10;
			}
		}
		else if (betreuungsArt == 'kindergarten')
		{

			//alert(betreuungsArt);

			if (stundenAnzahl == 6)
			{
				ergebnis = json.kitagebueren[gehaltId].kindergarten.stunden6;
			}
			else if (stundenAnzahl == 8)
			{
				ergebnis = json.kitagebueren[gehaltId].kindergarten.stunden8;

			}
			else
			{
				ergebnis = json.kitagebueren[gehaltId].kindergarten.stunden10;
			}

		}
		else
		{

			if (stundenAnzahl == 6)
			{
				ergebnis = json.kitagebueren[gehaltId].hort.stunden4;
			}
			else if (stundenAnzahl == 8)
			{
				ergebnis = json.kitagebueren[gehaltId].hort.stunden6;

			}
			else
			{
				ergebnis = json.kitagebueren[gehaltId].hort.stunden8;
			}
		}

		document.getElementById("gebuehr").value = Math.round(ergebnis * multiplikatorKinderAnzahl *100) /100;

	});
}



//Addieset die beiden Felder mit den Gehältern zum Gesmatgehalt
function berechneGesamtgehalt() {

	gehalt1 = parseFloat(document.getElementById("gehalt1").value);
	gehalt2 = parseFloat(document.getElementById("gehalt2").value);

	//falls im anderen Feld keine Eingabe steht (=false)
	if (!gehalt1)
	{
		gehalt1 = 0;

	}
	if (!gehalt2)
	{
		gehalt2 = 0;
	}

	$('#gesamtgehalt').html(gehalt1 + gehalt2);

}





function radioWert(rObj) {

	for (var i=0; i<rObj.length; i++) if (rObj[i].checked) return rObj[i].value;
	return false;
}




$( document ).ready(function() {

	/* Initial auf Null */
	$('#gebuehr').html('0');
	$('#gesamtgehalt').html('0');

	/* Stundenanzahl ändern */
	$('input[name="Betreuungsart"]').on('change', function() {
	
		switch ($(this).val()) {

			case 'hort':
				//console.log('HORT');
				$('#stunden-1').html('4');
				$('#stunden-2').html('6');
				$('#stunden-3').html('8');
				break;

			default:
				//console.log('ANDERES');
				$('#stunden-1').html('6');
				$('#stunden-2').html('8');
				$('#stunden-3').html('10');
				break;
		}
	}
);




// Gehalt der beiden Elternteile addieren
$( document ).ready(function() {

	$('#gesamtgehalt').html(0);

	var gehalt1 = 0;
	var gehalt2 = 0;

	/* Initial auf Null */
	$('#gesamtgehalt').html('0');

	$('input[id="gehalt1"]').on('change, keyup', function(){

		berechneGesamtgehalt(); 
	 		
	})


	$('input[id="gehalt2"]').on('change, keyup', function(){

		berechneGesamtgehalt(); 
	
	})



 	//change, keyup und mousup lassen sich nicht kombinieren???
 	//deshalb die Blöcke nun doppelt
	$('input[id="gehalt1"]').on('mouseup', function(){

		berechneGesamtgehalt(); 
	 		
	})



	$('input[id="gehalt2"]').on('mouseup', function(){

		berechneGesamtgehalt(); 
	 		
	})

});








/* Änderungen im Formular */
$('input[name="Betreuungsart"], input[name="Stundenanzahl"], input[name="anzahlKinder"]').on('change', function(){

	berechne_gebuehren();

});


});
