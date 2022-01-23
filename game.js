//challange 1
function ageindays(){
var birthyear = prompt("what year were you born ... good friiend");
var ageindays =(2022-birthyear)*365;
var h1 = document.createElement('h1');
var textanswer =document.createTextNode("you are"+ageindays+"days old");
h1.setAttribute('id','ageindays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}

function generatecat(){
    var image = document.createElement('img');
    var div = document.getElementById('cat-gen');
    image.src="https://c.tenor.com/eH-L7uAQ7ZUAAAAC/hello-hi.gif"
    div.appendChild(image)
    
}
//////////////////////////////////////////////////////////////////////////////////////
