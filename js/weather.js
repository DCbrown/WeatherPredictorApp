$("#findMyWeather").click(function(event){

    event.preventDefault();

    if ($("#city").val()!="") {

    $.get("scraper.php?city=" + $("#city").val(), function( data ){

		alert(data);

    		});

    	} else {

    		alert("please enter a city");

    	}
});