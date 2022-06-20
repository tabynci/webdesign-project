function list(){
var quantity = [];

var cart = [];
var x=prompt("how many items would you like to order ? ");

for(v=0; v<x; v++)

{

var item = prompt('What item do you want ? ');

cart.push(item);

var qty = prompt('how many ' + item + ' do you want ? ');

for(i=0; i<qty; i++) {

    quantity.push(item);

}

}
for(incart=0; incart<cart.length; incart++) {

    document.getElementById("demo").innerHTML += cart[incart];

    var index=0;

    for(at=0; at<quantity.length; at++)

    {

        if(quantity[at]==cart[incart])

        {

            index++;

            }
			}

    document.getElementById("demo").innerHTML += "</br>" +index ;

    document.getElementById("demo").innerHTML += "</br>";

}

}

