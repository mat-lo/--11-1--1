document.body.style.textTransform = "uppercase";

//document.body.innerHTML = document.body.innerHTML.replace(/\./g, shout());

//!!!11!!1!1!!1
function nativeSelector() {
    var elements = document.querySelectorAll("body, body *");
    var results = [];
    var child;
    for(var i = 0; i < elements.length; i++) {
        child = elements[i].childNodes[0];
        if(elements[i].hasChildNodes() && child.nodeType == 3) {
            results.push(child);
        }
    }
    return results;
}

var textnodes = nativeSelector(),
    _nv;
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    var newText = shout();
    //console.log(textnodes[i].nodeValue);
    textnodes[i].nodeValue = textnodes[i].nodeValue.replace(/$/g, newText);
}

function shout() {
    var length = getRandomInt(3, 13);
    var text = [];
    for (var i = 0; i < length; i++) {
        var r = Math.random() * 10;
        if(r < 5) {
         text[i] = '!';   
        } else if (r < 9) {
         text[i] = '1';       
        } else if (r < 9.4) {
         text[i] = 'ACASAAA';       
        } else if (r < 9.7) {
         text[i] = 'SVEGLIAA';       
        } else if (r < 10) {
         text[i] = 'PEPPEE';       
        }
    }
    text = text.join("");
    return text;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}