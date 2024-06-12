let container = document.querySelector('#catalogue')
let search = document.querySelector('#search')



let products = JSON.parse(localStorage.getItem('products')) || []

//display products

function displayProducts(args) {
    container.innerHTML = ""
    try {
        args.forEach(product => {
            container.innerHTML += `
                <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="${product.name}" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text card-description">${product.description}</p>
                        <p class="card-text">R ${product.price}</p>
                        <button type='button' class="btn btn-outline-success addToCart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
                    </div>
                </div>
            
             ` 
        })

    } catch (e) {
        container.textContent = 'Please try again later'
    }
}

displayProducts(products)

let checkoutItems = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : []

function addToCart(product){
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('[counter]').textContent = 
        checkoutItems.length || 0

    }catch(e) {
        alert("Add to cart unsuccessful")
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[counter]').textContent = checkoutItems.length || 0
    
    document.querySelector('.addToCart').forEach(button => {
            button.addEventListener('click', (event) => {
                let product = {
                    id: event.target.dataset.id,
                    name: event.target.dataset.name,
                    price: event.target.dataset.price,
        
                };
                addToCart(product)
            })
        })
})

function clearCart() {
    try {
        localStorage.removeItem('checkout')
        checkoutItems = []
        document.querySelector('[counter]').textContent = 0
        document.getElementById('cartItems').innerHTML = ''
        document.getElementById('cartTotal').textContent = '0.00'

    }catch (e) {
        alert('Clearing cart unsuccessful')
    }

}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('clearCartBtn').addEventListener('click', clearCart)
})

//search

search.addEventListener('keyup', () => {
    try {
        if (search.value.length < 1) {
            displayProducts(products)
        }
        let filteredProduct = products.filter(product => 
            product.name.toLowerCase().includes(search.value))
        displayProducts(filteredProduct)
        if (!filteredProduct.length) throw new Error(`${search.value} was not found`)

    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
})