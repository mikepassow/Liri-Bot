# Liri-Bot

<h1>LIRI-Bot</h1>
<hr>
<p>
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands: </p>

<ul>
<li>Bands in town</li>

<li>Spotify-this-song</li>

<li>Movie-this</li>

<li>Do-what-it-says</li>
</ul>

<hr>


<h3>How to Run LIRI-Bot</h3>

<p>1: node liri.js concert-this "artist name / arena name >"</p>

<p>2: node liri.js spotify-this-song "song name here" This will show the following information about the song in your terminal/bash window * Artist(s) * The song's name * A preview link of the song from Spotify * The album that the song is from. If no song is provided then the program will default to "The Sign" by Ace of Base. </p>
<p>
3: node liri.js movie-this "movie name here"
</p>

<p>
This will output the following information to your terminal/bash window:
</p>
<ul>
<li>Title of the movie.</li>
<li>Year the movie came out.</li>
<li>IMDB Rating of the movie.</li>
<li>Country where the movie was produced.</li>
<li>Language of the movie.</li>
<li>Plot of the movie.</li>
<li>Actors in the movie.</li>
<li>Rotten Tomatoes Rating.</li>
<li>Rotten Tomatoes URL.</li>
<li>If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'</li>

<p>4: node liri.js do-what-it-says</p>

<p>This will output the command placed in random.txt file </p>

