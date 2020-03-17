
// starter code for week 5 of pui lab

window.alert("One item has been added to your cart!");

document.getElementById("one").onclick=myFunction(){}
function myFunction(){ var x = document.getElementById("thumbnailImage");
  x.src = "./rolls 6.png";
}

function myFunction2(){ var x = document.getElementById("thumbnailImage");
  x.src = "./rolls 5.png";
}

function myFunction3(){ var x = document.getElementById("thumbnailImage");
  x.src = "./rolls 4.png";
}

function myFunction4(){ var x = document.getElementById("thumbnailImage");
  x.src = "./rolls 3.png";
}

function myFunction5(){ var x = document.getElementById("thumbnailImage");
  x.src = "./rolls 2.png";
}


var cartItemNumber=0;
function addToCart(){
cartItemNumber+=1;
document.getElementById("cartItem").innerHTML="Shopping Cart: cartItemNumber";
window.alert("One item has been added to your cart!");}