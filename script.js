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
            $('.co').addClass('invert');
            $('.about').html('Carbon monoxide (chemical formula CO) is a colorless, odorless, and tasteless flammable gas that is slightly less dense than air. It is toxic to animals that use hemoglobin as an oxygen carrier when encountered in concentrations above about 35 ppm causing carbon monoxide poisoning.');
    	});

    	$('.co').on('mouseleave', function(){
        	$('.data').empty();
            $('.co').removeClass('invert');
            $('.about').html('?');
    	});	

    	$('.no').on('mouseenter', function(){
        	$('.data').append('NO:'+no+'&#181;g/m<sup>3</sup><br>');
            $('.no').addClass('invert');
            $('.about').html('When nitrogen is released during fuel combustion it combines with oxygen atoms to create nitric oxide (NO). This further combines with oxygen to create nitrogen dioxide (NO<sub>2</sub>). Nitric oxide is not considered to be hazardous to health at typical ambient concentrations, but nitrogen dioxide can be.');
    	});	

    	$('.no').on('mouseleave', function(){
        	$('.data').empty();
            $('.no').removeClass('invert');
            $('.about').html('?');
    	});	

    	$('.no2').on('mouseenter', function(){
        	$('.data').append('NO<sub>2</sub>:'+no2+'&#181;g/m<sup>3</sup><br>');
            $('.no2').addClass('invert');
            $('.about').html('Nitrogen dioxide (NO<sub>2</sub>) is an irritant gas, which at high concentrations causes inflammation of the airways. Nitrogen dioxide react to form smog and acid rain as well as being central to the formation of fine particles and ground level ozone, which are associated with adverse health effects.');
    	});

    	$('.no2').on('mouseleave', function(){
        	$('.data').empty();
            $('.no2').removeClass('invert');
            $('.about').html('?');
    	});		

    	$('.o3').on('mouseenter', function(){
        	$('.data').append('O<sub>3</sub>:'+o3+'&#181;g/m<sup>3</sup><br>');
            $('.o3').addClass('invert');
            $('.about').html('Elevated concentrations of ozone (O<sub>3</sub>) can trigger a variety of responses, such as chest pain, coughing, throat irritation, and airway inflammation. It also can reduce lung function and harm lung tissue. Ozone can worsen bronchitis, emphysema, and asthma, leading to increased medical care.');
    	});	

    	$('.o3').on('mouseleave', function(){
        	$('.data').empty();
            $('.o3').removeClass('invert');
            $('.about').html('?');
    	});	

    	$('.so2').on('mouseenter', function(){
        	$('.data').append('SO<sub>2</sub>:'+so2+'&#181;g/m<sup>3</sup><br>');
            $('.so2').addClass('invert');
            $('.about').html('Sulfur dioxide (SO<sub>2</sub>), a colorless, bad-smelling, toxic gas. Sulfur dioxide can create secondary pollutants once released into the air. Secondary pollutants formed with sulfur dioxide include sulfate aerosols, particulate matter, and acid rain.');
    	});

    	$('.so2').on('mouseleave', function(){
        	$('.data').empty();
            $('.so2').removeClass('invert');
            $('.about').html('?');
    	});		

    	$('.pm2_5').on('mouseenter', function(){
        	$('.data').append('PM<sub>2.5</sub>:'+pm2_5+'&#181;g/m<sup>3</sup><br>');
            $('.pm2_5').addClass('invert');
            $('.about').html('Fine particulate matter (PM<sub>2.5</sub>) are tiny particles that reduce visibility. PM<sub>2.5</sub> are able to travel deeply into the respiratory tract, reaching the lungs. Exposure to fine particles can cause short-term health effects such as eye, nose, throat and lung irritation, coughing, sneezing, runny nose and shortness of breath. ');
    	});

    	$('.pm2_5').on('mouseleave', function(){
        	$('.data').empty();
            $('.pm2_5').removeClass('invert');
            $('.about').html('?');
    	});		

    	$('.pm10').on('mouseenter', function(){
        	$('.data').append('PM<sub>10</sub>:'+pm10+'&#181;g/m<sup>3</sup><br>');
            $('.pm10').addClass('invert');
            $('.about').html('Particles with a diameter of 10 microns or less (PM<sub>10</sub>) are inhalable into the lungs and can induce adverse health effects. Short-term exposures to PM<sub>10</sub> have been associated with worsening of respiratory diseases, including asthma and chronic obstructive pulmonary disease (COPD).');
    	});

    	$('.pm10').on('mouseleave', function(){
        	$('.data').empty();
            $('.pm10').removeClass('invert');
            $('.about').html('?');
    	});		

    	$('.nh3').on('mouseenter', function(){
        	$('.data').append('NH<sub>3</sub>:'+nh3+'&#181;g/m<sup>3</sup><br>');
            $('.nh3').addClass('invert');
            $('.about').html('Ammonia (NH<sub>3</sub>) reacts with other pollutants in the air to form fine particles of ammonium salts which affect human breathing. Ammonia gas can also affect the soil chemistry of the locality that it settles on and will, for example, degrade the conditions required by the sphagnum moss and heathers of peatland.');
    	});

    	$('.nh3').on('mouseleave', function(){
        	$('.data').empty();
            $('.nh3').removeClass('invert');
            $('.about').html('?');
    	});	

        if (aqi==1){
            $('.about').on('click', function(){
            $('.about').html('The current air quality at 40.7351° N, 73.9945° W is good.');
        });
        };

        if (aqi==2){
            $('.about').on('click', function(){
            $('.about').html('The current air quality at 40.7351° N, 73.9945° W is fair.');
        });
        };

        if (aqi==3){
            $('.about').on('click', function(){
            $('.about').html('The current air quality at 40.7351° N, 73.9945° W is moderate.');
        });
        };

        if (aqi==4){
            $('.about').on('click', function(){
            $('.about').html('The current air quality at 40.7351° N, 73.9945° W is poor.');
        });
        };

        if (aqi==5){
            $('.about').on('click', function(){
            $('.about').html('The current air quality at 40.7351° N, 73.9945° W is very poor.');
        });
        };

    	$('.refresh').on('click', function(){
        	location.reload();
    	});

        var d = new Date();
        var n = d.toLocaleTimeString();
        document.getElementById("time").innerHTML = n;

    }

});