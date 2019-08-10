
var fs = require("fs");
require("dotenv").config(); // to read and set any environment variables with the dotenv package
var keys = require("./keys.js"); //adds the keys.js file and uses data from it
var spotify = new Spotify(keys.spotify); //pulls spotify data?
var axios = require("axios"); //initializes axios
var moment = require("moment"); //initializes moment.js

var first = process.argv[2];

switch (first) {
    case "concert-this":
      concertThis();
      break;
  
  }

  //function for bands
function concertThis() {

}

//function for sportify


//function for movies


//function for do-what-it-says