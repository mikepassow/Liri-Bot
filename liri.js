

var fs = require("fs");
// for .env file
require("dotenv").config();      
//calls spotify api           
var Spotify = require("node-spotify-api");  
//calls keys.js file
var keys = require("./keys.js");   
//constructor function for spotify         
var spotify = new Spotify(keys.spotify);    
//creates an axios call
var axios = require("axios");           
//creats a moment.js call    
var moment = require("moment");
//argument to run data from the file
var action = process.argv[2];
//returns everything after index 3 
var nodeArgs = process.argv.slice(3); 
//empty string for node arguments
var queryThis = "";                       

//loop for node arguments
for (var i = 0; i < nodeArgs.length; i++) {   
  if (i > 0 && i < nodeArgs.length) {         
    queryThis = queryThis + "+" + nodeArgs[i];         
  } else {                                   
    queryThis += nodeArgs[i];
  }
}
//declares which function will run based off of user input
switch (action) {
  case "concert-this":
    concertThis(queryThis);
    break;
  case "spotify-this-song":
    if (queryThis) {
      spotifyThis(queryThis);
    } else {
      spotifyThis("The Sign ace of base");
    }
    break;
  case "movie-this":
    if (queryThis) {
      movieThis(queryThis);
    } else {
      movieThis("Mr.Nobody");
    }
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;

}
//bands in town
function concertThis(artist) {       

  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  
 //axios call for bands in town data
  axios 
  //gets the url
    .get(queryURL)   
    //then runs the response                
    .then(function(response) {
      //bypasses response and data in api call. start "response" with events
      var events = response.data;    
      //logs in lg.txt 
      var logCommand = "concert-this"; 
      events.forEach(function (evt) {   
        //array for output   
        var eventData = [   
          //new line                                        
          '\n',
          //venue
          'Venue: ' + evt.venue.name,   
          //location                          
          'Location: ' + evt.venue.city + ' ' + evt.venue.country, 
          //moment.js for event time
          'Date: ' + moment(evt.datetime).format('L') 
          //joins the data             
        ].join('\n');
        console.log(eventData);
        log(eventData, artist, logCommand);                                  
      });  
      
    })
    .catch(function(error) {
      if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
}

//spotify --------------------------------------------
function spotifyThis(song) {

 spotify
  .search({ type: 'track', query: song, limit: 10 })
  .then(function(response) {
    //bypasses api data by storing all data in tracks / makes text shorter
    var tracks = response.tracks.items; 
    //for data to be logged to log.text
    var logCommand = "spotify-this-song"; 
   
    tracks.forEach(function (track) {
     //shortens json for api data
      var artists = track.artists; 
      var artistsData = [];
      artists.forEach(function (artist) {
        artistsData = [
          artist.name
        ].join(' * ');
      });
        //song data array
      var trackData = [     
        //new line            
        '\n',
        //artist 
        'Artist (s): ' + artistsData,  
        //song 
        'Song: ' + track.name,        
        //album  
        'Album: ' + track.album.name,   
        //track url
        track.preview_url ? 'Preview URL: ' + track.preview_url : 'Preview URL: ' + 'none provided' 
        //joins info
      ].join('\n');

      console.log(trackData);
      log(trackData, song, logCommand);
    });
  }) //error function
  .catch(function(err) {
    console.log(err);
  });
}


//movie function
function movieThis(movieName) {

  var queryURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//axios call for movie url
  axios.get(queryURL).then(
  function(response) {
    var movie = response.data;
    //log.txt info
    var logCommand = "movie-this"; 
    //movie array
    var movieData = [
      //newline
      "\n",
      //title
      "Title: " + movie.Title, 
      //release year                                    
      "Released Year: " + movie.Year,    
      //rating                           
      "IMDB Rating: " + movie.imdbRating,                           
      "Rotten Tomato Rating: " + JSON.stringify(movie.Ratings[1]),  
      "Country: " + movie.Country,                                  
      "Language: " + movie.Language,                                
      "Plot of the movie: " + movie.Plot,                           
      "Actors: " + movie.Actors,                                    
    ].join("\n");                                                   string. Uses "\n", new line as a separator
      
    console.log(movieData);
    log(movieData, movieName, logCommand);

  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}

// =================================================

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      console.log(error);
    }
    var command = data.split(",");
    var action = command[0];
    var query = command[1].replace("\"", "").replace("\"", "");

    console.log(command);

    if (action === "concert-this") {
      concertThis(query);
    } else if (action === "spotify-this-song") {
      spotifyThis(query);
    } else if (action === "movie-this") {
      movieThis(query);
    }

    console.log(action);
    console.log(query);
 
 
  })
}

// =================================================

function log(data, info, logCommand) { // log(param1, param2) and use parameters to log the data in log.txt

  if (logCommand === "concert-this") {
    var command = "concert-this " + info;
  } else if (logCommand === "spotify-this-song") {
    var command = "spotify-this-song " + info;
  } else if (logCommand === "movie-this") {
    var command = "movie-this " + info;
  }
  var log = "\n" + "Command: " + command + "\n" + data + "\n" + "===========" + "\n";
  fs.appendFile("log.txt",log, function(error) {
    if (error) {
      return console.log(error);
    }
    
  })
}