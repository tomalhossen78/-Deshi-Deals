function innerTextNumber(id,id2,id3) {
    const price = parseInt(document.getElementById(id).innerText);
    const itemName = document.getElementById(id2).innerText;
    const subtotalPrice = parseFloat(document.getElementById('subtotal-price').innerText);
    
    const newsubtotal = price + subtotalPrice;
    document.getElementById('subtotal-price').innerText = newsubtotal;

    const discount = parseFloat(document.getElementById('discount').innerText);

    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    console.log(totalPrice);
    const newTotal = newsubtotal - discount;
    document.getElementById('total-price').innerText = newTotal;

    const img = document.getElementById(id3).src;
    
        // parent 
    const cartParent = document.getElementById('cart-parent');
    //    create Element
    const newItem = document.createElement('div');
    newItem.innerHTML = `<div class="bg-[#F4F1F1] flex my-4 items-center justify-around p-4 rounded-md">
                            <img src="${img}" alt="">
                            <div>
                                <h2 class="font-semibold text-xl text-[#111111]">${itemName}</h2>
                                <h2 class="text-xl text-[#111111] opacity-"><span>${price}</span>tk</h2>
                            </div>
                        </div>`
    console.log(newItem);

    // append child

    cartParent.prepend(newItem);
}
function cart() {
    

}