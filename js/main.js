

// wall clock 
function drowclock(){
    let num =""
    
    for(let i = 1 ; i < 13 ; i++ ){
        num += `<span class = "item" style ="transform: rotate(${30*i}deg);"><b style ="transform: rotate(${-30*i}deg);">${i}</b></span> `
        
    }
    document.getElementById("clockwall").innerHTML += num
}
drowclock()

let hour = document.getElementById("hour") ;
let min = document.getElementById("min") ;
let sec = document.getElementById("sec") ;

setInterval(function(){
    const date = new Date();
    let hr = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds()
    hour.style.transform =`rotate(${30*hr + mm/2}deg)`;
    min.style.transform =`rotate(${6*mm}deg)`;
    sec.style.transform =`rotate(${6*ss}deg)`;

}, 1000)


// number clock 

//  display time 

let printClock = document.getElementById("printClock");

let myTime =  setInterval(function(){
    const date = new Date();
    let printTme =""
    
    
    if (date.getHours() < 10 ){
        printTme +=`0${date.getHours() } : `;
    }else {
        if(date.getHours() > 12 && date.getHours() < 22 ){
            printTme  += `0${date.getHours()-12 } : `;   


        }else{
            if( date.getHours() > 21){
                printTme  += `${date.getHours() - 12} : `; 
            }else{
                printTme  += `${date.getHours() } : `;   
            }

        }
    }
    
    if (date.getMinutes() < 10 ){
        printTme  += `0${date.getMinutes() } : `;
    }else {
        printTme  += `${date.getMinutes() } : `;
    }
    
    if (date.getSeconds() < 10 ){
        printTme +=  `0${date.getSeconds() } `;
    
    }else {
        printTme  += `${date.getSeconds() } `; 
    }

    if (date.getHours() > 12) {
        printTme +="  PM"
    }else{
        printTme +="  AM"
    }


    printClock.innerHTML =  printTme;
},500);

// ////////////////////////////////////////////////////

// start countDown

let target_date = new Date().getTime() + (1000*3600*24*3); // set the countdown date
let days, hours, minutes, seconds; // variables for time units

let countdown = document.getElementById("tiles"); // get tag element

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}




// ////////////////////////////////////////

// start calculator 

// ///////////////////////////////////////
let one = document.getElementById("btn-1")
let two = document.getElementById("btn-2")
let thire = document.getElementById("btn-3")
let four = document.getElementById("btn-4")
let five = document.getElementById("btn-5")
let six = document.getElementById("btn-6")
let seven = document.getElementById("btn-7")
let eight = document.getElementById("btn-8")
let nine = document.getElementById("btn-9")
let zero = document.getElementById("btn-0")
let btnNe = document.getElementById("btnNe")
let btnDot = document.getElementById("btn-dot")
let btnO = document.getElementById("btnO")
let btnK = document.getElementById("btnK")
let btnCE =document.getElementById("btnCE")

let plase = document.getElementById("btn-p")
let btnM = document.getElementById("btn-m")
let btnD = document.getElementById("btn-d")
let btnT =document.getElementById("btn-t")

let btnP = document.getElementById("btn-%")
let equal = document.getElementById("btn-e")
let btnClear = document.getElementById("btn-clear" )



let totalofCalc =document.getElementById("totalofCalc");
let display = document.getElementById("display");
var num = "";
btnCE.addEventListener("click" , function(){
    num = num.slice(0 , -1);
    wrightFun()
})

btnK.addEventListener("click" , function(){
    num += "/" ;
    wrightFun()
})
btnO.addEventListener("click" , function(){
    num += "**2" ;
    wrightFun()
})
btnDot.addEventListener("click", function(){
    num += "." ;
    wrightFun()
})
btnNe.addEventListener("click" , function() {
    num += "-";
    wrightFun()
})
one.addEventListener("click" , function(){
    num += 1;
    wrightFun()
})
two.addEventListener("click" , function(){
    num += 2;
    wrightFun()})
thire.addEventListener("click" , function(){
    num += 3;
    wrightFun()})
four.addEventListener("click" , function(){
    num += 4;
    wrightFun()})
five.addEventListener("click" , function(){
    num += 5;
    wrightFun()})
six.addEventListener("click" , function(){
    num += 6;
    wrightFun()})
seven.addEventListener("click" , function(){
    num += 7;
    wrightFun()})
nine.addEventListener("click" , function(){
    num += 9;
    wrightFun()})
eight.addEventListener("click" , function(){
    num += 8;
    wrightFun()})
zero.addEventListener("click" , function(){
    num += 0;
    wrightFun()})
plase.addEventListener("click" , function(){
    num += "+";
    wrightFun()
})
btnM.addEventListener("click" , function(){
    num += "-";
    wrightFun()
})
btnD.addEventListener("click" , function(){
    num += "/";
    wrightFun()
})
btnT.addEventListener("click" , function(){
    num += "*";
    wrightFun()
})

btnP.addEventListener("click" , function(){
    num += "%";
    wrightFun()
})

equal.addEventListener("click" , function(){
    totalofCalc.innerHTML = eval(num);
})


function wrightFun(){
    display.innerHTML = num;
}


btnClear.addEventListener("click" , function(){
    num = ""
    totalofCalc.innerHTML = 0 ;
    display.innerHTML = 0
})