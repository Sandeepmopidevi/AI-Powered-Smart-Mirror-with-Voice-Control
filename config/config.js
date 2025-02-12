let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "en",
	locale: "en-IN",

	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

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
			header: "Indian Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "webcal://www.india.gov.in/calendar/2025/export.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 16.3437,  // Gudlavalleru latitude
				lon: 81.0545   // Gudlavalleru longitude
			}
		},
		{
			module: "MMM-Hotword2",
			position: "top_right",  // Can be any position
			config: {
			  chimeOnFinish: true,  // Optional chime after wake word
			  detector: {
				Model: "resources/Hey-San_en_raspberry-pi_v3_0_0.ppn",  // Use the model you downloaded
				Sensitivity: 0.5,  // Adjust sensitivity (0.1 - 1.0)
				SkipEnergyRatio: 0.2  // Reduce false activations
			  },
			  onDetected: {
				notification: "ASSISTANT_ACTIVATE",
				payload: {}
			  },
			  useDisplay: true  // Hide wake word detection display
			}
		  },
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 16.3437,
				lon: 81.0545
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "NDTV News - India",
						url: "https://feeds.feedburner.com/ndtvnews-india-news"
					},
					{
						title: "Gadgets 360",
						url: "https://feeds.feedburner.com/gadgets360-latest"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-Traffic",
			position: "bottom_right",
			config: {
				provider: "inrix", // Free traffic data provider
				originCoords: "16.3437,81.0545", // Gudlavalleru
				destinationCoords: "16.5062,80.6480", // Vijayawada
				route_name: "Gudlavalleru to Vijayawada",
				showSummary: true,
				showWarnings: true
			}
		},
		{
			module: "mmm-whispergpt",
			position: "bottom_center",
			config: {
				openai_api_key: "<<api>>",
				model: "gpt-4",
				lang: "en-IN"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
