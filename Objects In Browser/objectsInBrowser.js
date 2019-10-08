function order(item,qty,price,purchaseDate)
{
    this.orderItem = item;
    this.orderQty = qty;
    this.orderPrice = price;
    this.displayOrder = function()
    {
        var subTotal = this.orderQty * this.orderPrice;
        return `You ordered ${this.orderQty} ${this.orderItem}s and your total is ${subTotal}$`;
    }
}

const order1 = new order('Toaster', 2, 24.99);
//console.log(order1.displayOrder());
const order2 = new order('Bread Slice', 24, .25);
//console.log(order2.displayOrder());


var aryOrders = [order1, order2]
//console.log(aryOrders);

// for (var i = 0; i <aryOrders.length; i++){
//     console.log(aryOrders[i].displayOrder());
// }

document.querySelector('h4').addEventListener('click', function(){
    var myList ="";

    for (var i = 0; i <aryOrders.length; i++){
        myList += `<li id=${i}> ${aryOrders[i].orderItem}</li>`;
    }

    document.getElementById('orders').innerHTML = myList;
})

document.getElementById('orders').addEventListener('click', function(e){
    alert(e.target.id);
    document.querySelector('h3').innerHTML = aryOrders[e.target.id].displayOrder();
})