var open = document.getElementById("open");
var ham = document.getElementsByClassName("ham");
var in1 = document.getElementById("in1");
var in2 = document.getElementById("in2");
var answer = document.getElementsByClassName("answer");
var submit0 = document.getElementsByClassName("submit0");
var open1 = document.getElementsByClassName("open1");
var bbb = document.getElementsByClassName("bbb");
var open2 = document.getElementsByClassName("open2");
var ccc = document.getElementsByClassName("ccc");

ham[0].addEventListener("click",myfunc1)
submit0[0].addEventListener("click",myfunc2)
bbb[0].addEventListener("click",myfunc3)
ccc[0].addEventListener("click",myfunc4)

var arr_months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var arr_months_no = ["1","2","3","4","5","6","7","8","9","10","11","12"];


function myfunc2() { 
var year = in1.value;
var month = in2.value;
var month1 = arr_months[in2.value-1];
var time = new Date(year, month, 0);
var day = time.getDate() ;
var answer2 = `The Month of ${arr_months[in2.value - 1]} in the year ${year} has ${day} days in it`;
answer[0].innerHTML = answer2 ;

if(month =="" || year ==""){
answer[0].innerHTML = ""		
		}else{
				answer[0].innerHTML = answer2 ;
			}
  }


var a = 0;
function myfunc1(){
open.style.height = "195px"		
open.style.width = "auto"			
ham[0].innerHTML ="X"	
a++;

if(a%2 === 0){		
open.style.height ="0px"		
open.style.overflow ="hidden"		
ham[0].innerHTML ="&#9776"
		}
	}

var b = 0;
function myfunc3(){
open1[0].style.height = "90px"		
open1[0].style.width = "auto"	
b++;

if(b%2 === 0){		
open1[0].style.height ="0px"		
open1[0].style.overflow ="hidden"		
		}
	}
	
var c = 0;
function myfunc4(){
open2[0].style.height = "90px"		
open2[0].style.width = "auto"	
c++;

if(c%2 === 0){		
open2[0].style.height ="0px"		
open2[0].style.overflow ="hidden"		
		}
	}