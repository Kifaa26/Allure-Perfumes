//displayCheckoutItems

let checkoutItems = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')): []

function displayCheckoutItems () {
    const tbody = document.querySelector('table tbody')
    const cartTotal = document.querySelector('#cartTotal')
    tbody.innerHTML = ''

    let total = 0

    if (checkoutItems.length > 0) {
        checkoutItems.forEach(item => {
            const row = document.createElement('tr')
            row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>R ${item.price}</td>
                    <td>${item.quantity}</td>
            `;
            tbody.appendChild(row)
    
            total += parseFloat(item.price) * item.quantity
        })
    }else {
        tbody.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
            <p>No Products Found</p>
        </div>
        `;
    }

}
displayCheckoutItems()

// clearCart
function clearCart() {
    localStorage.removeItem('checkout');
    alert('Press "OK" to remove items from your cart');
    location.reload();
}

function payNow() {
    localStorage.removeItem('checkout');
    alert('Payment successful');
    location.reload();
} 