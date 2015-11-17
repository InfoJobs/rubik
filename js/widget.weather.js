;(function(d) {

	var lang = 'es', // es or it
	urlWeather = 'http://api.openweathermap.org/data/2.5/weather?',
	apiKey = '7c31c99ee2b6fee7f958ba8a5f9f998b',
	eWeatherIcon = d.getElementById('weatherIcon'),
	eWeatherDate = d.getElementById('weatherDate'),
	eweatherTemp = d.getElementById('weatherTemp'),
	eWeatherLocation = d.getElementById('weatherLocation');


	var net = {};

	net.READY_STATE_UNINITIALIZED = 0;
	net.READY_STATE_LOADING = 1;
	net.READY_STATE_LOADED = 2;
	net.READY_STATE_INTERACTIVE = 3;
	net.READY_STATE_COMPLETE = 4;

	// Constructor
	net.LoaderContents = function(url, funcion, funcionError) {
		this.url = url;
		this.req = null;
		this.onload = funcion;
		this.onerror = (funcionError) ? funcionError : this.defaultError;
		this.cargaContenidoXML(url);
	};

	net.LoaderContents.prototype = {
		cargaContenidoXML: function(url) {
			if(window.XMLHttpRequest) {
				this.req = new XMLHttpRequest();
			}
			else if(window.ActiveXObject) {
				this.req = new ActiveXObject("Microsoft.XMLHTTP");
			}

			if(this.req) {
				try {
					var loader = this;
					this.req.onreadystatechange = function() {
						loader.onReadyState.call(loader);
					};
					this.req.open('GET', url, true);
					this.req.send(null);
				} catch(err) {
					this.onerror.call(this);
				}
			}
		},

		onReadyState: function() {
			var req = this.req;
			var ready = req.readyState;
			if(ready == net.READY_STATE_COMPLETE) {
				var httpStatus = req.status;
				if(httpStatus === 200 || httpStatus === 0) {
					this.onload.call(this);
				}
				else {
					this.onerror.call(this);
				}
			}
		},

		defaultError: function() {
			console.log("There was an error getting data ---------------");
			console.log("readyState: " + this.req.readyState);
			console.log("status: " + this.req.status);
			console.log("headers: " + this.req.getAllResponseHeaders());
		}
	};

	function getResult() {
		var oWeatherResult = JSON.parse(this.req.responseText);

		eWeatherIcon.src = 'http://media.infojobs.net/appgrade/pictures/weather/' + oWeatherResult.weather[0].icon + '.svg';
		eweatherTemp.innerHTML = Math.round(oWeatherResult.main.temp - 273.15) + 'º';
		eWeatherLocation.innerHTML = oWeatherResult.name;

		var eTempLocation = d.querySelector('.data li:first-child');
		eTempLocation.style.display = 'block';

	}

	function loadWeather(longitude, latitude) {
		var location = 'lat='+ latitude.toString().substring(0, 5) +'&lon='+ longitude.toString().substring(0, 4),
		// var location = 'lat='+ latitude +'&lon='+ longitude,
		apiWeather = urlWeather + location + '&APPID=' + apiKey + '&lang=' + lang,
		loaderContents = new net.LoaderContents( apiWeather, getResult);
		console.log(apiWeather);
	}

	function success(location) {
		loadWeather(location.coords.longitude, location.coords.latitude);
	}

	function error(error) {
		console.log('Error', error);
	}
	
	function printDate() {
		var date = new Date(),
		oDataAttr = JSON.parse(document.getElementById('weatherDate').dataset.date),
		dToday = [oDataAttr.week[date.getDay()],
		date.getDate(),
		oDataAttr.month[date.getMonth()],
		date.getFullYear() + ',',
		date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())].join(' ');

		eWeatherDate.innerHTML = dToday;
	}

	// Load Geolocation ----------------------------------------
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success, error);
	} else {
		console.log()('not supported');
	}

	printDate();


})(document);
