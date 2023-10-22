
const PASTEL_COLOURS = ["#FEC8D8", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"];

const QUOTES = ["Love ya", "I do be in the state of loving you", "I love you", "You are my favourite subscrimbo", "Kiss for you", "Jag aelskar dig", "My Waifu",
                "<3 lovis for you <3", "My bestest girl is YOU", "Big Ounce Villian ark starts at 3pm on 6th of June 1944", "Ahhhhhhhh, I love you", "You are truly one of a kind",
                "literal heaven with you", "What if we kissed in Speyer?",  "What if we kissed infront of the StuG III", "You take up a scrumptious amount of space in my heart",
                "UwU :3", "A big hug for you", "Huuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuug", "Thinking 'bout you", "Thinking about you makes my heart warm", "Du tolle", 
				"Du suesse Maus", "El Gatooooo", "The best Pokemon Player", "My lovely Bingus Dingus"];

const FUN_FACTS = ["Fun fact: You are cute", "Fun fact: You are a small cute dingus bingus", "Fun fact: You are the best artist", 
                "Fun fact: I like you", "Fun fact: I love you", "Fun fact: Sometimes i look at pictures of you for way too long", "Fun fact: I crave for every second to spend with you"];      
                
const FUN_FACT_RATIO = 5;

const PICTURES = ["hugi.png", "pinkhapi.png", "me_n_alina.png", "armlehnelegends.png", "nosaddies.png"];

const PICTURE_PREFIX = "../img/";

var colourIndex =  getRandomInt(PASTEL_COLOURS.length);

document.body.style.background = PASTEL_COLOURS[colourIndex];

var imageContainer = document.getElementById("img-container");

var pictureIndex =  getRandomInt(PICTURES.length);
var picturePath = PICTURE_PREFIX + PICTURES[pictureIndex];

imageContainer.src = picturePath; 

changeText();

imageContainer.addEventListener('click', changeText , false);

function changeText() {
    var text = "";

    if(getRandomInt(FUN_FACT_RATIO) == FUN_FACT_RATIO - 1) {
        var funFactIndex =  getRandomInt(FUN_FACTS.length);
        text = FUN_FACTS[funFactIndex]; 
    } else {
        var qouteIndex =  getRandomInt(QUOTES.length);
        text = QUOTES[qouteIndex]; 
    }

    document.getElementById("text-container").innerText = text; 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
