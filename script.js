var aqi;
var co;
var no;
var no2;
var o3;
var so2;
var pm2_5;
var pm10;
var nh3;


$(document).ready(function(){


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/air_pollution?lat=40.7351&lon=73.9945&appid=08737b902409facd0a89efb98dcd6981',
        dataType: 'jsonp',
        success: function(results){
            aqi = results.list[0].main.aqi;
            co = results.list[0].components.co;
            no = results.list[0].components.no;
            no2 = results.list[0].components.no2;
            o3 = results.list[0].components.o3;
            so2 = results.list[0].components.so2;
            pm2_5 = results.list[0].components.pm2_5;
            pm10 = results.list[0].components.pm10;
            nh3 = results.list[0].components.nh3;

            aqInterpretation();

        }
    });

    $('.circle').each(function(i,el){

        var tLeft = Math.floor(Math.random()*1000),
            tTop  = Math.floor(Math.random()*450);

        $(el).css({position:'absolute', left: tLeft, top: tTop});

        var shapeWidth = $('.circle').width();
	    var shapeHeight = $('.circle').height();

	    var w = window - shapeWidth;
	    var h = window - shapeHeight;


	    var xPos = Math.random()* w 
	    var yPos = Math.random()* h


    });

    function aqInterpretation(){

        if(aqi == '1'){
            $('body').addClass('good');
            $('.container').addClass('g');
            $('.print').addClass('g');
            $('.circle').addClass('gcircle');
        }

        if(aqi == '2'){
            $('body').addClass('fair');
            $('.container').addClass('f');
            $('.print').addClass('f');
            $('.circle').addClass('fcircle');
        }

        if(aqi == '3'){
            $('body').addClass('moderate');
            $('.container').addClass('m');
            $('.print').addClass('m');
            $('.circle').addClass('mcircle');
        }

        if(aqi == '4'){
            $('body').addClass('poor');
            $('.container').addClass('p');
            $('.print').addClass('p');
            $('.circle').addClass('pcircle');
        }

        if(aqi == '5'){
            $('body').addClass('verypoor');
            $('.container').addClass('vp');
            $('.print').addClass('vp');
            $('.circle').addClass('vpcircle');
        }

        var coskew  = "skew(" + co*10 + "deg)";
    	$('.co').css('transform', coskew)

    	var noskew  = "skew(" + no*10 + "deg)";
    	$('.no').css('transform', noskew)

    	var no2skew  = "skew(" + no2*10 + "deg)";
    	$('.no2').css('transform', no2skew)

    	var o3skew  = "skew(" + o3*10 + "deg)";
    	$('.o3').css('transform', o3skew)

    	var so2skew  = "skew(" + so2*10 + "deg)";
    	$('.so2').css('transform', so2skew)

    	var pm2_5skew  = "skew(" + pm2_5*10 + "deg)";
    	$('.pm2_5').css('transform', pm2_5skew)

		var pm10skew  = "skew(" + pm10*10 + "deg)";
    	$('.pm10').css('transform', pm10skew)

    	var nh3skew  = "skew(" + nh3*10 + "deg)";
    	$('.nh3').css('transform', nh3skew)

    	$('.co').on('mouseenter', function(){
        	$('.data').append('CO:'+co+'&#181;g/m<sup>3</sup><br>' );
    	});

    	$('.co').on('mouseleave', function(){
        	$('.data').empty();
    	});	

    	$('.no').on('mouseenter', function(){
        	$('.data').append('NO:'+no+'&#181;g/m<sup>3</sup><br>');
    	});	

    	$('.no').on('mouseleave', function(){
        	$('.data').empty();
    	});	

    	$('.no2').on('mouseenter', function(){
        	$('.data').append('NO<sub>2</sub>:'+no2+'&#181;g/m<sup>3</sup><br>');
    	});

    	$('.no2').on('mouseleave', function(){
        	$('.data').empty();
    	});		

    	$('.o3').on('mouseenter', function(){
        	$('.data').append('O<sub>3</sub>:'+o3+'&#181;g/m<sup>3</sup><br>');
    	});	

    	$('.o3').on('mouseleave', function(){
        	$('.data').empty();
    	});	

    	$('.so2').on('mouseenter', function(){
        	$('.data').append('SO<sub>2</sub>:'+so2+'&#181;g/m<sup>3</sup><br>');
    	});

    	$('.so2').on('mouseleave', function(){
        	$('.data').empty();
    	});		

    	$('.pm2_5').on('mouseenter', function(){
        	$('.data').append('PM<sub>2.5</sub>:'+pm2_5+'&#181;g/m<sup>3</sup><br>');
    	});

    	$('.pm2_5').on('mouseleave', function(){
        	$('.data').empty();
    	});		

    	$('.pm10').on('mouseenter', function(){
        	$('.data').append('PM<sub>10</sub>:'+pm10+'&#181;g/m<sup>3</sup><br>');
    	});

    	$('.pm10').on('mouseleave', function(){
        	$('.data').empty();
    	});		

    	$('.nh3').on('mouseenter', function(){
        	$('.data').append('NH<sub>3</sub>:'+nh3+'&#181;g/m<sup>3</sup><br>');
    	});

    	$('.nh3').on('mouseleave', function(){
        	$('.data').empty();
    	});	

    	$('.about').on('click', function(){
        	$('.circle').remove();
        	$('.data').append('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc. Tincidunt dui ut ornare lectus sit amet est. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Imperdiet dui accumsan sit amet nulla facilisi morbi. Egestas pretium aenean pharetra magna ac. Volutpat diam ut venenatis tellus in metus vulputate. Velit aliquet sagittis id consectetur purus. Tincidunt vitae semper quis lectus. Non nisi est sit amet facilisis. Quis eleifend quam adipiscing vitae proin sagittis nisl. Arcu dui vivamus arcu felis bibendum ut tristique et. Rhoncus urna neque viverra justo. Erat velit scelerisque in dictum non. Dui accumsan sit amet nulla facilisi. Neque laoreet suspendisse interdum consectetur libero. Mi in nulla posuere sollicitudin. Adipiscing elit ut aliquam purus sit.');
    	});

    	$('.data').on('click', function(){
        	location.reload();
    	});

    }   


});