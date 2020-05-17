/*Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @huytheduong
0
0 0 huytheduong/Miracle-ShellHacks2018
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
Miracle-ShellHacks2018/config.js
18c6d13  on Sep 24, 2018
@huytheduong huytheduong Update config.js

/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be

	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "bottom_bar"
		
		},
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Tampa",
				locationID: "4174757",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "8c220d3303f0b5b41***************"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Tampa",
				locationID: "4174757",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "8c220d3303f0b5b41***************"
			}
		},
		
		{
  			module: "MMM-NowPlayingOnSpotify",
  			position: "top_left",

			config: {
			clientID: "38947705a7144687b***************",
			clientSecret: "d5bc90cc12df4430****************",
			accessToken: "BQCh6wBzU882K8si74yTs6hpcsMe_HYduVjidmaQfJjuu-37DPjeKKlmglWtzTk2U8mEejfqabDOmaX0js8IOtZNu1H5v985SKgvtRhiN8ODUNrEPim73NQbtuLv9QXiZWXtS3WIIqQhcrJ**************",
			refreshToken: "AQCaMTI5fdw8Lb1NjNvqw7ZueHGLVnpYMkmnvsyyvUb2bnOKBOa1iIYSA02ldhPWj_vlg5Fj4be3Q4iwL_igXx2g-ERHpcxHgh-s283o9sTIb6*******************"
			}
		},
		{
            		module: 'MMM-CoinMarketCap',
            		position: "top_left",
            		header: "Cryptocurrencies",
            		config: {
                	apiKey: '117f57c1-8233-446c-9b1e-*************',
                	currencies: ['bitcoin', 'ethereum', 'litecoin', 'ripple'],
                	view: 'graphWithChanges',
                	conversion: 'CAD',
                // See below for more Configuration Options
            		}
        	},
		{
		  //disabled:true,
		  module: "MMM-AVStock",
		  position: "top_left",
		  config: {
		  apiKey : "A33DV7*************",
		  symbols : ["aapl", "GOOGL", "005930.KS"],
		 	}
		},

		//corona virus case in the world
		{
		    module: "MMM-COVID19",
		    position: "top_left",
		    config: {
		    updateInterval: 300000,
		    worldStats: true,
		    delta: true,
		    lastUpdateInfo: true,
		    countries: [ "Argentina", "China", "Italy", "Spain" ],
		    headerRowClass: "small",
		    rapidapiKey : "ada62d22e5msh53fbf0d0ce9e051****************" // this is an example, do not try to use it for real
			}
  		},
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
