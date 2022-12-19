let total = [84.99,104.99,89.99,59.99,69.99,74.99,109.99,69.99,74.99,54.99];


//  for minus button
var minuses = document.getElementsByClassName("minus");

for(var i = 0; i < minuses.length; i++ ){
    minuses[i].addEventListener('click', function(){
        var quantity = this.nextElementSibling.innerHTML 
        if(quantity > 0) {
            quantity--;
        }
        this.nextElementSibling.innerHTML = quantity;
    })
}
//   for plus button
var pluss = document.getElementsByClassName("plus");

for(var t = 0; t < pluss.length; t++ ){
    pluss[t].addEventListener('click', function(){
        var quantity = this.previousElementSibling.innerHTML 
            quantity++;
        this.previousElementSibling.innerHTML = quantity;
    })
}


//  delete button

var buttons = document.getElementsByClassName("btn5")

for ( var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        this.parentElement.parentElement.parentElement.remove();
    })
}
