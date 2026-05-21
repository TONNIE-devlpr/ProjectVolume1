var div=document.getElementById("tests");
var display=0;

function sectionA(){
    if(display==1){
        div.style.display='block';
        display= 0;
    }
    else{
        div.style.display='none';
        display=1;
    }
//   document.getElementById("tests").style.display='block';
} 

var divB=document.getElementById("histor");
var display=0;

function sectionB(){
    if(display==1){
        divB.style.display='block';
        display=0;
    }
    else{
        divB.style.display='none';
        display=1;
    }
//    document.getElementById("histor").style.display='block';
}
var divC=document.getElementById("suggestions");
var display=0;
function sectionC(){
    if(display==1){
        divC.style.display='block';
        display=0;
    }
    else{
        divC.style.display='none';
        display=1;
    }
//    document.getElementById("suggestions").style.display="block"
}