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
function rpsgame(yourschoice){
    console.log( 'tourcho' ,yourschoice);
    var humanchoice, botchoice;
    humanchoice=yourschoice.id;
    botchoice=numbertochoice(randomint());
    console.log(yourschoice.id);
    console.log('bot choice',botchoice);
    console.log('my choice',yourschoice.id);
    result =decidewinner(humanchoice,botchoice);
    console.log(result);
    message=finalmessage(result);
    console.log("messaage",message);
    rpsfrontend(yourschoice.id,botchoice,message);

    
}

function randomint(){
    return Math.floor(Math.random()*3);
}
function numbertochoice(number){
    return ['paper','scissor','rock'][number];
}

function decidewinner(merichoice ,computerchoice){
    console.log(merichoice,computerchoice);
    var rpsdatabase ={
        'rock':{ 'scissor':1,'rock':0.5,'paper':0},
        'paper':{ 'rock':1,'paper':0.5,'scissor':0},
        'scissor':{ 'paper':1,'scissor':0.5,'rock':0}


    };
    var yourscore=rpsdatabase[merichoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][merichoice];
    console.log(yourscore,computerscore);

    
    return [yourscore,computerscore];
    
}
function finalmessage([yourscore,computerscore]){
    if(yourscore===0){
        return {'message':'you lost!','color':'red'};
    }

    else if(yourscore===0.5){

        return {'message':'you tied !','color':'yellow'};
    }
    else{
        return {'message':'you won !','color':'green'};

    }
    return{}

    }
    // console.log('message',message);

function rpsfrontend(humanimagechoice,botimagechoice,finalmessage){
    var imagedatabase ={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src}
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    

    var humandiv= document.createElement('div');
    var botdiv = document.createElement('div');
    var md = document.createElement('div');
    
    
    humandiv.innerHTML ="<img src='" +imagedatabase[humanimagechoice]+"'height = 200 width=200 style= 'box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    //md.innerHTML="<h1 style='color: "+ message.color+"; font-size:60px; padding :30px style= 'box-shadow:0px 10px 50px rgba(37,50,233,1); '>" +message.message+ "</h1>"
    //document.getElementById('flex-box-rps-div').innerHTML ="<img src='" +imagedatabase[humanimagechoice]+"'height = 150 width=150 style= 'box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    md.innerHTML= "<h1 style='color: "+ message.color+"; font-size:60px; padding :30px style= 'box-shadow:0px 10px 50px rgba(37,50,233,1); '>" +message.message+ "</h1>"
    botdiv.innerHTML ="<img src='" +imagedatabase[botimagechoice]+"'height = 200 width=200 style= 'box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(md);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    // document.getElementById('flex-box-rps-div').appendChild(md);
    // document.getElementById('flex-box-rps-div').appendChild(messagediv);

    // humandiv.innerHTML ="<img src='" +imagedatabase[humanimagechoice]+"'height = 150 width=150 style=box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    // M.innerHTML= "<h1 style='color: "+ message.color+"; font-size:60px; padding :30px; '>" +message.message+"</h1>"
    // botdiv.innerHTML ="<img src='" +imagedatabase[botimagechoice]+"'height = 150 width=150 style=box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    // document.getElementById('flex-box-rps-div').appendChild(humandiv);
    // document.getElementById('flex-box-rps-div').appendChild(botdiv);
    // // document.getElementById('flex-box-rps-div').appendChild(messagediv);


}


