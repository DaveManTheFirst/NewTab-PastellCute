
const PASTEL_COLOURS = ["#FEC8D8", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"];

const QUOTES = ["Love ya", "I do be in the state of loving you", "I love you", "You are my favourite subscrimbo", "Kiss for you", "Jag aelskar dig", "My Waifu",
                "<3 lovis for you <3", "My bestest girl is YOU", "Big Ounce Villian ark starts at 3pm on 5th of June 1944", "Ahhhhhhhh, I love you"];

const PICTURES = ["hugi.png", "pinkhapi.png", "me_n_alina.png", "armlehnelegends.png", "nosaddies.png"];

const PICTURE_PREFIX = "../img/";

var css = "body { background-color: #FEC8D8 !important; }";

var colourIndex =  getRandomInt(PASTEL_COLOURS.length);

document.body.style.background = PASTEL_COLOURS[colourIndex];

var imageContainer = document.getElementById("img-container");

var pictureIndex =  getRandomInt(PICTURES.length);
var picturePath = PICTURE_PREFIX + PICTURES[pictureIndex];

imageContainer.src = picturePath; 

changeText()

imageContainer.addEventListener('click', changeText , false);

function changeText() {
    var qouteIndex =  getRandomInt(QUOTES.length);

    document.getElementById("text-container").innerText = QUOTES[qouteIndex]; 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
