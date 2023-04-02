function shouldIgnoreWord(word)
{
    // true if the word is valid and not is in the ignoreWords array.
    return word && !ignoreWords.includes(word);
}

// called by HTML UI
function onInput() {
    // e.g. "Please take the  Bucket" (note some words are upper case)
    var inputText = document.getElementById("input").value;

    console.log("> " + inputText);
    // += is adding to the existing content
    document.getElementById("output").innerHTML += '<p class="input"> > ' + inputText + "</p>";

    // e.g. "please take the  bucket" (note the extra space)
    inputText = inputText.toLowerCase();
    // e.g. [ "please", "take", "the", , "bucket" ] (this is an array)
    var inputArray = inputText.split(" ");
    // e.g. [ "take", "bucket" ] (some elements have been removed)
    inputArray = inputArray.filter(shouldIgnoreWord);

    // todo: better parser
    for (i = 0; i < inputArray.length; ++i) {
        action(inputArray[i]);
    }

    // clear input UI
    document.getElementById("input").value = "";
    // scroll to bottom
    window.scrollTo(0, 99999);
}

function print(txt) {
    console.log(txt);
    // += is adding to the existing content
    document.getElementById("output").innerHTML += "<p>" + txt + "</p>";
}

function isNorth(verb) {
    return verb == "n" || verb == "north";
}

function isSouth(verb) {
    return verb == "s" || verb == "south";
}


function isAnyDirection(verb) {
    return isNorth(verb) || isSouth(verb);
}