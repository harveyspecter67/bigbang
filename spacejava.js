var starNumber=0;
var star = [];

function starCreator()
{
    var starIndex= starNumber;
    starNumber++;
    document.getElementById("text").innerHTML = "<br>You have created a star!";
    document.getElementById("starDeck").innerHTML ="<br>Total Stars:  " + starNumber;
    document.getElementById("starDeck").innerHTML += "<br>Star Index " + (starIndex+1) + " created!";
}
function destroyer()
{
    
    if(starNumber>0)
    {
        document.getElementById("text").innerHTML = "<br>You have destroyed a star!";
        document.getElementById("starDeck").innerHTML ="<br>Total Stars:  " + starNumber;
        document.getElementById("starDeck").innerHTML += "<br>Star Index " + starNumber + " destroyed!";
         starNumber--;
    }
    else
    {
        document.getElementById("text").innerHTML = "<br>No stars left to destroy!";
    }
}
function startFunction()
{
   // alert("Start button clicked!");
document.getElementById("stars").innerHTML="Youve just created your space , start by adding a star!"+
    "<button class='createStar' onclick='starCreator()'>Create Star</button>" + 
    "<br> <button class='destroy' onclick='destroyer()'>Destroy the universe</button>";
//starCreator();
}

//document.getElementById("start").addEventListener("click", startFunction);