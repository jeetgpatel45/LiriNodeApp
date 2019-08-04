// USING DOTENV TO HIDE THE KEYS
require("dotenv").config();

// NPM PACKAGES VARIABLES
var keys = require("./keys.js");
var axios = require("axios")
var fs = require("fs");
var spotify = require("node-spotify-api");

// PROCESS ARGV's
var title = process.argv[2];
var name = process.argv.slice(3).join(" ");
console.log(process.argv)

// function Spotify() {
//     var spotify = new Spotify(keys.spotify);

//     spotify.search(function (err, data) {
//         if (err) throw err;
//         console.log("")

// }


// CREATING FUNCTIONS
function concert(artist) {

    var artist = name
    var concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(concertURL).then(
        function (response) {
            console.log("-----------------------------")
            console.log("Name: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.city);
            console.log("Date: " + response.data[0].datetime)
            console.log("-----------------------------")
        },
    )
}
function movie(movie) {

    if (!movie) {
        movie = "Mr. Nobody";
    }
    var movie = name
    var movieURL = "http://www.omdbapi.com/?t=" + movie + "&y=&ploy=short&apikey=trilogy"

    axios.request(movieURL).then(
        function (response) {
            console.log("============================")
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.year);
            console.log("IMDB: " + response.data.imdbRating);
            console.log("Box office: " + response.data.BoxOffice);
            console.log("Origin: " + response.data.Country)
            console.log("Languages: " + response.data.Language);
            console.log("============================")
            console.log("Plot: " + response.data.Plot);
            console.log("============================")
            console.log("Actors: " + response.data.Actors);
            console.log("============================")
        },
    )
}
function random () {
    fs.readFile("random.txt", "UTF8", function(err, data){
        if (err) {
            return console.log(error);
        } else {
            console.log(data);
        }
    })
}

switch (title) {
    case "spotify-this-song":
        spotify();
        break;
    case "concert-this":
        concert();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        random();
        break;
    default:
        console.log("Try Again")
}

