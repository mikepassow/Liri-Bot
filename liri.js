
var fs = require("fs");
require("dotenv").config(); // to read and set any environment variables with the dotenv package
var keys = require("./keys.js"); //adds the keys.js file and uses data from it
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify); //pulls spotify data?
var axios = require("axios"); //initializes axios
//var moment = require("moment"); //initializes moment.js



axios 
.get("https://rest.bandsintown.com/")
.then(function(third){
    //nameOfVenue :
    //venueLocation:
    //DateOfEvent:
})
//This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

var bandsInTown = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
console.log("Bands in town: " + bandsInTown);




/*
//function for spotify--------------------------------------------------------------------

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
   
  spotify.search({ type: 'track', query: 'Ace of Spades' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  for(let i = 0; i< data.tracks.items.length; i++){
     console.log(data.tracks.items[i].album)
     console.log(data.tracks.items[i].artists)
     console.log(data.tracks.items[i].name)
     console.log(data.tracks.items[i].href)
  }
  });
  */
//------------------------------------------------------------------------------------------------

//function for movies


//function for do-what-it-says


/*function doWhatItSays(){
	fs.readFile('random.txt', 'utf8', function(err, data){

		if (err){ 
			return console.log(err);
		}

		var dataArr = data.split(',');

		processCommands(dataArr[0], dataArr[1]);
    });
};
*/