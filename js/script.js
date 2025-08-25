// data

const validCoupon = 1212;
function innerTextNumber(id, id2, id3) {
    const price = parseInt(document.getElementById(id).innerText);
    const itemName = document.getElementById(id2).innerText;
    const subtotalPrice = parseFloat(document.getElementById('subtotal-price').innerText);

    const newsubtotal = price + subtotalPrice;
    document.getElementById('subtotal-price').innerText = newsubtotal;

    document.getElementById('total-price').innerText = newsubtotal;
    // 
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
    
    // append child

    cartParent.prepend(newItem);
}

document.getElementById('disount-btn').addEventListener('click', function () {
    const coupon = parseInt(document.getElementById('coupon').value);
    const subtotalPrice = parseFloat(document.getElementById('subtotal-price').innerText);
    if (coupon === validCoupon) {
        const saveMoney = (subtotalPrice * (10 / 100)).toFixed(2);
        document.getElementById('discount').innerText = saveMoney;
        const newTotal = subtotalPrice - saveMoney;
        document.getElementById('total-price').innerText = newTotal;

    }
    else {
        alert('Please Enter the Valid Coupon Code.')
    }
})

