
// set up text to print, each item in array is new line
var aText = new Array(
"The menu for today is Hansik:", 
"Hwanggeum bapsang!"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var isProgress = false;
var t1, t2;
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   t1 = setTimeout("typewriter()", 500);
  }
 } else {
  t2 = setTimeout("typewriter()", iSpeed);
 }
}

function getMenu() {
    aText = bap();
}

function startTypewriter()
{
    getMenu();
    iArrLength = aText[0].length;
    if(!isProgress) {
        isProgress = true;
        typewriter();   
    }
    else {
        clearTimeout(t1);
        clearTimeout(t2);
        iIndex = 0;

        iTextPos = 0;
        sContents = '';
        var destination = document.getElementById("typedtext");
        destination.innerHTML = "";
        typewriter();   
    }
}


function showMenu() {
    startTypewriter();
}

