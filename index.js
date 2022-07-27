var bedSheet = 0;
var cup = 0;
var tearedCup=0;
var rope = 0;

try {
    var logoImg=document.querySelector("#logoImg");
logoImg.addEventListener("click", function(){
    console.log(bedSheet);
    console.log(cup);
    console.log(tearedCup);
    console.log(rope);
})

} catch (error) {
    
}
/* BedScreen */
try{
    var sheetTake = document.querySelector("#sheet");


    sheetTake.addEventListener("click", function(){
        sheetTake.classList.add("invisible");
        tearedCup = JSON.parse(localStorage.getItem("tearedCup"));
        bedSheet=1;
        alert("ты взял простыню");
        document.querySelector("#sheetText").innerHTML="";
        console.log("простыня"+bedSheet);
        console.log("лезвие"+tearedCup);
        localStorage.setItem("bedSheet",JSON.stringify(bedSheet));
        if (tearedCup==1){
            var addLink=document.querySelector("#cutSheet");
            addLink.classList.remove("invisible");
        }
    })
}
catch(e){
    
}

/* TEARCUP */

try{
    var tearCup = document.querySelector("#tearCup");

    tearCup.addEventListener("click", function(){
        var bedSheet = JSON.parse(localStorage.getItem("bedSheet"));
        alert("Ты порвал кружку и получил плохое гнущееся лезвие.");
        cup = 0;
        tearedCup=1;
        console.log("простыня"+bedSheet);
        console.log("лезвие"+tearedCup);
        localStorage.setItem("tearedCup",JSON.stringify(tearedCup));
        if (bedSheet==1){
            var addLink=document.querySelector("#cutSheet");
            addLink.classList.remove("invisible");
        }

    })
}
catch(e){

}

/* DrinkCup */

try{
    var drinkCup = document.querySelector("#drinkCup");

    drinkCup.addEventListener("click", function(){
        alert("ты получил пустую кружку")
        cup = 1;
        localStorage.setItem("cup",JSON.stringify(cup));
        console.log(cup);
    })
}
catch{
    
}


/* DeathScreen */


try{
    var death = document.querySelector("#death");

death.addEventListener("click", function(){
    bedSheet = 0;
    cup = 0;
    rope = 0;
    tearedCup=0;
    localStorage.setItem("bedSheet",JSON.stringify(0));
    localStorage.setItem("tearedCup",JSON.stringify(0));
    localStorage.setItem("cup",JSON.stringify(0));
    console.log(bedSheet);
    console.log(cup);
    console.log(rope);
    document.querySelector("#cutSheet").classList.add("invisible");
    sheetTake.classList.remove("invisible");
})
}
catch{
    
}
